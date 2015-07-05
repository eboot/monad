
"use strict";

import {Component} from '../classes/Component';

let params;
let route;
let modal;

class ListController {

    constructor($scope, $route, $modal, $translatePartialLoader, Authentication, $injector) {
        if ($route.current && $route.current.locals) {
            for (let p in $route.current.locals) {
                if (p.substring(0, 1) == '$') {
                    continue;
                }
                this[p] = $route.current.locals[p];
            }
        }
        this.$new = new this.Manager.model();
        params = $route.current.params;
        modal = $modal;
        route = $route;

        if (this.defaultFilter) {
            this.filter = this.defaultFilter;
        }

        this.page = params.page || 1;
        $translatePartialLoader.addPart(this.module.name);

        let authenticate;
        if (this.module.defaults.list
            && this.module.defaults.list.resolve
            && this.module.defaults.list.resolve.Authentication
        ) {
            authenticate = $injector.instantiate(this.module.defaults.list.resolve.Authentication);
        } else {
            authenticate = Authentication;
        }

        if (!authenticate.check) {
            authenticate.missing();
        }

        $scope.$watch('list.filter', (newvalue) => {
            this.page = 1;
            this.Manager.filter = newvalue;
            delete this.Manager.$count;
        }, true);
    }

    get page() {
        return this._page;
    }

    set page(page) {
        this._page = page;
        this.Manager.filter = this.filter;
        delete this.Manager.$count;
        this.Manager.paginate(page, params).success(items => this.items = items);
    }

    /**
     * Method allowing item deletion directly from a list:
     */
    ['delete'](item) {
        let modalInstance = modal.open({
            template: `<div class="modal-header"><h3 class="modal-title">{{'monad.delete.title' | translate}}</h3></div>
<div class="modal-body">
    {{'monad.delete.body' | translate}}
</div>
<div class="modal-footer">
    <button class="btn btn-primary" ng-click="ok()">{{'monad.delete.ok' | translate}}</button>
    <button class="btn btn-warning" ng-click="cancel()">{{'monad.delete.cancel' | translate}}</button>
</div>`,
            controller: ['$scope', '$modalInstance', ($scope, $modalInstance) => {
                $scope.ok = () => {
                    this.Manager['delete'](item);
                    $modalInstance.close(item);
                    route.reset();
                    route.reload();
                };
                $scope.cancel = () => {
                    $modalInstance.dismiss('cancel');
                };
            }]
        });
    }

};

ListController.$inject = ['$scope', '$route', '$modal', '$translatePartialLoader', 'Authentication', '$injector'];

export {ListController};

