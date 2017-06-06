app.controller('AwarddetailsController', function ($scope,$stateParams,$ionicHistory) {
    $scope.imgsrc = 'assets/images/avatar.jpg';

    console.log($stateParams.myParam);
    $scope.name = $stateParams.name.name;
    $scope.back = function(){
    	$ionicHistory.goBack();
    }

});