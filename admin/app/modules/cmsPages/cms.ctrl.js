app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/cmsPages", {
                    templateUrl: "app/modules/cmsPages/cmsList.html",
                    controller: "cmsPageCtrl",
                    pagename: "Manage CMS Pages",
                    addLink: false,
                    auth: true
                })
                .when("/cmsPage/:param", {
                    templateUrl: "app/modules/cmsPages/cmsInfo.html",
                    controller: "cmsPageInfoCtrl",
                    pagename: "CMS Detail",
                    addLink: false,
                    auth: true
                })
                .when("/cmsPage/:param/:id", {  // if param is new then id will be undefined and if param is edit then id will be id of product
                    templateUrl: "app/modules/cmsPages/cmsAddEdit.html",
                    controller: "cmsPageCreateEditCtrl",
                    pagename: "Create/Edit CMS",
                    addLink: false,
                    auth: true
                })
    }]);
app.controller('cmsPageCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      console.log('cmsPageCtrl');
}]);

app.controller('cmsPageInfoCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      console.log('cmsPageInfoCtrl');
}]);

app.controller('cmsPageCreateEditCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      console.log('cmsPageCreateEditCtrl');
}]);
