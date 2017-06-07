app.factory('apiUrl', ['constantApi','constant', function(constantApi,constant){
    var allUrls = {};

    var setApiUrls = function(){
        angular.forEach(constantApi,function(value,key){
            allUrls[key] = constant.apiUrl + value;            
        })
    }

    var getApiUrl = function(key){
        return allUrls[key];
    }

    return {
        setApiUrls:setApiUrls,
        getApiUrl:getApiUrl
    }

}])

app.factory('base64', ['$window', function($window) {
    return {

        name: 'Base64',
        readonly: false,

        encode: function(input) {
            return $window.btoa(input);
        },

        decode: function(input) {
            return $window.atob(input);
        }

    };
}]);