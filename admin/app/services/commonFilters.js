app.filter('ucfirst', function() {
	return function(input,arg) {
		return input.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
	};
});
