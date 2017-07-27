app.config(['$routeProvider', 'growlProvider', function ($routeProvider, growlProvider) {
        $routeProvider 
                .when("/login", {
                    templateUrl: "app/modules/login/login.html",
                    controller: "loginCtrl",
                    pagename: "Login",
                    auth: false
                }) 
                .otherwise({
                    redirectTo: '/login'
                });

        growlProvider.globalTimeToLive({success: 1000, error: 2000, warning: 3000, info: 4000});

    }]);