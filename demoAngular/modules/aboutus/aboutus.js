app.controller('aboutUsCtrl', ['$scope',function ($scope) {
       $(".owl-demo").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true
            
        });
       $(".owl-demo-thumb").owlCarousel({
           items : 4, 
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: false
            
        });
    }]);