!function e(t,n,r){function a(i,u){if(!n[i]){if(!t[i]){var l="function"==typeof require&&require;if(!u&&l)return l(i,!0);if(o)return o(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return a(n?n:e)},c,c.exports,e,t,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)a(r[i]);return a}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n,r){r.html5Mode(!1),n.when("/",{controller:"moController"}).when("/:language/",{controller:u.HomeController,controllerAs:"home",templateUrl:"../monad/templates/home.html"}).when("/:language/login/",{controller:l.LoginController,controllerAs:"login",templateUrl:"../monad/templates/login.html"}),e.useLoader("$translatePartialLoader",{urlTemplate:"{part}/i18n/{lang}.json"}),e.preferredLanguage("en"),t.addPart("../monad")}Object.defineProperty(n,"__esModule",{value:!0});var o=e("./classes/Monad"),i=e("./controllers/RootController"),u=e("./controllers/HomeController"),l=e("./controllers/LoginController"),s=e("./services/Navigation"),c=e("./services/Authentication"),d=e("./services/Language"),f=e("./helpers/post"),g=r(f),m=e("./directives/angular"),p=r(m),v="monad.core";angular.module(v,["ng","ngRoute","pascalprecht.translate","ngSanitize","ui.bootstrap",p["default"]]).config(["$translateProvider","$translatePartialLoaderProvider","$routeProvider","$locationProvider",a]).run(["$http","$rootScope","$translate","$route","$cacheFactory",function(e,t,n,r,a){g["default"](e),t.$on("$translatePartialLoaderStructureChanged",function(){return n.refresh()}),r.reset=function(){var e=a.info();for(var t in e)"templates"!=t&&a.get(t).removeAll()}}]).controller("moController",i.RootController).service("moNavigation",s.Navigation).service("moAuthentication",c.Authentication).service("moLanguage",d.Language).value("title","Default generic administrator").value("languages",["en","nl"]).value("theme","../monad/default.css"),window.monad=new o.Monad;var h=angular.bootstrap;angular.bootstrap=function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];window.monad.bootstrap(),h.apply(void 0,t)},n["default"]=v,t.exports=n["default"]},{"./classes/Monad":3,"./controllers/HomeController":5,"./controllers/LoginController":7,"./controllers/RootController":8,"./directives/angular":9,"./helpers/post":19,"./services/Authentication":20,"./services/Language":21,"./services/Navigation":22}],2:[function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){var t=this,n=void 0===arguments[1]?{}:arguments[1],r=void 0===arguments[2]?{}:arguments[2];r.module=function(){return t.name},n.resolve=r,this.queued.push(["config",["$routeProvider","$translatePartialLoaderProvider",function(r,a){r.when("/:language"+e,n),a.addPart(t.name)}]])}function i(e){var t=void 0===arguments[1]?void 0:arguments[1];return void 0==t&&(t=function(e){return e.substring(1).toUpperCase()}),e.replace(/\/(\w)/g,t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("../controllers/ListController"),s=e("../controllers/CrudController"),c=e("../services/Navigation"),d=new c.Navigation,f={list:{options:{controller:l.ListController,controllerAs:"list",templateUrl:"../monad/templates/list.html"}},crud:{options:{controller:s.CrudController,controllerAs:"crud"}}},g=angular.module("monad.interface",[]),m=function(){function e(t){var n=this,r=void 0===arguments[1]?[]:arguments[1],o=void 0===arguments[2]?void 0:arguments[2];a(this,e),this.paths={},this.name=t,this.$manager=void 0,this.settings={dependencies:r,configFn:o},this.queued=[];var i=function(e){"function"==typeof g[e]&&(n[e]=function(){for(var t=arguments.length,r=Array(t),a=0;t>a;a++)r[a]=arguments[a];return n.queued.push([e].concat(r)),n})};for(var u in g)i(u)}return u(e,[{key:"bootstrap",value:function(){var e=this;this.ngmod=angular.module(this.name,this.settings.dependencies,this.settings.configFn),this.queued.map(function(t){var n=t.shift();if("string"==typeof n){var a;(a=e.ngmod)[n].apply(a,r(t))}else n.apply(void 0,r(t))})}},{key:"extend",value:function(e){}},{key:"list",value:function(e){var t=void 0===arguments[1]?{}:arguments[1],n=void 0===arguments[2]?{}:arguments[2];return t=angular.extend({},f.list.options,t),delete t.template,n.Manager=n.Manager||[i(this.name)+"Manager",function(e){return e}],"columns"in t&&!function(){var e=t.columns;n.columns=function(){return e},delete t.columns}(),"menu"in t&&!t.menu||d.register(t.menu||"main","/:language"+e,"monad.navigation."+i(this.name,".$1")),delete t.menu,this.settings.list={url:e,options:t,resolve:n},o.call(this,e,t,n),this.paths.list="/:language"+e,this}},{key:"update",value:function(e){var t=void 0===arguments[1]?{}:arguments[1],n=void 0===arguments[2]?{}:arguments[2];return t=angular.extend({},f.crud.options,t),t.templateUrl=t.templateUrl||this.name+"/schema.html",delete t.template,n.Manager=n.Manager||[i(this.name)+"Manager",function(e){return e}],this.settings.update={url:e,options:t,resolve:n},o.call(this,e,t,n),this.paths.update="/:language"+e,this}},{key:"manager",value:function(e){return this.$manager=i(this.name)+"Manager",this.service(this.$manager,e),this}}]),e}();n.Component=m},{"../controllers/CrudController":4,"../controllers/ListController":6,"../services/Navigation":22}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e("./Component"),i=void 0,u={},l=function(){function e(){r(this,e)}return a(e,[{key:"application",value:function(e){var t=void 0===arguments[1]?[]:arguments[1],n=void 0===arguments[2]?void 0:arguments[2];if(void 0!=i)throw"Sorry, you can only call `monad.application` once!";var r=["monad.core"];for(var a in u)r.push(a);return i=new o.Component("monad",t.concat(r),n)}},{key:"component",value:function(e){var t=void 0===arguments[1]?[]:arguments[1],n=void 0===arguments[2]?void 0:arguments[2];return e in u||(u[e]=new o.Component(e,t.concat(["monad.core"]),n)),u[e]}},{key:"bootstrap",value:function(){if(void 0==i)throw"Looks like you forget to call monad.application...";for(var e in u)u[e].bootstrap();i.bootstrap()}}]),e}();n.Monad=l},{"./Component":2}],4:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e("../classes/Component"),i=void 0,u=void 0,l=void 0,s=void 0,c=function(){function e(t,n,a,o){var c=this;if(r(this,e),i=t,u=n,l=a,s=o,t.current&&t.current.locals)for(var d in t.current.locals)"$"!=d.substring(0,1)&&(this[d]=t.current.locals[d]);switch(t.current.params.id){case"create":this.item=new this.Manager.model;break;default:this.Manager.find(t.current.params).success(function(e){return c.item=e})}}return a(e,[{key:"save",value:function(){this.item.$new?this.Manager.create(this.item).success(function(){return l.path(l.path().replace(/\/create\//,"/"))}):this.item.$dirty&&this.Manager.update(this.item).success(i.reset)}},{key:"delete",value:function(){{var e=this;u.open({template:'<div class="modal-header"><h3 class="modal-title">{{\'monad.delete.title\' | translate}}</h3></div>\n                            <div class="modal-body">\n                            {{\'monad.delete.body\' | translate}}\n                        </div>\n                        <div class="modal-footer">\n                            <button class="btn btn-primary" ng-click="ok(monad.language)">{{\'monad.delete.ok\' | translate}}</button>\n                            <button class="btn btn-warning" ng-click="cancel()">{{\'monad.delete.cancel\' | translate}}</button>\n                        </div>',controller:["$scope","$modalInstance",function(t,n){t.ok=function(t){e.Manager["delete"](e.item),n.close(e.item),i.reset(),l.path(o.Component.get(e.module).paths.list.replace(/:language/,s.current))},t.cancel=function(){n.dismiss("cancel")}}]})}}}]),e}();c.$inject=["$route","$modal","$location","moLanguage"],n.CrudController=c},{"../classes/Component":2}],5:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function o(e){r(this,o),this.dashboard="../monad/templates/dashboard.html"};a.$inject=["$http"],n.HomeController=a},{}],6:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e("../classes/Component"),i=void 0,u=void 0,l=void 0,s=function(){function e(t,n){if(r(this,e),t.current&&t.current.locals)for(var a in t.current.locals)"$"!=a.substring(0,1)&&(this[a]=t.current.locals[a]);this.$new=new this.Manager.model,i=t.current.params,l=n,u=t,this.page=i.page||1;var s=o.Component.get(this.module);this.path=s.paths.update,this.create=function(e){return s.paths.update.replace(/:language/,e).replace(/:id/,"create")}}return a(e,[{key:"page",get:function(){return this._page},set:function(e){var t=this;this._page=e,this.Manager.paginate(e,i).success(function(e){return t.items=e})}},{key:"delete",value:function(e){{var t=this;l.open({template:'<div class="modal-header"><h3 class="modal-title">{{\'monad.delete.title\' | translate}}</h3></div>\n<div class="modal-body">\n    {{\'monad.delete.body\' | translate}}\n</div>\n<div class="modal-footer">\n    <button class="btn btn-primary" ng-click="ok()">{{\'monad.delete.ok\' | translate}}</button>\n    <button class="btn btn-warning" ng-click="cancel()">{{\'monad.delete.cancel\' | translate}}</button>\n</div>',controller:["$scope","$modalInstance",function(n,r){n.ok=function(){t.Manager["delete"](e),r.close(e),u.reset(),u.reload()},n.cancel=function(){r.dismiss("cancel")}}]})}}}]),e}();s.$inject=["$route","$modal"],n.ListController=s},{"../classes/Component":2}],7:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=void 0,i=void 0,u=function(){function e(t,n){r(this,e),o=n,i=t}return a(e,[{key:"attempt",value:function(e){o.login(this.username,this.password).success(function(t){i.path("/"+e+"/")})}}]),e}();u.$inject=["$location","moAuthentication"],n.LoginController=u},{}],8:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=void 0,i=void 0,u=void 0,l=void 0,s=void 0,c=void 0,d=function(){function e(t,n,a,d,f,g,m,p,v,h){var b=this;r(this,e),o=t,i=f,u=g,l=d,s=m,c=angular.extend({resize_enabled:!1,bodyClass:"editable",forcePasteAsPlainText:!0,docType:"<!doctype html>",entities:!1,entities_greek:!1,toolbar:"Full",disableNativeSpellChecker:!0},h),this.title=p,this.loginRequired=this.loginRequired||!0,this.theme=v,g.current(),n.$on("$routeChangeStart",function(){return b.Authentication.read().success(function(e){!b.Authentication.isAuthenticated()&&b.loginRequired&&o.path("/"+(s.current||s.list[0])+"/login/")})}),n.$on("$routeChangeSuccess",function(e,t){t.params.language&&(c.language=t.params.language),s.current||o.path("/"+s.list[0]+"/")})}return a(e,[{key:"Authentication",get:function(){return i}},{key:"Navigation",get:function(){return u}},{key:"language",get:function(){return s.current}},{key:"languages",get:function(){return s.list}},{key:"ckeditor",value:function(){var e=void 0===arguments[0]?{}:arguments[0];return angular.extend({},c,e)}},{key:"logout",value:function(){var e=this;this.Authentication.logout().success(function(){return o.path("/"+e.language+"/login/")})}},{key:"url",value:function(){return o.path()}},{key:"license",value:function(){l.open({template:'\n<div class="modal-header">\n    <h3 class="modal-title">{{\'monad.license\' | translate}}</h3>\n</div>\n<div class="modal-body">\n    <p><strong>{{\'monad.license.note\' | translate}}</strong></p>\n    <p ng-repeat="paragraph in paragraphs">{{paragraph}}</p>\n</div>\n<div class="modal-footer">\n    <button class="btn btn-primary" ng-click="ok()">{{\'monad.license.ok\' | translate}}</button>\n</div>',controller:["$scope","$modalInstance","$http",function(e,t,n){n.get("../monad/LICENSE.txt").success(function(t){e.paragraphs=t.split("\n\n")}),e.ok=t.close}]})}}]),e}();d.$inject=["$location","$rootScope","$translate","$modal","moAuthentication","moNavigation","moLanguage","title","theme","ckeditor"],n.RootController=d},{}],9:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var a=e("./list/header/directive"),o=r(a),i=e("./list/table/directive"),u=r(i),l=e("./path"),s=r(l),c=e("./field/directive"),d=r(c),f=e("./update/directive"),g=r(f),m=e("./draggable/directive"),p=r(m),v=e("./list"),h=r(v),b=e("./slug"),y=r(b);angular.module("monad.directives",["ng"]).directive("moList",h["default"]).directive("moListHeader",o["default"]).directive("moListTable",u["default"]).directive("moPath",s["default"]).directive("moField",d["default"]).directive("moUpdate",g["default"]).directive("moDraggable",p["default"]).directive("moSlug",y["default"]),n["default"]="monad.directives",t.exports=n["default"]},{"./draggable/directive":10,"./field/directive":11,"./list":12,"./list/header/directive":13,"./list/table/directive":15,"./path":16,"./slug":17,"./update/directive":18}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=void 0;n["default"]=function(){function e(e,t,n){t.attr("draggable","true"),t.bind("dragstart",function(t){r=e.item,t.originalEvent.dataTransfer.effectAllowed="move",t.originalEvent.dataTransfer.setData("json/custom-object",e.item)}),t.bind("dragenter",function(e){t.addClass("over")}),t.bind("dragover",function(e){return e.originalEvent.preventDefault&&e.originalEvent.preventDefault(),e.originalEvent.dataTransfer.dropEffect="move",!1}),t.bind("dragleave",function(e){t.removeClass("over")}),t.bind("drop",function(t){return t.originalEvent.stopPropagation()&&t.originalEvent.stopPropagation(),r!=e.item&&e.$apply(function(){var t=e.list.indexOf(r),a=e.list.indexOf(e.item),o=n.sort;e.track&&(angular.isArray(e.track)?e.track:[e.track]).map(function(n){e.list[t][n]=e.list[a][n]}),e.list.splice(a,0,e.list.splice(t,1).shift()),e.list.map(function(e,t){e[o]=t})}),!1}),t.bind("dragend",function(e){t.parent().find(".over").removeClass("over")})}return{restrict:"A",scope:{item:"=moDraggable",list:"=",track:"="},link:e}},t.exports=n["default"]},{}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"E",template:'<div class="form-group">\n    <label>{{label}}</label>\n    <span ng-transclude></span>\n</div>',link:function(e,t,n){t.find("input, textarea, select").addClass("form-control")},scope:{label:"="},transclude:!0}},t.exports=n["default"]},{}],12:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"EA",scope:{module:"@",columns:"=",path:"@"},controller:["$scope",function(e){}],controllerAs:"list",bindToController:!0}},t.exports=n["default"]},{}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{require:"^moList",restrict:"E",templateUrl:"../monad/directives/list/header/template.html",scope:{create:"@"},transclude:!0,link:function(e,t,n,r){e.module=r.module}}},t.exports=n["default"]},{}],14:[function(e,t,n){"use strict"},{}],15:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./controller");n["default"]=function(){return{require:"^moList",restrict:"E",templateUrl:"../monad/directives/list/table/template.html",scope:{rows:"=",total:"@",page:"="},controller:r.Controller,link:function(e,t,n,r){e.columns=r.columns,e.module=r.module,e.path=r.path},bindToController:!0}},t.exports=n["default"]},{"./controller":14}],16:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=["$route","$location","moLanguage",function(e,t,n){function r(e,t,n){for(var r in n)t=t.replace(":"+r,n[r]);e.attr("href","#"+t.replace(/^#/,""))}return{restrict:"A",link:function(a,o,i){var u=e.current?e.current.params:{},l=e.current?e.current.originalPath:t.path().replace(/^\/[a-z]{2}\//,"/:language/"),s=i.moPath||l;if(s){var c=i.arguments?a.$eval(i.arguments):{};c.language=u.language?c.language||u.language:c.language||n.current;for(var d in e.routes){var f=(e.routes[d].controller||"")+"";if(f.toLowerCase()==s.toLowerCase())return r(o,d,c)}return r(o,s,c)}}}}],t.exports=n["default"]},{}],17:[function(e,t,n){"use strict";function r(e){return e?("normalize"in String&&(e=e.normalize("NFKD").replace(/[\u0300-\u036F]/g,"")),e=e.toLowerCase().replace(/\s+/g,"-"),e=e.replace(/[^a-z0-9-]+/g,"-"),e=e.replace(/-{2,}/g,"-"),e=e.replace(/^-/,""),e=e.replace(/-$/,"")):e}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"A",require:"ngModel",scope:{source:"=moSlug",target:"=ngModel"},link:function(e,t,n,a){t.attr("pattern","[a-z0-9-]{1,255}"),e.$watch("source",function(t,n){e.target=r(t)}),a.$parsers.unshift(function(e){return e=r(e)}),a.$formatters.unshift(function(e){return a.$setValidity("moSlug",!0),e=r(e)}),t.on("blur keyup change",function(){return e.target=r(t.value())})}}},t.exports=n["default"]},{}],18:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"E",templateUrl:"../monad/directives/update/template.html",transclude:!0,scope:{save:"&onSave","delete":"&onDelete",item:"=",module:"@",list:"@"}}},t.exports=n["default"]},{}],19:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(e){function t(e){var n,r,a,o,i,u,l,s="";for(n in e)if(r=e[n],r instanceof Array)for(l=0;l<r.length;++l)i=r[l],a=n+"["+l+"]",u={},u[a]=i,s+=t(u)+"&";else if(r instanceof Object)for(o in r)i=r[o],a=n+"["+o+"]",u={},u[a]=i,s+=t(u)+"&";else s+=void 0!==r&&null!==r?encodeURIComponent(n)+"="+encodeURIComponent(r)+"&":encodeURIComponent(n)+"=&";return s.length?s.substr(0,s.length-1):s}delete e.defaults.headers.common["X-Requested-With"],e.defaults.withCredentials=!0,e.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",e.defaults.transformRequest=[function(e){return angular.isObject(e)&&"[object File]"!==String(e)?t(e):e}]},t.exports=n["default"]},{}],20:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e)}return a(e,[{key:"read",value:function(){throw"Authentication.read must be replaced by your custom implementation."}},{key:"login",value:function(e,t){throw"Authentication.login must be replaced by your custom implementation."}},{key:"logout",value:function(){throw"Authentication.logout must be replaced by your custom implementation."}},{key:"isAuthenticated",value:function(){return!1}}]),e}();n.Authentication=o},{}],21:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=void 0,i=void 0,u=function(){function e(t,n,a){r(this,e),i=t,a.$on("$routeChangeSuccess",function(e,t){t.params.language&&t.params.language!=o&&(o=t.params.language,n.refresh()),n.use(o)})}return a(e,[{key:"current",get:function(){return o},set:function(e){if(-1==i.indexOf(e))throw'Language "'+e+'" is unavailable, sorry.';o=e}},{key:"list",get:function(){return i}}]),e}();u.$inject=["languages","$translate","$rootScope"],n.Language=u},{}],22:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o={},i=void 0,u=function(){function e(){var t=void 0===arguments[0]?void 0:arguments[0];r(this,e),t&&(i=t)}return a(e,[{key:"register",value:function(e,t,n){var r=!1;o[e]=o[e]||[],o[e].push({url:t,label:n,selected:r}),this.hasOwnProperty(e)||Object.defineProperty(this,e,{get:function(){return o[e]}})}},{key:"current",value:function(){for(var e in o)o[e].map(function(e){return e.selected="/"!=e.url&&-1!=("#"+i.path()).indexOf(e.url)})}},{key:"select",value:function(){var e=void 0===arguments[0]?{}:arguments[0];for(var t in o)o[t].map(function(e){return e.selected=!1});e.selected=!0}},{key:"main",get:function(){return o.main}}]),e}();u.$inject=["$location"],n.Navigation=u},{}]},{},[1]);