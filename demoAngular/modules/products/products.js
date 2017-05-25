app.controller('productCtrl', ['$scope', function ($scope) {
//        console.log($scope.allProducts)
    }]);
app.controller('productDetailCtrl', ['$scope', function ($scope) {
        $(".owl-demo").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true

        });
    }]);