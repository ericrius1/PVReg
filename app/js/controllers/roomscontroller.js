'use strict'

angular.module('registrationApp.controllers.rooms', ['registrationApp.services.rooms'])
  .controller('RoomsController', ['$scope', '$routeParams', 'Rooms',
  	function($scope, $routeParams, Rooms){
  		$scope.rooms = Rooms;
  		$scope.room = Rooms[$routeParams['roomId']];
  	}]);