'use strict';

// Declare app level module which depends on filters, and services
angular.module('registrationApp.config', [])

app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
      .when('/',        { templateUrl: 'views/registration.html' })
      .when('/signin',  { templateUrl: 'views/users/signin.html' })
      .when('/signup',  { templateUrl: 'views/users/signup.html' })
      .when('/admin/rooms',  { templateUrl: 'views/admin/rooms/list.html', authRequired: true })
      .when('/admin/rooms/:roomId',  { templateUrl: 'views/admin/rooms/view.html', authRequired: true })
      .otherwise(       { redirectTo: '/' });
    },
  ])
  
  // establish authentication
  .run(['angularFireAuth', 'FBURL', '$rootScope', 
    function(angularFireAuth, FBURL, $rootScope) {
      angularFireAuth.initialize(new Firebase(FBURL), {scope: $rootScope, name: 'auth', path: '/signin'});
      $rootScope.FBURL = FBURL;
    }])

  // your Firebase URL goes here
  .constant('FBURL', 'https://pvretreats.firebaseio.com/')

app.config(['uiSelectConfig', function(uiSelectConfig){
  uiSelectConfig.theme = 'bootstrap';
}]);


