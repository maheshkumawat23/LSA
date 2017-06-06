(function () {
    angular
        .module('starter')
        .controller('GalleryzoomController', galzoomCtrl);

    galzoomCtrl.$inject = ['$stateParams','$ionicHistory'];

    function galzoomCtrl($stateParams,$ionicHistory) {
        var index = $stateParams.index;
        console.log("image -- " + index);

        var vm = this;
        vm.src = index;
        console.log(vm.src);
        vm.back = function(){
            $ionicHistory.goBack();
        }
    };

})();