app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/products", {
                    templateUrl: "app/modules/products/productList.html",
                    controller: "productCtrl",
                    pagename: "Manage products",
                    addLink: "#/product/add/new",
                    auth: true
                })
                .when("/product/:param", {
                    templateUrl: "app/modules/products/productInfo.html",
                    controller: "productInfoCtrl",
                    pagename: "Product Detail",
                    addLink: false,
                    auth: true
                })
                .when("/product/:param/:id", {  // if param is new then id will be undefined and if param is edit then id will be id of product
                    templateUrl: "app/modules/products/productAddEdit.html",
                    controller: "productCreateEditCtrl",
                    pagename: "Create/Edit Product",
                    addLink: false,
                    auth: true
                })
    }]);
app.controller('productCtrl', ['$scope', '$rootScope','httpMethodService','apiUrl', function ($scope, $rootScope,httpMethodService,apiUrl) {
    console.log(apiUrl.getApiUrl('product'))  
    $scope.productList = [];
      httpMethodService.httpMethodCallforRowData("GET",apiUrl.getApiUrl('product'),{}).success(function(response){
        if(response.success){
            $scope.productList = response.products;
        }
      });

      $scope.deleteProduct = function(product){
        var deletProductUrl = apiUrl.getApiUrl('product')+"/"+product.productId;
        httpMethodService.httpMethodCallforRowData("DELETE",deletProductUrl,{}).success(function(response){
        if(response.success){
            var idx = $scope.productList.indexOf(product);
            if(idx != -1){
                $scope.productList.splice(idx,1);
            }
        }
      });
      }
}]);

app.controller('productInfoCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      console.log('productInfoCtrl');
}]);

app.controller('productCreateEditCtrl', ['$scope', '$rootScope','httpMethodService','apiUrl', function ($scope, $rootScope,httpMethodService,apiUrl) {
    $scope.product = {};

    var formData = new FormData();
    $scope.addProudct = function(product){
       
            angular.forEach(product, function (value, key) {
                formData.append(key, value);
            })
        httpMethodService.httpFile("POST",apiUrl.getApiUrl('product'),formData).success(function(response){
        if(response.success){
            if(response.success){
                $location.path("/products");
            }
        }
      });
        
    }

    $scope.setFiles = function (element,objkey) {
            $scope.$apply(function (scope) {
                angular.forEach(element.files, function (value, key) {
                    formData.append(objkey, value);
                })

            });
        };

    $scope.updateProudct = function(product){

    }
}]);
