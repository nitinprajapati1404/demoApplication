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
app.controller('feedbackListCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      console.log('feedbackListCtrl');
}]);

app.controller('feedbackInfoCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      console.log('feedbackInfoCtrl');
}]);
app.controller('feedbackCreateEditCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      console.log('feedbackCreateEditCtrl');
}]);
