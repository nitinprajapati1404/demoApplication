app.directive("headerPage", ['$location', '$rootScope', function ($location, $rootScope) {
        return{
            restrict: 'E,A',
            templateUrl: 'modules/common/header.html',
            link: function ($scope) {
                $scope.url = $location.path().split('/');
                $scope.$on("$locationChangeSuccess", function () {
                    $scope.url = $location.path().split('/');
                });

                $scope.closeDropdown = function () {
//                    $(".changeNavigation").attr("aria-expanded",false);
                    $("#main-navbar-collapse").removeClass("in");
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
                productName: "@",
                cancel:"="
            },
            link: function ($scope) {
                $scope.responseSent = false;
                var addQuery = constant.serverUrl + constant.contactUs;
                var setDetaultValue = function () {
                    $scope.query = {};
                    $scope.downloadBrochure.$setUntouched();
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
                            }else{
                                $scope.responseSent = "Thank you for showing Interest. we will contact you soon."
                            }
                            setDetaultValue();
//window.location.reload()
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
            scope: {
                address:"="
            },
            link: function ($scope) {
                var d = new Date();
                $scope.currentYear = d.getFullYear();
            }
        }
    }])