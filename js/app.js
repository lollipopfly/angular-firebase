var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/auth.html'
  })
  .when('/register', {
    templateUrl: 'templates/register.html',
    // controller: 'registerCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode({
    enabled: true,
      requireBase: false
  });

  });