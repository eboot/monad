
"use strict";

export default $http => {
    delete $http.defaults.headers.common['X-Requested-With'];
    $http.defaults.withCredentials = true;
    $http.defaults.headers.post["Content-Type"] = 'application/x-www-form-urlencoded;charset=utf-8';
    
    // http://victorblog.com/2012/12/20/make-angularjs-http-service-behave-like-jquery-ajax/
    // Note that the original function as referenced above silently drops empty
    // values (null or undefined). We actually want those to be posted, but as
    // an empty value, so lines 35 to 37 handle that.
    function param(obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
        for (name in obj) {
            value = obj[name];
            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            } else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            } else if (value !== undefined && value !== null) {
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            } else {
                query += encodeURIComponent(name) + '=&';
            }
        }
        return query.length ? query.substr(0, query.length - 1) : query;
    };
    // Override $http service's default transformRequest
    $http.defaults.transformRequest = [function(data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
};

