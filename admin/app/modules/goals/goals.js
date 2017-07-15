app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when("/goals", {
                    templateUrl: "app/modules/goals/goalsList.html",
                    controller: "goalsCtrl",
                    pagename: "goals Information",
                    addLink: "#/goal/new",
                    auth: true
                }) .when("/goal/:id", {
                    templateUrl: "app/modules/goals/createOrEditGoal.html",
                    controller: "goalsCreateOrEditCtrl",
                    pagename: "goals Information",
                    auth: true
                })
    }]);
app.controller('goalsCtrl', ['$scope', '$rootScope','httpMethodService','apiUrl', function ($scope, $rootScope,httpMethodService,apiUrl) {
    $scope.goals = [];
    httpMethodService.httpMethodCallforRowData("GET",apiUrl.getApiUrl('goal'),{}).success(function(response){
        if(response.success){
            $scope.goals = response.goals;
        }
    });

    $scope.deleteGoal = function(goal){
        var deletgoalUrl = apiUrl.getApiUrl('goal')+"/"+goal.goalId;
        httpMethodService.httpMethodCallforRowData("DELETE",deletgoalUrl,{}).success(function(response){
            if(response.success){
                var idx = $scope.goals.indexOf(goal);
                if(idx != -1){
                    $scope.goals.splice(idx,1);
                }
            }
        });
    }
}]);
app.controller('goalsCreateOrEditCtrl', ['$scope', '$rootScope','httpMethodService','apiUrl','$routeParams','$location', function ($scope, $rootScope,httpMethodService,apiUrl,$routeParams,$location) {
	$scope.goal = {};
    httpMethodService.httpMethodCallforRowData("GET",apiUrl.getApiUrl('goal')+"/"+$routeParams.id,{}).success(function(response){
        if(response.success){ 
            $scope.goal = response.goal;
             console.log($scope.goal)
        }
    });

    $scope.addGoal = function(){
        httpMethodService.httpMethodCallforRowData("POST",apiUrl.getApiUrl('goal'),$scope.goal).success(function(response){
            if(response.success){ 
                 $location.path("/goals");
            }
        });
    }
    $scope.updateGoal = function(){
        httpMethodService.httpMethodCallforRowData("PUT",apiUrl.getApiUrl('goal')+"/"+$routeParams.id,$scope.goal).success(function(response){
            if(response.success){  
                $location.path("/goals");
            }
        });
    }
}]);
