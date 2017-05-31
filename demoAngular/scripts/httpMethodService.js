app.factory('httpMethodService', ['$http', '$rootScope', '$q', '$location', 'constant',
    function ($http, $rootScope, $q, $location, constant) {
        /**
         * 
         * @param {type} method : method POST,GET or REQUEST
         * @param {type} url : request server url, where we need to push data
         * @param {type} params : object of all the parameter which are neccessary in service
         * @param {type} header : 
         * @returns {unresolved} : return object of success and error which we need to handle at from where we have called
         */
        var httpMethodCall = function (method, url, params, header) {
            var httpData = $http({
                method: method,
                url: url,
                dataType: 'json',
                data: $.param(params), //forms user object
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
            httpData.success(function (response, status, headers) {
                if (status == 401) {
                    if (userService.removeAllLocalStorage()) {
                        window.location = constant.nonloggedInUserReload;
                    }
//                    userService.removeAllLocalStorage();
//                    $location.path(constant.nonloggedInUserRedirect);
                }
            });
            return httpData;
        };
        var httpMethodCallforRowData = function (method, url, params, header) {
            var httpData = $http({
                method: method,
                url: url,
                dataType: 'json',
                'data': JSON.stringify(params),
                'processData': false,
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            httpData.success(function (response, status, headers) {
                if (status == 401) {
                    if (userService.removeAllLocalStorage()) {
                        window.location = constant.nonloggedInUserReload;
                    }

//                    $location.path(constant.nonloggedInUserRedirect);
                }
            });
            return httpData;
        };

        /**
         * 
         * @param {string} method : method POST,GET or REQUEST
         * @param {string} url : request server url, where we need to push data
         * @param {string} params : object of all the parameter which are neccessary in service
         * @param {function} cb : it will call when response come and its parameter has response
         * @param {type} header : 
         * @returns {unresolved} : return object of success and error which we need to handle at from where we have called
         */

        var httpMethodCallWithCallbackForRowData = function (method, url, params, cb, header) {
            var token = userService.getDataFromLocalStorage('x-access-token');
            var httpData = $http({
                method: method,
                url: url,
                dataType: 'json',
                'data': JSON.stringify(params),
                'processData': false,
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                }
            });
            httpData.success(function (response, status, headers) {
                if (status == 401) {
                    if (userService.removeAllLocalStorage()) {
                        window.location = constant.nonloggedInUserReload;
                    }
//                    userService.removeAllLocalStorage();
//                    $location.path(constant.nonloggedInUserRedirect);
                }
                cb(response, status, headers);
            });
        };

        var httpMethodCallforCustomHeader = function (method, url, params, header) {
            var httpData = $http({
                method: method,
                url: url,
                dataType: 'json',
                'data': JSON.stringify(params),
                'processData': false,
                headers: header
            });
            httpData.success(function (response, status, headers) {
                if (status == 401) {
                    if (userService.removeAllLocalStorage()) {
                        window.location = constant.nonloggedInUserReload;
                    }
//                    userService.removeAllLocalStorage();
//                    $location.path(constant.nonloggedInUserRedirect);
                }
            });
            return httpData;
        };

        var httpFile = function (method, url, params, header, uploadEventHandlers) {
            var token = userService.getDataFromLocalStorage('x-access-token');
            var httpData = $http({
                method: method,
                url: url,
                dataType: 'json',
                processData: false,
                contentType: false,
                data: params, //forms user object
                headers: {'Content-Type': undefined, 'x-access-token': token},
                uploadEventHandlers: uploadEventHandlers,
            });
            httpData.success(function (response, status, headers) {
                if (status == 401) {
                    if (userService.removeAllLocalStorage()) {
                        window.location = constant.nonloggedInUserReload;
                    }
//                    userService.removeAllLocalStorage();
//                    $location.path(constant.nonloggedInUserRedirect);
                }
            });
            return httpData;
        };

        return httpMethodFactory = {
            httpMethodCallforRowData: httpMethodCallforRowData,
            httpMethodCallWithCallbackForRowData: httpMethodCallWithCallbackForRowData,
            httpMethodCallforCustomHeader: httpMethodCallforCustomHeader,
            httpMethodCall: httpMethodCall,
            httpFile: httpFile
        };

    }]);