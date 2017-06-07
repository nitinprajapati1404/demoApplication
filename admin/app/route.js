app.config(['$routeProvider', 'growlProvider', function ($routeProvider, growlProvider) {
        // $routeProvider
        //         .when("/dashboard", {
        //             templateUrl: "app/modules/dashboard/templates/dashboard.html",
        //             controller: "dashboardCtrl",
        //             pagename: "Dashboard",
        //             auth: true

        //         })
        //         .when("/login", {
        //             templateUrl: "app/modules/login/templates/login.html",
        //             controller: "loginCtrl",
        //             pagename: "Login",
        //             auth: false
        //         })
        //         .when("/users", {
        //             templateUrl: "app/modules/user/templates/userlist.html",
        //             controller: "userCtrl",
        //             pagename: "Manage Users",
        //             auth: true
        //         })
        //         .when("/user-profile", {
        //             templateUrl: "app/modules/user/templates/userProfile.html",
        //             controller: "userProfileCtrl",
        //             pagename: "User Profile",
        //             auth: true
        //         })
        //         .otherwise({
        //             redirectTo: '/login'
        //         });

        growlProvider.globalTimeToLive({success: 1000, error: 2000, warning: 3000, info: 4000});

    }]);