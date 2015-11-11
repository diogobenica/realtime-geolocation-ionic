angular.module('starter').controller('GeolocationCtrl', function($scope, $cordovaGeolocation, $interval, GeolocationService) {
  $scope.status = "Pegando localização";
  $interval(function() {
    $cordovaGeolocation.getCurrentPosition({
      timeout: 5000,
      enableHighAccuracy: false
    })
    .then(function(position) {
      $scope.latitude = position.coords.latitude;
      $scope.longitude = position.coords.longitude;

      $scope.status = "Gravando...";
      GeolocationService.post("123", $scope.latitude, $scope.longitude).success(function() {
        $scope.status = "Gravado com sucesso!";
      }).error(function() {
        $scope.status = "Deu merda :(";
      });
    }, function(err) {
    });
  }, 2000);

});
