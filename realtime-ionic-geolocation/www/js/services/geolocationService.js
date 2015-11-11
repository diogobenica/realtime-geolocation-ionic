angular.module('starter').service('GeolocationService', function($http) {
  this.post = function(id, latitude, longitude) {
    return $http.post('http://localhost:9200/location/user', {
      "id": id,
      "location": {
        "lat": latitude,
        "lon": longitude
      }
    });
  };
});
