// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('myCtrl', function($scope, $ionicGesture) {
  $scope.count = 0;

  $scope.decrement = function() {
      $scope.count = $scope.count - 1;

      if($scope.count < 0)
      {
         $scope.count = 0;
      }

  };

  $scope.increment = function() {
      $scope.count = $scope.count + 1;
  };

  $scope.clear = function() {
      $scope.count = 0;
  };



  $scope.gesture = {
      used: ''
  };  
 
  $scope.onGesture = function(gesture) {
    
    $scope.gesture.used = gesture;
    $scope.count = $scope.count + 1;
   
  }
 
  var element = angular.element(document.querySelector('#content')); 
   
  $ionicGesture.on('tap', function(e){
    $scope.$apply(function(gesture) {
          $scope.gesture.used =  gesture;
    })    
  }, element);
 
});
