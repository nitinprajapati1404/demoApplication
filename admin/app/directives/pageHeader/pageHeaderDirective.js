app.directive("pageheader",['userService','constant',function(userService,constant){
	return {
		restrict:"E",
		templateUrl:"app/directives/pageHeader/header.html",
		link:function(scope, element, attrs){
			scope.adminName = userService.getDataFromLocalStorage('name');
			scope.appName = constant.appName;
		}
	}
}]);