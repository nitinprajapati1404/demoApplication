app.controller('productCtrl', ['$scope', function ($scope) {
//        console.log($scope.allProducts)
    }]);
app.controller('productDetailCtrl', ['$scope', '$timeout', '$routeParams', 'httpMethodService', 'constant', '$modal', function ($scope, $timeout, $routeParams, httpMethodService, constant, $modal) {
//        $scope.product = {};

        var getProductInfo = constant.serverUrl + constant.product + "/" + $routeParams.id;
        httpMethodService.httpMethodCallforRowData("GET", getProductInfo, {}).success(function (response) {
            if (response.success) {
                $scope.product = response.product;

                console.log($scope.product)
            }
        });
        $timeout(function () {

            $(".owl-demo").owlCarousel({
                navigation: true, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true

            });
        }, 100)

        $scope.openForm = function () {
            var modalInstance = $modal.open({
                templateUrl: 'modules/products/downloadBrochure.html',
                controller: 'downloadBrochure',
                size: 'lg',
                windowClass: '',
                backdrop: 'static',
                resolve: {
                    productCatelogRandom:function(){
                        return $scope.product.productCatelogRandom;
                    }
                }
            });
        }
    }]);

app.controller("downloadBrochure", ['$scope', '$modalInstance','productCatelogRandom', function ($scope, $modalInstance,productCatelogRandom) {
        $scope.productCatelogRandom = productCatelogRandom;
        console.log(productCatelogRandom)
        $scope.downloadBrochure = function () {
//            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss();
        };
    }])