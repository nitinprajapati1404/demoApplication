app.directive("headerPage", ['$location', '$rootScope', function ($location, $rootScope) {
        return{
            restrict: 'E,A',
            templateUrl: 'modules/common/header.html',
            link: function ($scope) {
                $scope.url = $location.path().split('/');
                $scope.$on("$locationChangeSuccess", function () {
                    $scope.url = $location.path().split('/');
                });
                
                $scope.setArialExapnd = function(){
//                    $(".changeNavigation").attr("aria-expanded",false);
                }
            }
        }
    }])
app.directive("queryForm", ['httpMethodService', 'constant', function (httpMethodService, constant) {
        return{
            restrict: 'E,A',
            templateUrl: 'modules/common/queryForm.html',
            scope: {
                formsubmitedSuccessfully: "=",
                productName: "@"
            },
            link: function ($scope) {
                var addQuery = constant.serverUrl + constant.contactUs;
                var setDetaultValue = function () {
                    $scope.query = {};
                    if (typeof $scope.productName != 'undefined') {
                        $scope.query.InquiryProductName = $scope.productName;
                    }
                }

                setDetaultValue();
                $scope.submitQuery = function () {
                    httpMethodService.httpMethodCallforRowData("POST", addQuery, $scope.query).success(function (response) {
                        if (response.success) {
                            if (typeof $scope.formsubmitedSuccessfully != 'undefined') {
                                $scope.formsubmitedSuccessfully = true;
                            }
//                            setDetaultValue();

                        }
                    });

                }
            }
        }
    }])
app.directive("footerPage", [function () {
        return{
            restrict: 'E,A',
            templateUrl: 'modules/common/footer.html',
            link: function ($scope) {
                var d = new Date();
                $scope.currentYear = d.getFullYear();
            }
        }
    }])