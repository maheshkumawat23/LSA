app.service('showPopOver',["$window","getDeviceInfo","$ionicPopup",function($window,getDeviceInfo,$ionicPopup){
     this.showAlert = function(title,message,showNoconnection,map) {
         if(showNoconnection){
         var getOnlineStatusService = getDeviceInfo.deviceInfo();
         var getOnlineStatus = getOnlineStatusService.connectionStatus;
        if(getOnlineStatus == false){
         
             window.plugins.toast.showWithOptions(
                {
                  message: title+'!!  '+message,
                  duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
                  position: "bottom",
                  addPixelsY: -40  // added a negative value to move it up a bit (default 0)
                },
                //Success callback
                  function(args) {
                     // console.log(args.event);
                      //This will print 'hide'
                  }, 
                  function(error) {
                      console.error('toast error: ', error);
                  }
              );
          
          
         };
         }

         else if(!showNoconnection)
             {
               var map = null;
                map =mapService.map;
                if(map){
                    map.setClickable(false);
                }
               var alertPopup = $ionicPopup.alert({
             title: title,
             template: message,
             });

           alertPopup.then(function(res) {
             if(map){
                    map.setClickable(true);
                }
           });
             }
     }

}]);