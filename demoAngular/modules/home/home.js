app.controller('homeCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        
        $timeout(function () {
            $("#owl-demo").owlCarousel({
                navigation: true, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true

            });
        }, 150)

    }]);
