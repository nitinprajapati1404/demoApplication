
app.factory('bubHubPostFactory', ['httpMethodService', 'apiUrl', '$q',
    function (httpMethodService, apiUrl, $q) {
        /**
         * desc : 
         *
         * @param Object    param  
         */
        var getPost = function (params) {
            var deferred = $q.defer();
            httpMethodService.httpMethodCallforRowData("POST", apiUrl.getApiUrl('bubHubPost'), params).success(function (data) {
                deferred.resolve(data);
            }).error(function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        };

        var getPostData = function (id) {
            var deferred = $q.defer();
            httpMethodService.httpMethodCallforRowData("GET", apiUrl.getApiUrl('bubHubPost')+"/"+id, {}).success(function (data) {
                deferred.resolve(data);
            }).error(function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }

        var savePost = function (params) {
            var deferred = $q.defer();
            httpMethodService.httpMethodCallforRowData("POST", apiUrl.getApiUrl('bubHubPost'), params).success(function (data) {
                deferred.resolve(data);
            }).error(function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        };
        
        var updatePost = function (params) {
            var deferred = $q.defer();
            httpMethodService.httpMethodCallforRowData("PUT", apiUrl.getApiUrl('bubHubPost'), params).success(function (data) {
                deferred.resolve(data);
            }).error(function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        };
        
        var deletePost = function (id) {
            var deferred = $q.defer();
            httpMethodService.httpMethodCallforRowData("DELETE", apiUrl.getApiUrl('bubHubPost')+"/"+id,{}).success(function (data) {
                deferred.resolve(data);
            }).error(function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        };

        var lovePost = function(params){
            var deferred = $q.defer();
            httpMethodService.httpMethodCallforRowData("POST", apiUrl.getApiUrl('loveBubHubPost'), params).success(function (data) {
                deferred.resolve(data);
            }).error(function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        };

        var getPostLike = function (id) {
            var deferred = $q.defer();
            httpMethodService.httpMethodCallforRowData("GET", apiUrl.getApiUrl('bubHubPostLike')+"/"+id, {}).success(function (data) {
                deferred.resolve(data);
            }).error(function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }
        var getPostComments = function (id) {
            var deferred = $q.defer();
            httpMethodService.httpMethodCallforRowData("GET", apiUrl.getApiUrl('bubHubPostComment')+"/"+id, {}).success(function (data) {
                deferred.resolve(data);
            }).error(function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }
        var getPostReportAbuse = function (id) {
            var deferred = $q.defer();
            httpMethodService.httpMethodCallforRowData("GET", apiUrl.getApiUrl('bubHubReportList')+"/"+id, {}).success(function (data) {
                deferred.resolve(data);
            }).error(function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }

        return {
            getPost: getPost,
            savePost: savePost,
            getPostData: getPostData,
            updatePost: updatePost,
            deletePost: deletePost,
            lovePost:lovePost,
            getPostLike:getPostLike,
            getPostComments:getPostComments,
            getPostReportAbuse:getPostReportAbuse,
        };
    }]);