app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/clientFeedbacks", {
                    templateUrl: "app/modules/clientFeedback/feedbackList.html",
                    controller: "feedbackListCtrl",
                    pagename: "Client Feedback List",
                    addLink: "#/clientFeedback/add/new",
                    auth: true
                })
                .when("/clientFeedback/:param", {
                    templateUrl: "app/modules/clientFeedback/feedbackInfo.html",
                    controller: "feedbackInfoCtrl",
                    pagename: "Client Feedback Detail",
                    addLink: false,
                    auth: true
                })
                .when("/clientFeedback/:param/:id", {  // if param is new then id will be undefined and if param is edit then id will be id of product
                    templateUrl: "app/modules/clientFeedback/feedbackAddEdit.html",
                    controller: "feedbackCreateEditCtrl",
                    pagename: "Create/Edit Client Feedback",
                    addLink: false,
                    auth: true
                })
    }]);
app.controller('feedbackListCtrl', ['$scope', '$rootScope','httpMethodService','apiUrl', function ($scope, $rootScope,httpMethodService,apiUrl) {
      $scope.feedbackList = [];
       httpMethodService.httpMethodCallforRowData("GET",apiUrl.getApiUrl('clientFeedback'),{}).success(function(response){
        if(response.success){
            $scope.feedbackList = response.feedbacks;
            // $scope.productList = response.products;
        }
      });

       $scope.deleteClient = function(feedback){
            var deletClientFeedbackUrl = apiUrl.getApiUrl('clientFeedback')+"/"+feedback.clientId;
            httpMethodService.httpMethodCallforRowData("DELETE",deletClientFeedbackUrl,{}).success(function(response){
                if(response.success){
                    var idx = $scope.feedbackList.indexOf(feedback);
                    if(idx != -1){
                        $scope.feedbackList.splice(idx,1);
                    }
                }
            });
       }
}]);

app.controller('feedbackInfoCtrl', ['$scope', '$rootScope','$routeParams','httpMethodService','apiUrl', function ($scope, $rootScope,$routeParams,httpMethodService,apiUrl) {
      $scope.clientFeedbackDetail = {};
      var getIndividualFeedback = apiUrl.getApiUrl('clientFeedback') +"/" +$routeParams.param; 
       httpMethodService.httpMethodCallforRowData("GET",getIndividualFeedback,{}).success(function(response){
        if(response.success){
            $scope.clientFeedbackDetail = response.feedback;
        }
      });
}]);
app.controller('feedbackCreateEditCtrl',['$scope', '$rootScope','$routeParams','httpMethodService','apiUrl','$location', function ($scope, $rootScope,$routeParams,httpMethodService,apiUrl,$location) {
    $scope.clientFeedbackDetail = {};
    var formData = new FormData();
    var getIndividualFeedback = apiUrl.getApiUrl('clientFeedback') +"/" +$routeParams.id; 
    httpMethodService.httpMethodCallforRowData("GET",getIndividualFeedback,{}).success(function(response){
        if(response.success){
            $scope.clientFeedbackDetail = response.feedback;
        }
    });
    
    $scope.addFeedback = function(feedback){
        angular.forEach(feedback, function (value, key) {
                formData.append(key, value);
        })

        httpMethodService.httpFile("POST",apiUrl.getApiUrl('clientFeedback'),formData).success(function(response){
            if(response.success){
                 $location.path("/clientFeedbacks"); 
            }
        });
    }

    $scope.updateClientFeedback = function(feedback){
        delete feedback.clientImageRandom;
        angular.forEach(feedback, function (value, key) {
                formData.append(key, value);
        })
        httpMethodService.httpFile("PUT",getIndividualFeedback,formData).success(function(response){
            if(response.success){
                 $location.path("/clientFeedbacks"); 
            }
        });

    }

    $scope.setFiles = function (element,objkey) {
        $scope.$apply(function (scope) { 
            angular.forEach(element.files, function (value, key) { 
                formData.append(objkey, value); 
            }) 
        });
    };
}]);
