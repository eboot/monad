
"use strict";

import {Model} from '../classes/Model';
import {Collection} from '../classes/Collection';

let http;
let cache;

function appendTransform(transform) {
    let defaults = http.defaults.transformResponse;
    defaults = angular.isArray(defaults) ? defaults : [defaults];
    return defaults.concat(transform);
};

class Manager {

    constructor($http, $cacheFactory) {
        http = $http;
        if (cache === undefined) {
            cache = $cacheFactory('monad-managers');
        }
        // Set this per-manager where needed:
        this.model = Model;
        this.collection = new Collection();
    }

    get count() {
        return 0;
    }

    list(url) {
        return http({
            url,
            method: 'GET',
            transformResponse: appendTransform(values => {
                while (this.collection.length) {
                    this.collection.pop();
                }
                values.map(value => this.collection.push((new this.model()).$load(value)));
                return this.collection;
            }),
            cache
        });
    }

    find(url) {
        return http({
            url,
            method: 'GET',
            transformResponse: appendTransform(item => (new this.model()).$load(item)),
            cache
        });
    }

    save(model) {
        if (model.$new) {
            return this.create(model);
        } else if (model.$deleted) {
            return this['delete'](model);
        } else if (model.$dirty) {
            return this.update(model);
        }
        return {};
    }

    /**
     * API interface. These should be overridden by a custom implementation,
     * since we have no way to guesstimate how your API works. Hence, these
     * throw an error as a friendly reminder :)
     *
     * The actual implementations should return promises.
     */
    create(model) {
        throw "Manager.create must use a custom implementation.";
    }

    update(model) {
        throw "Manager.update must use a custom implementation.";
    }

    ['delete'](model) {
        throw "Manager.delete must use a custom implementation.";
    }

    get http() {
        return http;
    }

};

Manager.$inject = ['$http', '$cacheFactory'];

export {Manager};

