app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/products", {
                    templateUrl: "app/modules/products/productList.html",
                    controller: "productCtrl",
                    pagename: "Manage products",
                    addLink: false,
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
app.controller('productCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      console.log('productCtrl');
}]);

app.controller('productInfoCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      console.log('productInfoCtrl');
}]);

app.controller('productCreateEditCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      console.log('productCreateEditCtrl');
}]);
