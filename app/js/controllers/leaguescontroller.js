'use strict';

angular.module('registrationApp.controllers.leagues', ['registrationApp.services.leagues'])
  .controller('LeaguesController', ['$scope', '$routeParams', '$location', 'angularFire', 'Leagues',
    function($scope, $routeParams, $location, angularFire, Leagues) {
      $scope.league  = {};
      $scope.leagueId = $routeParams.leagueId;

      $scope.findLeagues = function(){
        $scope.leagues = Leagues.collection();
      }

      //check to see if we really need leagueId as parameter
      $scope.findOneLeage = function(leagueId){
        if(!!scope.leagueId){
          angularFire(Leagues.find($routeParams.leagueId), $scope, 'league');
        }
      }
      $scope.createLeague = function() {
        var leagueId = Leagues.create($scope.league, $scope.auth);
        $scope.league = null;
        $location.path('/leages/' + leagueId);
      }

      $scope.removeLeague = function(leagueId) {
        Leagues.removeLeague(leageId);
      }
    }])