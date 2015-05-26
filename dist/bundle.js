!function e(t,n,r){function o(i,u){if(!n[i]){if(!t[i]){var l="function"==typeof require&&require;if(!u&&l)return l(i,!0);if(a)return a(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n,r,o){r.html5Mode(!1),n.when("/",{controller:"moController"}).when("/:language/",{controller:u.HomeController,controllerAs:"home",templateUrl:"../monad/templates/home.html"}).when("/:language/login/",{controller:l.LoginController,controllerAs:"login",templateUrl:"../monad/templates/login.html"}),e.useLoader("$translatePartialLoader",{urlTemplate:"{part}/i18n/{lang}.json"}),e.preferredLanguage(o[0]),t.addPart("../monad")}Object.defineProperty(n,"__esModule",{value:!0});var a=e("./classes/Monad"),i=e("./controllers/RootController"),u=e("./controllers/HomeController"),l=e("./controllers/LoginController"),s=e("./services/Navigation"),c=e("./services/Authentication"),f=e("./services/Language"),d=e("./helpers/post"),p=r(d),v=e("./directives/angular"),g=r(v),m="monad.core";angular.module(m,["ng","ngRoute","pascalprecht.translate","ngSanitize","ui.bootstrap",g["default"]]).config(["$translateProvider","$translatePartialLoaderProvider","$routeProvider","$locationProvider","languages",o]).run(["$http","$rootScope","$translate","$route","$cacheFactory",function(e,t,n,r,o){p["default"](e),t.$on("$translatePartialLoaderStructureChanged",function(){return n.refresh()}),r.reset=function(){var e=o.info();for(var t in e)"templates"!=t&&o.get(t).removeAll()}}]).controller("moController",i.RootController).service("moNavigation",s.Navigation).service("moAuthentication",c.Authentication).service("moLanguage",f.Language).value("title","Default generic administrator").constant("languages",["en","nl"]).value("theme","../monad/default.css"),window.monad=new a.Monad;var h=angular.bootstrap;angular.bootstrap=function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];window.monad.bootstrap(),h.apply(void 0,t)},n["default"]=m,t.exports=n["default"]},{"./classes/Monad":5,"./controllers/HomeController":7,"./controllers/LoginController":9,"./controllers/RootController":10,"./directives/angular":11,"./helpers/post":21,"./services/Authentication":22,"./services/Language":23,"./services/Navigation":25}],2:[function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){return"object"==typeof e&&e instanceof l.Model}Object.defineProperty(n,"__esModule",{value:!0});var i=Function.prototype.bind,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("./Model"),s=function(){function e(){o(this,e),this.model=l.Model,this.storage=[]}return u(e,[{key:"defaults",value:function(e){return e}},{key:"push",value:function(){for(var e,t=this,n=arguments.length,o=Array(n),i=0;n>i;i++)o[i]=arguments[i];var u=this.storage.length;o=o.map(function(e){return t.defaults(e)}),o=o.map(function(e){return a(e)?e:l.Model.$create(e,t.model)}),(e=this.storage).push.apply(e,r(o));for(var s=function(e){Object.defineProperty(t,e,{get:function(){return t.storage[e]||void 0},configurable:!0})},c=u;c<this.storage.length;c++)s(c);return this.length}},{key:"shift",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=this.storage(shift);return void 0!==e&&delete this[this.storage.length],e})},{key:"unshift",value:function(){for(var e=this,t=arguments.length,n=Array(t),o=0;t>o;o++)n[o]=arguments[o];n=n.map(function(t){return e.defaults(t)}),n=n.map(function(t){return a(t)?t:l.Model.$create(t,e.model)});var i=new Array(this.storage);return i.unshift.apply(i,r(n)),this.storage=[],i.map(function(t){return e.push(t)}),this.length}},{key:"pop",value:function(){var e=this.storage.pop();return void 0!==e&&delete this[this.storage.length],e}},{key:"length",get:function(){return this.storage.length}},{key:"reverse",value:function(){this.storage.reverse()}},{key:"sort",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=this.storage).sort.apply(e,n),this}},{key:"splice",value:function(e,t){for(var n=arguments.length,o=Array(n>2?n-2:0),a=2;n>a;a++)o[a-2]=arguments[a];var u=this;o=o.map(function(e){return u.defaults(e)});var l=this.length,s=new(i.apply(Array,[null].concat(r(this.storage)))),c=s.splice.apply(s,[e,t].concat(r(o)));if(this.storage=[],s.map(function(e){return u.push(e)}),this.length<l)for(var f=this.length;l>f;f++)delete this[f];return c}},{key:"indexOf",value:function(e){return this.storage.indexOf(e)}},{key:"map",value:function(){for(var e,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return(e=this.storage).map.apply(e,n)}},{key:"$dirty",get:function(){for(var e=0;e<this.storage.length;e++)if(this.storage[e].$new||this.storage[e].$dirty)return!0;return!1}}]),e}();n.Collection=s},{"./Model":4}],3:[function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){var t=this,n=u(this.defaults[e],this.settings[e]);n.resolve=n.resolve||{},n.resolve.Manager=n.resolve.Manager||[i(this.name)+"Manager",function(e){return e}],n.resolve.module=function(){return t},"$mapping"in n.resolve&&!function(){var e=angular.copy(n.resolve.$mapping);n.resolve.$mapping=function(){return e}}(),"create"==e&&(n.resolve.item=[this.$manager.name,function(e){return new e.model}]),n.options.resolve=n.resolve,delete n.options.template,this.ngmod.config(["$routeProvider","$translatePartialLoaderProvider",function(e,r){e.when("/:language"+n.url,n.options),r.addPart(t.name)}])}function i(e){var t=void 0===arguments[1]?void 0:arguments[1];return void 0==t&&(t=function(e){return e.substring(1).toUpperCase()}),e.replace(/\/(\w)/g,t)}function u(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];var r={};return t.map(function(e){if(void 0!=e&&null!=e&&"object"==typeof e){var t=function(t){return t in r?typeof r[t]!=typeof e[t]?(r[t]=e[t],"continue"):angular.isArray(r[t])!=angular.isArray(e[t])?(r[t]=e[t],"continue"):angular.isArray(r[t])&&angular.isArray(e[t])?(e[t].map(function(e){-1==r[t].indexOf(e)&&r[t].push(e)}),"continue"):"object"!=typeof e[t]?(r[t]=e[t],"continue"):void(r[t]=u(r[t],e[t])):(r[t]=e[t],"continue")};for(var n in e){{t(n)}}}}),r}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=e("../controllers/ListController"),c=e("../controllers/CrudController"),f=e("../services/Navigation"),d=new f.Navigation,p={list:{options:{controller:s.ListController,controllerAs:"list",templateUrl:"../monad/templates/list.html"}},create:{options:{controller:c.CrudController,controllerAs:"crud"},resolve:{$mapping:{item:"Manager"}}},update:{options:{controller:c.CrudController,controllerAs:"crud"},resolve:{$mapping:{item:"Manager"}}}},v=angular.module("monad.interface",[]),g=function(){function e(t){var n=this,r=void 0===arguments[1]?[]:arguments[1],a=void 0===arguments[2]?void 0:arguments[2];o(this,e),this.name=t,this.$manager=void 0,this.dependencies=r,this.configFn=a,this.queued=[],this.$bootstrapped=!1,this.defaults=angular.extend({},p),this.settings={};var i=function(e){"function"==typeof v[e]&&(n[e]=function(){for(var t=arguments.length,r=Array(t),o=0;t>o;o++)r[o]=arguments[o];return n.queued.push([e].concat(r)),n})};for(var u in v)i(u)}return l(e,[{key:"bootstrap",value:function(){var t=this;if(!this.$bootstrapped){this.$bootstrapped=!0;var n=[];this.dependencies.map(function(t){"string"==typeof t&&monad.exists(t)&&(t=monad.component(t)),"object"==typeof t&&t instanceof e?(t.bootstrap(),n.push(t.name)):n.push(t)}),this.ngmod=angular.module(this.name,n,this.configFn),this.queued.map(function(e){var n=e.shift();if("string"==typeof n){var o;(o=t.ngmod)[n].apply(o,r(e))}else n.apply(t,e)})}}},{key:"extend",value:function(){for(var e=this,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];n.map(function(t){if(e.dependencies.push(t),"string"==typeof t){if(!monad.exists(t))throw"Component "+t+" is undefined and cannot be extended upon.";t=monad.component(t)}e.defaults=u(e.defaults,t.defaults)})}},{key:"list",value:function(e){var t=void 0===arguments[1]?{}:arguments[1],n=void 0===arguments[2]?{}:arguments[2];return"columns"in t&&!function(){var e=t.columns;n.columns=function(){return e},delete t.columns}(),"menu"in t&&!t.menu||d.register(t.menu||"main","/:language"+e,"monad.navigation."+i(this.name,".$1")),delete t.menu,this.settings.list={url:e,options:t,resolve:n},this.queued.push([a,"list"]),this}},{key:"create",value:function(e){var t=void 0===arguments[1]?{}:arguments[1],n=void 0===arguments[2]?{}:arguments[2];return t.templateUrl=t.templateUrl||this.name+"/schema.html",delete t.create,this.settings.create={url:e,options:t,resolve:n},this.queued.push([a,"create"]),this}},{key:"update",value:function(e){var t=void 0===arguments[1]?{}:arguments[1],n=void 0===arguments[2]?{}:arguments[2];return t.templateUrl=t.templateUrl||this.name+"/schema.html",t.create&&(this.create(t.create,t,n),delete t.create),this.settings.update={url:e,options:t,resolve:n},this.queued.push([a,"update"]),this}},{key:"manager",value:function(e){return this.$manager={name:i(this.name)+"Manager",obj:e},this.service(this.$manager.name,this.$manager.obj),this}}]),e}();n.Component=g},{"../controllers/CrudController":6,"../controllers/ListController":8,"../services/Navigation":25}],4:[function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){return s[e]}Object.defineProperty(n,"__esModule",{value:!0});var i=Function.prototype.bind,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=new RegExp(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/),s={Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"},c=function(){function e(){o(this,e),this.$initial=void 0,this.$data={},this.$deleted=!1}return u(e,[{key:"$load",value:function(){var e=this,t=void 0===arguments[0]?{}:arguments[0];this.$initial=t;var n=function(n){var o=l.exec(t[n]);o&&(o.shift(),t[n]=new(i.apply(Date,[null].concat(r(o))))),a={enumerable:!0,configurable:!0},e.hasOwnProperty(n)||(a.get=function(){return e.$data[n]},a.set=function(t){e.$data[n]=t}),Object.defineProperty(e,n,a),e.$data[n]=t[n]};for(var o in t){var a;n(o)}return this}},{key:"$update",value:function(){for(var e in this)"$"!=e.substring(0,1)&&("object"==typeof this[e]&&null!=this[e]&&("$delete"in this[e]&&this[e].$deleted?this[e].$delete():"$update"in this[e]&&this[e].$dirty?this[e].$update():"map"in this[e]&&this[e].map(function(e){"object"==typeof e&&("$delete"in e&&e.$deleted?e.$delete():"$update"in e&&e.$dirty&&e.$update())})),this.$initial[e]&&(this.$initial[e]=this.$data[e]))}},{key:"$new",get:function(){return void 0===this.$initial}},{key:"$dirty",get:function(){var e=this;if(this.$deleted)return!0;if(this.$new)return!1;for(var t in this)if("$"!=t.substring(0,1)){if(t in this.$data&&this.$data[t]!=this.$initial[t])return!0;if("object"==typeof this[t]&&null!=this[t])if("map"in this[t]){var n=function(){var n=!1;return e[t].map(function(e){("object"==typeof e&&e.$dirty||e.$deleted)&&(n=!0)}),n?{v:!0}:void 0}();if("object"==typeof n)return n.v}else if(this[t].$dirty||this[t].$deleted)return!0}return!1}},{key:"$export",value:function(){var e={};for(var t in this)if("$"!=t.substring(0,1))if("object"==typeof this[t]&&"getFullYear"in this[t]){var n=(this[t]+"").split(" ");e[t]=[n[3],a(n[1]),n[2]].join("-")+" "+n[4]}else e[t]=this[t];return e}}],[{key:"$create",value:function(){var t=void 0===arguments[0]?{}:arguments[0],n=void 0===arguments[1]?void 0:arguments[1];n=n||e;var r=new n;return r.$load(t),r.$initial=void 0,r}}]),e}();n.Model=c},{}],5:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./Component"),i=void 0,u={},l=function(){function e(){r(this,e)}return o(e,[{key:"application",value:function(){var e=void 0===arguments[1]?[]:arguments[1],t=void 0===arguments[2]?void 0:arguments[2];if(void 0!=i)throw"Sorry, you can only call `monad.application` once!";var n=["monad.core"];for(var r in u)n.push(r);return i=new a.Component("monad",e.concat(n),t)}},{key:"component",value:function(e){var t=void 0===arguments[1]?[]:arguments[1],n=void 0===arguments[2]?void 0:arguments[2];return e in u||(u[e]=new a.Component(e,t.concat(["monad.core"]),n)),u[e]}},{key:"exists",value:function(e){return e in u}},{key:"bootstrap",value:function(){if(void 0==i)throw"Looks like you forget to call monad.application...";i.bootstrap()}}]),e}();n.Monad=l},{"./Component":3}],6:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=(e("../classes/Component"),e("../classes/Collection")),i=e("../classes/Model"),u=e("../services/Manager"),l=void 0,s=void 0,c=void 0,f=void 0,d=function(){function e(t,n,o,a,i){if(r(this,e),l=t,s=n,c=o,f=a,t.current&&t.current.locals)for(var u in t.current.locals)("$"!=u.substring(0,1)||"$mapping"==u)&&(this[u]=t.current.locals[u]);i.addPart(this.module.name),this.module.dependencies.map(function(e){monad.exists(e)&&i.addPart(e)})}return o(e,[{key:"save",value:function(){var e=this,t=this.item.$new?this.module.settings.list.url:void 0,n=function(t){return e[e.$mapping[t]]&&e[e.$mapping[t]]instanceof u.Manager?void(e[t]instanceof a.Collection?!function(){var n=[];e[t].map(function(r,o){r.$deleted&&n.unshift(o),e[e.$mapping[t]].save(r)}),n.map(function(n){return e[t].splice(n,1)})}():e[t]instanceof i.Model&&e[e.$mapping[t]].save(e[t])):"continue"};for(var r in this.$mapping){{n(r)}}t&&c.path(t.replace(/:language/,f.current)),l.reset()}},{key:"delete",value:function(){{var e=this;s.open({template:'<div class="modal-header"><h3 class="modal-title">{{\'monad.delete.title\' | translate}}</h3></div>\n                            <div class="modal-body">\n                            {{\'monad.delete.body\' | translate}}\n                        </div>\n                        <div class="modal-footer">\n                            <button class="btn btn-primary" ng-click="ok(monad.language)">{{\'monad.delete.ok\' | translate}}</button>\n                            <button class="btn btn-warning" ng-click="cancel()">{{\'monad.delete.cancel\' | translate}}</button>\n                        </div>',controller:["$scope","$modalInstance",function(t,n){t.ok=function(){e.Manager["delete"](e.item),n.close(e.item),l.reset(),c.path(e.module.settings.list.url.replace(/:language/,f.current))},t.cancel=function(){n.dismiss("cancel")}}]})}}}]),e}();d.$inject=["$route","$modal","$location","moLanguage","$translatePartialLoader"],n.CrudController=d},{"../classes/Collection":2,"../classes/Component":3,"../classes/Model":4,"../services/Manager":24}],7:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function a(){r(this,a),this.dashboard="../monad/templates/dashboard.html"};o.$inject=["$http"],n.HomeController=o},{}],8:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=(e("../classes/Component"),void 0),i=void 0,u=void 0,l=function(){function e(t,n,o){if(r(this,e),t.current&&t.current.locals)for(var l in t.current.locals)"$"!=l.substring(0,1)&&(this[l]=t.current.locals[l]);this.$new=new this.Manager.model,a=t.current.params,u=n,i=t,this.page=a.page||1,o.addPart(this.module.name)}return o(e,[{key:"page",get:function(){return this._page},set:function(e){var t=this;this._page=e,this.Manager.paginate(e,a).success(function(e){return t.items=e})}},{key:"delete",value:function(e){{var t=this;u.open({template:'<div class="modal-header"><h3 class="modal-title">{{\'monad.delete.title\' | translate}}</h3></div>\n<div class="modal-body">\n    {{\'monad.delete.body\' | translate}}\n</div>\n<div class="modal-footer">\n    <button class="btn btn-primary" ng-click="ok()">{{\'monad.delete.ok\' | translate}}</button>\n    <button class="btn btn-warning" ng-click="cancel()">{{\'monad.delete.cancel\' | translate}}</button>\n</div>',controller:["$scope","$modalInstance",function(n,r){n.ok=function(){t.Manager["delete"](e),r.close(e),i.reset(),i.reload()},n.cancel=function(){r.dismiss("cancel")}}]})}}}]),e}();l.$inject=["$route","$modal","$translatePartialLoader"],n.ListController=l},{"../classes/Component":3}],9:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=void 0,i=void 0,u=void 0,l=function(){function e(t,n,o){r(this,e),a=n,i=t,u=o}return o(e,[{key:"attempt",value:function(){a.login(this.username,this.password).success(function(){i.path("/"+u.current+"/")})}}]),e}();l.$inject=["$location","moAuthentication","moLanguage"],n.LoginController=l},{}],10:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=void 0,i=void 0,u=void 0,l=void 0,s=void 0,c=function(){function e(t,n,o,c,f,d,p,v,g){var m=this;r(this,e),a=t,i=f,u=d,l=c,s=p,this.title=v,this.loginRequired=this.loginRequired||!0,this.theme=g,d.current(),n.$on("$routeChangeStart",function(){return m.Authentication.read().success(function(){!m.Authentication.isAuthenticated()&&m.loginRequired&&a.path("/"+(s.current||s.list[0])+"/login/")})}),n.$on("$routeChangeSuccess",function(){s.current||a.path("/"+s.list[0]+"/")})}return o(e,[{key:"Authentication",get:function(){return i}},{key:"Navigation",get:function(){return u}},{key:"language",get:function(){return s.current}},{key:"languages",get:function(){return s.list}},{key:"logout",value:function(){var e=this;this.Authentication.logout().success(function(){return a.path("/"+e.language+"/login/")})}},{key:"url",value:function(){return a.path()}},{key:"license",value:function(){l.open({template:'\n<div class="modal-header">\n    <h3 class="modal-title">{{\'monad.license\' | translate}}</h3>\n</div>\n<div class="modal-body">\n    <p><strong>{{\'monad.license.note\' | translate}}</strong></p>\n    <p ng-repeat="paragraph in paragraphs">{{paragraph}}</p>\n</div>\n<div class="modal-footer">\n    <button class="btn btn-primary" ng-click="ok()">{{\'monad.license.ok\' | translate}}</button>\n</div>',controller:["$scope","$modalInstance","$http",function(e,t,n){n.get("../monad/LICENSE.txt").success(function(t){e.paragraphs=t.split("\n\n")}),e.ok=t.close}]})}}]),e}();c.$inject=["$location","$rootScope","$translate","$modal","moAuthentication","moNavigation","moLanguage","title","theme"],n.RootController=c},{}],11:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("./list/header/directive"),a=r(o),i=e("./list/table/directive"),u=r(i),l=e("./path"),s=r(l),c=e("./field/directive"),f=r(c),d=e("./update/directive"),p=r(d),v=e("./dragDrop"),g=r(v),m=e("./list"),h=r(m),y=e("./slug"),b=r(y);angular.module("monad.directives",["ng"]).directive("moList",h["default"]).directive("moListHeader",a["default"]).directive("moListTable",u["default"]).directive("moPath",s["default"]).directive("moField",f["default"]).directive("moUpdate",p["default"]).directive("moDragDrop",g["default"]).directive("moSlug",b["default"]),n["default"]="monad.directives",t.exports=n["default"]},{"./dragDrop":12,"./field/directive":13,"./list":14,"./list/header/directive":15,"./list/table/directive":17,"./path":18,"./slug":19,"./update/directive":20}],12:[function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t,n){t.attr("draggable","true"),t.attr("ondrop",""),t.bind("dragstart",function(t){a=e.item,t.originalEvent&&(t.originalEvent.dataTransfer.effectAllowed="move",t.originalEvent.dataTransfer.setData("json/custom-object",e.item))}),t.bind("dragenter",function(e){e.originalEvent&&e.originalEvent.preventDefault&&e.originalEvent.preventDefault(),t.addClass("over")}),t.bind("dragover",function(e){return e.originalEvent&&e.originalEvent.preventDefault&&e.originalEvent.preventDefault(),e.originalEvent&&(e.originalEvent.dataTransfer.dropEffect="move"),!1}),t.bind("dragleave",function(){t.removeClass("over")}),t.bind("drop",function(t){return t.originalEvent&&t.originalEvent.stopPropagation&&t.originalEvent.stopPropagation(),a!=e.item&&e.$apply(function(){var t,o=e.list.indexOf(a),i=e.list.indexOf(e.item);e.track&&e.track.split(/[^\w]+/g).map(function(t){return e.list[o][t]=e.list[i][t]});var u=e.list.splice(o,1);(t=e.list).splice.apply(t,[i,0].concat(r(u)));var l=n.position;l&&e.list.map(function(e,t){e[l]=t})}),!1}),t.bind("dragend",function(){t.parent().find(".over").removeClass("over")})}Object.defineProperty(n,"__esModule",{value:!0});var a=void 0;n["default"]=function(){return{restrict:"A",scope:{item:"=moDragDrop",list:"=",track:"@",position:"@"},link:o}},t.exports=n["default"]},{}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"E",template:'<div class="form-group">\n    <label>{{label}}</label>\n    <span ng-transclude></span>\n</div>',link:function(e,t){t.find("input, textarea, select").addClass("form-control")},scope:{label:"="},transclude:!0}},t.exports=n["default"]},{}],14:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"EA",scope:{module:"="},controller:["$scope",function(){}],controllerAs:"list",bindToController:!0}},t.exports=n["default"]},{}],15:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{require:"^moList",restrict:"E",templateUrl:"../monad/directives/list/header/template.html",scope:{},transclude:!0,link:function(e,t,n,r){e.module=r.module}}},t.exports=n["default"]},{}],16:[function(){"use strict"},{}],17:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./controller");n["default"]=function(){return{require:"^moList",restrict:"E",templateUrl:"../monad/directives/list/table/template.html",scope:{columns:"=",rows:"=",total:"@",page:"="},controller:r.Controller,link:function(e,t,n,r){e.module=r.module},bindToController:!0}},t.exports=n["default"]},{"./controller":16}],18:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=["$route","$location","moLanguage",function(e,t,n){function r(e,t,n){for(var r in n)t=t.replace(":"+r,n[r]);e.attr("href","#"+t.replace(/^#/,""))}return{restrict:"A",link:function(o,a,i){var u=e.current?e.current.params:{},l=e.current?e.current.originalPath:t.path().replace(/^\/[a-z]{2}\//,"/:language/"),s=i.moPath||l;if(s){var c=i.arguments?o.$eval(i.arguments):{};c.language=u.language?c.language||u.language:c.language||n.current;for(var f in e.routes){var d=(e.routes[f].controller||"")+"";if(d.toLowerCase()==s.toLowerCase())return r(a,f,c)}return r(a,s,c)}}}}],t.exports=n["default"]},{}],19:[function(e,t,n){"use strict";function r(e){return e?("normalize"in String&&(e=e.normalize("NFKD").replace(/[\u0300-\u036F]/g,"")),e=e.toLowerCase().replace(/\s+/g,"-"),e=e.replace(/[^a-z0-9-]+/g,"-"),e=e.replace(/-{2,}/g,"-"),e=e.replace(/^-/,""),e=e.replace(/-$/,"")):e}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){return{restrict:"A",require:"ngModel",scope:{source:"=moSlug",target:"=ngModel"},link:function(e,t,n,o){t.attr("pattern","[a-z0-9-]{1,255}"),n.moSlug.length&&e.$watch("source",function(t){e.target=r(t)}),o.$parsers.unshift(function(e){return e=r(e)}),o.$formatters.unshift(function(e){return o.$setValidity("moSlug",!0),e=r(e)}),t.bind("keyup",function(){return e.target=r(t.val())}),t.bind("blur change",function(){e.target=r(t.val()),t.val(e.target)})}}},t.exports=n["default"]},{}],20:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={onSave:"crud.save()",onDelete:"crud.delete()",item:"crud.item",module:"crud.module"};n["default"]=function(){return{restrict:"E",templateUrl:"../monad/directives/update/template.html",transclude:!0,scope:{save:"&onSave","delete":"&onDelete",item:"=",module:"="},compile:function(e,t){for(var n in r)n in t||(t[n]=r[n])}}},t.exports=n["default"]},{}],21:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(e){function t(e){var n,r,o,a,i,u,l,s="";for(n in e)if(r=e[n],r instanceof Array)for(l=0;l<r.length;++l)i=r[l],o=n+"["+l+"]",u={},u[o]=i,s+=t(u)+"&";else if(r instanceof Object)for(a in r)i=r[a],o=n+"["+a+"]",u={},u[o]=i,s+=t(u)+"&";else s+=void 0!==r&&null!==r?encodeURIComponent(n)+"="+encodeURIComponent(r)+"&":encodeURIComponent(n)+"=&";return s.length?s.substr(0,s.length-1):s}delete e.defaults.headers.common["X-Requested-With"],e.defaults.withCredentials=!0,e.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",e.defaults.transformRequest=[function(e){return angular.isObject(e)&&"[object File]"!==String(e)?t(e):e}]},t.exports=n["default"]},{}],22:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(){r(this,e)}return o(e,[{key:"read",value:function(){throw"Authentication.read must be replaced by your custom implementation."}},{key:"login",value:function(){throw"Authentication.login must be replaced by your custom implementation."}},{key:"logout",value:function(){throw"Authentication.logout must be replaced by your custom implementation."}},{key:"isAuthenticated",value:function(){return!1}}]),e}();n.Authentication=a},{}],23:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=void 0,i=void 0,u=void 0,l=function(){function e(t,n,o){var l=this;r(this,e),i=t,u=n,o.$on("$routeChangeSuccess",function(e,t){t.params.language&&t.params.language!=a&&(l.current=t.params.language)})}return o(e,[{key:"current",get:function(){return a},set:function(e){if(-1==i.indexOf(e))throw'Language "'+e+'" is unavailable, sorry.';a=e,u.use(a),u.refresh()}},{key:"list",get:function(){return i}}]),e}();l.$inject=["languages","$translate","$rootScope"],n.Language=l},{}],24:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){var t=l.defaults.transformResponse;return t=angular.isArray(t)?t:[t],t.concat(e)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=e("../classes/Model"),u=e("../classes/Collection"),l=void 0,s=void 0,c=function(){function e(t,n){r(this,e),l=t,void 0===s&&(s=n("monad-managers")),this.model=i.Model,this.collection=new u.Collection}return a(e,[{key:"count",get:function(){return 0}},{key:"list",value:function(e){var t=this;return l({url:e,method:"GET",transformResponse:o(function(e){for(;t.collection.length;)t.collection.pop();return e.map(function(e){return t.collection.push((new t.model).$load(e))}),t.collection}),cache:s})}},{key:"find",value:function(e){var t=this;return l({url:e,method:"GET",transformResponse:o(function(e){return(new t.model).$load(e)}),cache:s})}},{key:"save",value:function(e){return e.$new?this.create(e):e.$deleted?this["delete"](e):e.$dirty?this.update(e):{}}},{key:"create",value:function(){throw"Manager.create must use a custom implementation."}},{key:"update",value:function(){throw"Manager.update must use a custom implementation."}},{key:"delete",value:function(){throw"Manager.delete must use a custom implementation."}},{key:"http",get:function(){return l}}]),e}();c.$inject=["$http","$cacheFactory"],n.Manager=c},{"../classes/Collection":2,"../classes/Model":4}],25:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a={},i=void 0,u=function(){function e(){var t=void 0===arguments[0]?void 0:arguments[0];r(this,e),t&&(i=t)}return o(e,[{key:"register",value:function(e,t,n){var r=!1;
a[e]=a[e]||[],a[e].push({url:t,label:n,selected:r}),this.hasOwnProperty(e)||Object.defineProperty(this,e,{get:function(){return a[e]}})}},{key:"current",value:function(){for(var e in a)a[e].map(function(e){return e.selected="/"!=e.url&&-1!=("#"+i.path()).indexOf(e.url)})}},{key:"select",value:function(){var e=void 0===arguments[0]?{}:arguments[0];for(var t in a)a[t].map(function(e){return e.selected=!1});e.selected=!0}},{key:"main",get:function(){return a.main}}]),e}();u.$inject=["$location"],n.Navigation=u},{}]},{},[1]);