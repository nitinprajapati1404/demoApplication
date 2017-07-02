app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/contactUs", {
                    templateUrl: "app/modules/contactUs/contactUsList.html",
                    controller: "contactUsCtrl",
                    pagename: "Manage contactUs Pages",
                    addLink: false,
                    auth: true
                })
                .when("/contactUs/:id", {
                    templateUrl: "app/modules/contactUs/contactUsInfo.html",
                    controller: "contactUsInfoCtrl",
                    pagename: "contactUs Detail",
                    addLink: false,
                    auth: true
                })
                .when("/contactUs/:param/:id", {  // if param is new then id will be undefined and if param is edit then id will be id of product
                    templateUrl: "app/modules/contactUs/contactUsAddEdit.html",
                    controller: "contactUsCreateEditCtrl",
                    pagename: "Create/Edit contactUs",
                    addLink: false,
                    auth: true
                })
    }]);
app.controller('contactUsCtrl', ['$scope', '$rootScope','httpMethodService','apiUrl', function ($scope, $rootScope,httpMethodService,apiUrl) {
    $scope.contactUsList = []; 
    httpMethodService.httpMethodCallforRowData("GET",apiUrl.getApiUrl('contactUs'),{}).success(function(response){
        if(response.success){
            $scope.contactUsList = response.allContacts;
        }
      }); 
}]);

app.controller('contactUsInfoCtrl', ['$scope', '$rootScope','httpMethodService','apiUrl','$routeParams', function ($scope, $rootScope,httpMethodService,apiUrl,$routeParams) {
    $scope.contact = {};
    httpMethodService.httpMethodCallforRowData("GET",apiUrl.getApiUrl('contactUs')+"/"+$routeParams.id,{}).success(function(response){
        if(response.success){
            $scope.contact = response.contact;
        }
    }); 
}]);

app.controller('contactUsCreateEditCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      console.log('contactUsCreateEditCtrl');
}]);
