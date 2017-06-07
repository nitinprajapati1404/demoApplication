app.directive('sortArrow',['constant',function(constant){
return{
		restrict:"E",
		scope:{
			name:'@',
			orderByField:'=',
			reverseSort:'=',
		},
		templateUrl:"app/directives/sortArrow/sortArrow.html",
		link:function(scope, element, attrs){
			
		}
}
}]);