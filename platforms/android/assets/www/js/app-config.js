

app.run(['$rootScope', '$ionicPlatform', '$state', '$window', function ($rootScope, $ionicPlatform, $state, $window) {
  // bootstrap3 theme. Can be also 'bs2', 'default'
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    // if (window.cordova && window.cordova.plugins.Keyboard) {
    //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    // }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }




    /* resume session */

    // if($window.localStorage.getItem('currentUser')===null){
    //   $window.localStorage.setItem('currentUser','');
    // }

    // if($window.localStorage.getItem('currentUser') !== ''){
    //   var user = $window.localStorage.getItem('currentUser');
    //   loggedinuser.setLoginUser(user);
    //   $state.go('tabs.vitals');
    // }


  });
}]);

//app run over
//app config start                  
app.config(function ($stateProvider, $urlRouterProvider) {



  $stateProvider
    .state('mapview', {
      url: "/mapview",
      cache: false,
      templateUrl: "app/maps/maps.html",
      controller: 'MapsController'
    })

    .state('home', {
      url: "/home",
      cache: false,
      templateUrl: "app/home/home.html",
      controller: 'HomeController'
    })
    .state('awards', {
      url: "/awards",
      cache: false,
      templateUrl: "app/awards/awards.html",
      controller: 'AwardsController'
    })
    .state('guest', {
      url: "/guest",
      cache: false,
      templateUrl: "app/guest/guest.html",
      controller: 'guestController'
    })
    .state('chatbox', {
      url: "/chatbox",
      cache: false,
      templateUrl: "app/chatbox/chatbox.html",
      controller: 'ChatboxController'
    })
    .state('news', {
      url: "/news",
      cache: false,
      templateUrl: "app/image-gallery/gallery.html",
      controller: 'GalleryController as galCtrl'
    })
     .state("galleryzoom",{
      url: '/galleryzoom',
      templateUrl : "app/gallery-zoom/galleryzoom.html",
      controller : 'GalleryzoomController as galzCtrl',
      params:{index:null}
  }).state("awarddetails",{
      url: '/awarddetails',
      templateUrl : "app/awarddetails/awarddetails.html",
      controller : 'AwarddetailsController',
      params:{name:null}
  })
     ;


  $urlRouterProvider.otherwise('/home');


});





