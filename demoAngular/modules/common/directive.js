app.directive("headerPage", [function () {
        return{
            restrict: 'E,A',
            scope: {
            },
            templateUrl: 'modules/common/header.html',
            link: function ($scope) {

            }
        }
    }])
app.directive("footerPage", [function () {
        return{
            restrict: 'E,A',
            scope: {
            },
            templateUrl: 'modules/common/footer.html',
            link: function ($scope) {

            }
        }
    }])