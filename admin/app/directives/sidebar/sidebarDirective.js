app.directive("sidebar", ['$location', 'userService', 'constant', function ($location, userService, constant) {
        return{
            restrict: "E",
            templateUrl: "app/directives/sidebar/sidebar.html",
            link: function (scope, element, attrs) {
                scope.adminName = userService.getDataFromLocalStorage('name');
                scope.curentPage = "#" + $location.path();
                scope.menu = [{
                        title: "Product Management",
                        iconClass: "fa fa-tachometer",
                        link: "#/products"
                    }, {
                        title: "address Management",
                        iconClass: "fa fa-globe",
                        link: "#/address"
                    }, {
                        title: "Client Feedback",
                        iconClass: "fa fa-grav",
                        link: "#/clientFeedbacks"
                    },{
                        title:"CMS Pages",
                        iconClass:"fa fa-paw",
                        link:"#/cmsPages",
                    },{
                        title:"ContactUs Management",
                        iconClass:"fa fa-comments",
                        link:"#/contactUs"
                    },
                    {
                        title: "Goals and Why Us",
                        iconClass: "fa fa-flag",
                        link: "#/goals"
                    },
                    {
                        title: "NewsLater subscribers",
                        iconClass: "fa fa-flag",
                        link: "#/newsLaterSubscribers"
                    },
                    ];


            }
        }
    }])

app.directive('pageRefresh', function ($location, $route) {
    return function (scope, element, attrs) {
        element.bind('click', function () {
            if (element[0] && element[0].href && element[0].href === $location.absUrl()) {
                $route.reload();
            }
        });
    }
});