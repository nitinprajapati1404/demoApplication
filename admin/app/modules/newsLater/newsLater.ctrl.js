app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/newsLaterSubscribers", {
                    templateUrl: "app/modules/newsLater/newsLaterList.html",
                    controller: "newsLaterCtrl",
                    pagename: "newsLater Information",
                    auth: true
                })
    }]);
app.controller('newsLaterCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      console.log('newsLaterCtrl');
}]);
