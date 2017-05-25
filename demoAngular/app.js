'use strict';
var app = angular.module("demoApp",["ngRoute"]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider

                .when('/', {
                    templateUrl: "modules/home/home.html",
                    controller: "homeCtrl"
                })
                .when('/about-us', {
                    templateUrl: "modules/aboutus/aboutus.html",
                    controller: "aboutUsCtrl"
                })
                .when('/products', {
                    templateUrl: "modules/products/allproducts.html",
                    controller: "productCtrl"
                })
                .when('/product/:id', {
                    templateUrl: "modules/products/allproducts.html",
                    controller: "productDetailCtrl"
                })
                .when('/contactus', {
                    templateUrl: "modules/contactus/contactus.html",
                    controller: "contactUsCtrl"
                })
                .otherwise({
                    redirectTo: "/"
                });
    }]);
app.controller('commonCtrl', ['$scope',function ($scope) {
       console.log("test")
    }]);
app.directive('tooltip', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(element).hover(function () {
                // on mouseenter
                $(element).tooltip('show');
            }, function () {
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});

