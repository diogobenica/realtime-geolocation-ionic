angular.module('starter').controller('GeolocationCtrl', function($scope, $cordovaGeolocation, $interval) {

  $interval(function() {
    $cordovaGeolocation.getCurrentPosition({
      timeout: 5000,
      enableHighAccuracy: false
    })
    .then(function(position) {
      $scope.latitude = position.coords.latitude;
      $scope.longitude = position.coords.longitude;
    }, function(err) {
    });
  }, 2000);

});
