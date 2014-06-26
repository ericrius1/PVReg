angular.module('registrationApp.services.rooms', [])
  .factory('Rooms', function() {
    Rooms = [
      {name: "walnut"},
      {name: "lotus"}
    ];
    return Rooms;
  });