angular.module('registrationApp.services.rooms', [])
  .factory('Rooms', function() {
    Rooms = [
      {name: "walnut", hamlet: 'upper'},
      {name: "lotus", hamlet: 'upper'}
    ];
    return Rooms;
  });