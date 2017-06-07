app.factory('httpMethodService', ['$http', '$rootScope', '$q', '$location', 'userService', 'constant',
    function ($http, $rootScope, $q, $location, userService, constant) {
        /**
         * 
         * @param {string} method : method POST,GET or REQUEST
         * @param {string} url : request server url, where we need to push data
         * @param {string} params : object of all the parameter which are neccessary in service
         * @param {function} cb : it will call when response come and its parameter has response
         * @param {type} header : 
         * @returns {unresolved} : return object of success and error which we need to handle at from where we have called
         */

        var httpMethodCallforRowData = function (method, url, params, header) {
            var token = userService.getDataFromLocalStorage('x-access-token');
            var httpData = $http({
                method: method,
                url: url,
                dataType: 'json',
                data: JSON.stringify(params),
//                'processData': false,
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
                }
            });
            return httpData;
        };
        var httpMethodCallforCustomHeader = function (method, url, params, cb, header) {
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
                    userService.removeAllLocalStorage();
                    $location.path("/login");
                }
                //cb(response);
            });
            httpData.error(function (response, status, headers) {
                //cb(response);
            });
            return httpData
        };

        var httpFile = function (method, url, params, header) {
            var token = userService.getDataFromLocalStorage('x-access-token');
            var httpData = $http({
                method: method,
                url: url,
                dataType: 'json',
                processData: false,
                contentType: false,
                data: params, //forms user object
                headers: {'Content-Type': undefined, 'x-access-token': token}
            });
            
            return httpData;
        };

        return httpMethodFactory = {
            httpMethodCallforRowData: httpMethodCallforRowData,
            httpMethodCallforCustomHeader: httpMethodCallforCustomHeader,
            httpFile: httpFile
        };

    }]);