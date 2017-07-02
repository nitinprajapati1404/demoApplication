app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/newsLaterSubscribers", {
                    templateUrl: "app/modules/newsLater/newsLaterList.html",
                    controller: "newsLaterCtrl",
                    pagename: "newsLater Information",
                    auth: true
                })
    }]);
app.controller('newsLaterCtrl', ['$scope', '$rootScope','httpMethodService','apiUrl', function ($scope, $rootScope,httpMethodService,apiUrl) {
	$scope.newslaters = [];
    httpMethodService.httpFile("GET",apiUrl.getApiUrl('newsLater'),{}).success(function(response){
        if(response.success){
            $scope.newslaters = response.newslaters;
        }
    });
}]);
