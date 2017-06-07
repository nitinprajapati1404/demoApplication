app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/address", {
                    templateUrl: "app/modules/address/addressEdit.html",
                    controller: "addressCtrl",
                    pagename: "Address Information",
                    auth: true
                })
    }]);
app.controller('addressCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      console.log('addressCtrl');
}]);
