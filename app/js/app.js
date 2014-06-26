'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('registrationApp',
  [ 'registrationApp.config'
  , 'registrationApp.controllers.header'
  , 'registrationApp.controllers.signin'
  , 'registrationApp.controllers.signup'
  , 'registrationApp.controllers.rooms'
  , 'firebase', 'ui.bootstrap', 'ngRoute']
  )
