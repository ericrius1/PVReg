'use strict'

angular.module('registrationApp.controllers.registration', ['registrationApp.services.rooms'])
  .controller('RegistrationController', ['$scope', '$routeParams', 'Rooms',
    function($scope, $routeParams, Rooms){
      $scope.rooms = Rooms;
      $scope.sexModel = {
        female: true,
        male: false
      }
    }])