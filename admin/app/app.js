var app = angular.module("adminapp", ["ngRoute", "ngMessages", "ui.bootstrap", "ngConfirm", "angular-growl", "angular-underscore","mgo-angular-wizard",'angularMoment','angularTrix','colorpicker.module']);
app.run(function ($rootScope, $route, $location, apiUrl,userService) {
    $rootScope._ = _;
    apiUrl.setApiUrls();
    $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
        var adminLoggedIn = userService.getDataFromLocalStorage("adminLoggedIn");
        if(adminLoggedIn == "" || adminLoggedIn == null){
            $location.path("/login");
        }
        if((current.originalPath === "/login") && adminLoggedIn){
            $location.path("/products");
        }
        // if(current.originalPath === "/login"){
        //     if (localStorage.getItem("x-access-token") !== null) {
        //         $location.path("/dashboard");
        //     }
        // }
        // if (current.auth === true) {
        //     if (localStorage.getItem("x-access-token") === null) {
        //         $location.path("/login");
        //     }
        // }
        $rootScope.pageName = current.pagename;
        $rootScope.addLink = current.addLink;
    });
});
app.controller('mainCtrl', ['$scope', '$rootScope', 'constant', '$location','userService', function ($scope, $rootScope, constant, $location,userService) {
        $rootScope.appName = constant.appName;
        $rootScope.logout = function () {
            userService.removeAllLocalStorage();
            $location.path("/login");
        };

        var d = new Date();
        $scope.year = d.getFullYear();
        
        //Loder hide show function for common
        $rootScope.loaderShow = function () {
            $rootScope.loading = true;
        };

        $rootScope.loaderHide = function () {
            $rootScope.loading = false;
        };
    }]);