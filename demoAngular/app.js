'use strict';
var app = angular.module("demoApp", ["ngRoute","ui.bootstrap"]);

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
                    templateUrl: "modules/products/productinfo.html",
                    controller: "productDetailCtrl"
                })
                .when('/contact-us', {
                    templateUrl: "modules/contactus/contactus.html",
                    controller: "contactUsCtrl"
                })
                .otherwise({
                    redirectTo: "/"
                });
    }]);
app.controller('commonCtrl', ['$scope', 'constant', 'httpMethodService', '$filter', function ($scope, constant, httpMethodService, $filter) {
        var getProduct = constant.serverUrl + constant.product;
        var getCmsPages = constant.serverUrl + constant.cms;
        $scope.allProducts = [];
        $scope.allCmsPages = [];
        httpMethodService.httpMethodCallforRowData("GET", getProduct, {}).success(function (response) {
            if (response.success) {
                $scope.allProducts = response.products;
            }
        });
        $scope.aboutUsCmsPage = {};
        httpMethodService.httpMethodCallforRowData("GET", getCmsPages, {}).success(function (response) {
            if (response.success) {
                $scope.allCmsPages = response.pages;
                if ($scope.allCmsPages.length > 0) {
                    $scope.aboutUsCmsPage = $filter('filter')($scope.allCmsPages, {cmsName: 'about_us'})[0];
                }

            }
        });
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

