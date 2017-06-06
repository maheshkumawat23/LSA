app.service('getDeviceInfo',["$window",function($window){

	this.deviceInfo = function()
	{
		var deviceinfo = {};
		deviceinfo.connectionStatus = $window.navigator.onLine;
		//deviceinfo.devicePlatform = $window.cordova.platformId;
		return deviceinfo;
	}
}])