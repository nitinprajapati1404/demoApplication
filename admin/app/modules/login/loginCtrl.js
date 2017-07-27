app.controller('loginCtrl', ['$scope','userService','$location',function($scope,userService,$location){
		// console.log("Ttttt")
	$scope.showSelectLang = false;
	$scope.prefered = {};
	if(userService.getDataFromLocalStorage('remember-me-username')!= 'null'){
		$scope.user = {};
		$scope.user.username = userService.getDataFromLocalStorage('remember-me-username');
		$scope.user.password = userService.getDataFromLocalStorage('remember-me-password');
		$scope.remmeberme = true;
	}
	var username = "aemehsana";
	var password = "1qaz1qaz";
	$scope.doLogin = function(){
		if($scope.user.username != "" && $scope.user.password !=""){
			if(($scope.user.username == username) && ($scope.user.password == password)){
			 	userService.saveDataInLocalStorage($scope.user);
			 	userService.saveDataInLocalStorage({"adminLoggedIn":true});
			 	 $location.path("/products");
			} 
		}
	}
	 
	
}])