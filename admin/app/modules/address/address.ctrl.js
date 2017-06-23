app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/address", {
                    templateUrl: "app/modules/address/addressEdit.html",
                    controller: "addressCtrl",
                    pagename: "Address Information",
                    auth: true
                })
    }]);
app.controller('addressCtrl', ['$scope', '$rootScope','httpMethodService','apiUrl', function ($scope, $rootScope,httpMethodService,apiUrl) {
      
      $scope.address = {};
       httpMethodService.httpMethodCallforRowData("GET",apiUrl.getApiUrl('address'),{}).success(function(response){
        if(response.success){
        	$scope.address = response.myaddress[0];
            // $scope.productList = response.products;
        }
      });

}]);
