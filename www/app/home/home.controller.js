app.controller('HomeController', function ($scope,$state) {
	$scope.goTo=function(state)
	{
		$state.go(state);
	}
});