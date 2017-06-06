app.controller('MapsController', function ($scope, NgMap, $state, $cordovaGeolocation,$ionicHistory,showPopOver,$window,$ionicPopup) {
	if($window.navigator.onLine){
		NgMap.getMap().then(function (map) {
		console.log(map.getCenter());
		console.log('markers', map.markers);
		console.log('shapes', map.shapes);

	});


	var posOptions = { timeout: 10000, enableHighAccuracy: true };

	$cordovaGeolocation
		.getCurrentPosition(posOptions)
		.then(function (position) {
			$scope.lat = position.coords.latitude;
			$scope.long = position.coords.longitude;
			console.log($scope.lat,$scope.long);
		}, function (err) {
			console.log(err);
			//showPopOver.showAlert('Gps Error!',"please turn on your GPS",false);
			 var alertPopup = $ionicPopup.alert({
					title: 'Gps Error',
					template: 'Please turn on your device GPS and allow LSA to access your current location'
				});

				alertPopup.then(function(res) {
					$state.go('home');
				});
		});
	}
	else
	{
			showPopOver.showAlert('Connection Error!',"You are not connected to Internet",true);
			$state.go('home');
	}
	

	$scope.back = function () {
		//$state.go('tabs');
		$ionicHistory.goBack();
	}
	showPopOver.showAlert('Connection Error!',"You are not connected to Internet",true);

});