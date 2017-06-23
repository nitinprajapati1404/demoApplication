app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/clientFeedbacks", {
                    templateUrl: "app/modules/clientFeedback/feedbackList.html",
                    controller: "feedbackListCtrl",
                    pagename: "Client Feedback List",
                    addLink: false,
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
}]);

app.controller('feedbackInfoCtrl', ['$scope', '$rootScope','$routeParams','httpMethodService','apiUrl', function ($scope, $rootScope,$routeParams,httpMethodService,apiUrl) {
      $scope.feedbackInfo = {};
      console.log("test")
      var getIndividualFeedback = apiUrl.getApiUrl('clientFeedback') +"/" +$routeParams.param; 
       httpMethodService.httpMethodCallforRowData("GET",getIndividualFeedback,{}).success(function(response){
        if(response.success){
            $scope.feedbackInfo = response.feedback;
        }
      });
}]);
app.controller('feedbackCreateEditCtrl',['$scope', '$rootScope','$routeParams','httpMethodService','apiUrl', function ($scope, $rootScope,$routeParams,httpMethodService,apiUrl) {
      $scope.feedbackInfo = {};
      var getIndividualFeedback = apiUrl.getApiUrl('clientFeedback') +"/" +$routeParams.id; 
       httpMethodService.httpMethodCallforRowData("GET",getIndividualFeedback,{}).success(function(response){
        if(response.success){
            $scope.feedbackInfo = response.feedback;
        }
      });
}]);
