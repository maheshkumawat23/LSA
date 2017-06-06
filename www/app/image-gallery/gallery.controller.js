(function () {
    angular
        .module('starter')
        .controller('GalleryController', galleryController);

    galleryController.$inject = ['$http', '$scope', 'flickrFactory', '$ionicHistory', '$ionicLoading','$window','getDeviceInfo','$state','showPopOver'];

    function galleryController($http, $scope, flickrFactory, $ionicHistory, $ionicLoading,$window,getDeviceInfo,$state,showPopOver) {

        var vm = this;
        var getOnlineStatusService = getDeviceInfo.deviceInfo();
        var getOnlineStatus = getOnlineStatusService.connectionStatus;
        console.log(getOnlineStatus);
        console.log($window.navigator.onLine);
        vm.images = [];
        vm.totalImages = [];
        vm.arrayImages = [];
        vm.loadImages = function () {

                if(getOnlineStatus == true){
                    $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-out',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                });
                vm.arrayImages = [];
                vm.totalImages = [];
                $http.get('https://api.flickr.com/services/rest?sort=relevance&per_page=500&page=1&lang=en-US&method=flickr.photos.search&api_key=f55d599f1bf9aec92821992f727356ad&format=json&hermes=1&reqId=9004436361cf6f8c&nojsoncallback=1&user_id=154856885@N07').then(function(data){
                     
                      vm.totalImages = data.data.photos.photo;
                      console.log(vm.totalImages);
                        
                      var i =0;
                for(i=0;i<vm.totalImages.length;i++){
                            var arr = {};
                            var str="";
                            var str = "https://farm5.staticflickr.com/"+vm.totalImages[i].server+"/"+vm.totalImages[i].id+"_"+vm.totalImages[i].secret+"_m.jpg";
                            arr.link = str;
                            arr.title = vm.totalImages[i].title;
                            vm.arrayImages.push(arr);
                            console.log(vm.arrayImages);
                           
                      }
                      $ionicLoading.hide();
                      $scope.$broadcast('scroll.refreshComplete');
                      
                });
                
                      
               /* flickrFactory.getImagesFromUserById({
                    id: "154856885@N07", // username converter: http://idgettr.com/
                    lang: "de-de", // (optional) https://www.flickr.com/services/feeds/
                }).then(function (data) {
                    // console.info("images from user by id", data);
                    vm.images = data.data.items;
                    $ionicLoading.hide();
                    console.log(vm.images);
					$scope.$broadcast('scroll.refreshComplete');

                });*/
            }
            else{
                showPopOver.showAlert('Connection Error!',"You are not connected to Internet",true);
                $state.go('home');
            }
            
            vm.back = function () {
                $ionicHistory.goBack();
            }

        }

    };

})();