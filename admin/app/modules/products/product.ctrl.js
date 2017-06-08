app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/products", {
                    templateUrl: "app/modules/products/productList.html",
                    controller: "productCtrl",
                    pagename: "Manage products",
                    addLink: "#/product/add/new",
                    auth: true
                })
                .when("/product/:id", {
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

app.controller('productInfoCtrl', ['$scope', '$rootScope','$routeParams','apiUrl','httpMethodService', function ($scope, $rootScope,$routeParams,apiUrl,httpMethodService) {
    $scope.product = {};
    $scope.productGallary = [];
    var formData = new FormData();
    var getProductInfoUrl = apiUrl.getApiUrl('product') + "/"+$routeParams.id;

    httpMethodService.httpFile("GET",getProductInfoUrl,{}).success(function(response){
        if(response.success){
            $scope.product = response.product;
        }
    });

    $scope.addProductGallery = function(){
         formData.append('productId', $routeParams.id);
        angular.forEach($scope.productGallary,function(value,key){
            formData.append('image', value);
        });

        httpMethodService.httpFile("POST",apiUrl.getApiUrl('addImagesOfProduct'),formData).success(function(response){
            if(response.success){
                    // $location.path("/products");
            }
        });
    }


     $scope.setFiles = function (element,objkey) {
        $scope.$apply(function (scope) {
            angular.forEach(element.files, function (value, key) {
                $scope.productGallary.push(value);
            }) 
            console.log($scope.productGallary)
        });
    };
}]);

app.controller('productCreateEditCtrl', ['$scope', '$rootScope','httpMethodService','apiUrl','$location','$routeParams', function ($scope, $rootScope,httpMethodService,apiUrl,$location,$routeParams) {
    $scope.product = {};
    if($routeParams.param == "edit"){
        var getProductInfoUrl = apiUrl.getApiUrl('product') + "/"+$routeParams.id;

        httpMethodService.httpFile("GET",getProductInfoUrl,{}).success(function(response){
            if(response.success){
                $scope.product = response.product;
            }
        });
    }
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

    $scope.updateProudct = function(product){
        var getProductInfoUrl = apiUrl.getApiUrl('product') + "/"+$routeParams.id;
        delete product.productThumbImageRandom;
        delete product.productHomePageImageRandom;
        delete product.productCatelogRandom;

        angular.forEach(product, function (value, key) {
                formData.append(key, value);
        })
        
        httpMethodService.httpFile("PUT",getProductInfoUrl,formData).success(function(response){
            if(response.success){
                 $location.path("/products"); 
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

    
}]);
