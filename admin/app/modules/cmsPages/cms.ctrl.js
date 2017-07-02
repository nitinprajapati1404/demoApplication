app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/cmsPages", {
                    templateUrl: "app/modules/cmsPages/cmsList.html",
                    controller: "cmsPageCtrl",
                    pagename: "Manage CMS Pages",
                    addLink: "#/cmsPage/add/new",
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
app.controller('cmsPageCtrl', ['$scope', '$rootScope','httpMethodService','apiUrl', function ($scope, $rootScope,httpMethodService,apiUrl) { 
    $scope.cmsList = []; 
    httpMethodService.httpMethodCallforRowData("GET",apiUrl.getApiUrl('cms'),{}).success(function(response){
        if(response.success){
            $scope.cmsList = response.pages; 
        }
    }); 
}]);

app.controller('cmsPageInfoCtrl', ['$scope', '$rootScope','httpMethodService','apiUrl','$routeParams', function ($scope, $rootScope,httpMethodService,apiUrl,$routeParams) {

    $scope.pageInfo = {};

    httpMethodService.httpMethodCallforRowData("GET",apiUrl.getApiUrl('cms')+"/"+$routeParams.param,{}).success(function(response){
        if(response.success){
             $scope.pageInfo = response.cmspage; 
        }
    });  
}]);

app.controller('cmsPageCreateEditCtrl', ['$scope', '$rootScope','httpMethodService','apiUrl','$routeParams','$location', function ($scope, $rootScope,httpMethodService,apiUrl,$routeParams,$location) {
    $scope.pageInfo = {};
    var formData = new FormData();
    httpMethodService.httpMethodCallforRowData("GET",apiUrl.getApiUrl('cms')+"/"+$routeParams.id,{}).success(function(response){
        if(response.success){
            $scope.pageInfo = response.cmspage; 
        }
    }); 

    $scope.addCmsPage = function(cms){
        angular.forEach(cms, function (value, key) {
                formData.append(key, value);
        })

        httpMethodService.httpFile("POST",apiUrl.getApiUrl('cms'),formData).success(function(response){
            if(response.success){
                 $location.path("/cmsPages"); 
            }
        });
    }

    $scope.updateCmsPage = function(cms){
        delete cms.cmspagebannerRandom;
        angular.forEach(cms, function (value, key) {
                formData.append(key, value);
        })
        // console.log(formData,'formData',formData.cmsShortDesc)
        httpMethodService.httpFile("PUT",apiUrl.getApiUrl('cms')+"/"+$routeParams.id,formData).success(function(response){
            if(response.success){
                 $location.path("/cmsPages"); 
            }
        });

    }

    $scope.setFiles = function (element,objkey) {
        $scope.$apply(function (scope) { 
            console.log("fffffff")
            angular.forEach(element.files, function (value, key) { 
                formData.append(objkey, value); 
            }) 
        });
    };

}]);
