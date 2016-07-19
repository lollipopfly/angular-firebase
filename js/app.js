var app = angular.module('app', ['ngRoute', 'ngCookies', 'firebase']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/auth.html',
    controller: 'AuthCtrl'
  })
  .when('/success', {
    templateUrl: 'templates/success.html'
  })
  .when('/register', {
    templateUrl: 'templates/register.html',
    controller: 'RegisterCtrl'
  })
  .when('/auth', {
    templateUrl: 'templates/auth.html',
    controller: 'AuthCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
