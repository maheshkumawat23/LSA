app.controller('ChatboxController', function ($scope,showPopOver,$ionicLoading,$window,$ionicHistory,$http,$timeout) {
      $scope.messages=[];
      $scope.back = function(){
        $ionicHistory.goBack();
      }
      $scope.data={};
      var first=true;
       $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-out',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                });
                if(!$window.navigator.onLine){
                   showPopOver.showAlert('Connection Error!',"You are not connected to Internet",true);
                  $ionicLoading.hide();
                }
      var messagesRef = new Firebase("https://lsawards-8072d.firebaseio.com/");
       messagesRef.on('child_added', function (snapshot) {
        $ionicLoading.hide();
        var message = snapshot.val();
        // console.log(snapshot);
        $timeout(function(){
          $scope.messages.unshift(message);
        },0)
      });
      $scope.send=function(){
        if($window.navigator.onLine)
        {
          var name = $scope.data.username;
          var text = $scope.data.comment;
          messagesRef.push({name:name, text:text});
            $scope.data.comment="";
        }
        else
        {
          showPopOver.showAlert('Connection Error!',"You are not connected to Internet",true);
          $ionicLoading.hide();
        }
      }
      // Add a callback that is triggered for each chat message.
     
      showPopOver.showAlert('Connection Error!',"You are not connected to Internet",true);
      
});