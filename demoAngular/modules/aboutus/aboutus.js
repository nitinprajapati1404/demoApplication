app.controller('aboutUsCtrl', ['$scope', 'constant', 'httpMethodService','$timeout', function ($scope, constant, httpMethodService,$timeout) {
        var getClientFeedback = constant.serverUrl + constant.clientFeedback;
        httpMethodService.httpMethodCallforRowData("GET", getClientFeedback, {}).success(function (response) {
            if (response.success) {
                $scope.feedbacks = response.feedbacks;
                console.log($scope.feedbacks);
                $timeout(function () {
                    $(".owl-demo").owlCarousel({
                        navigation: true, // Show next and prev buttons
                        slideSpeed: 300,
                        paginationSpeed: 400,
                        singleItem: true

                    });
                }, 100)
                $(".owl-demo-thumb").owlCarousel({
                    items: 4,
                    navigation: true, // Show next and prev buttons
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    singleItem: false

                });
            }
        });

    }]);