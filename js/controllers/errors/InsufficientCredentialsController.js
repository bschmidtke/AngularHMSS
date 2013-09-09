
var hmssModule = angular.module('hmssModule');


hmssModule.config(function ($routeProvider, ROUTE_INSUFFICIENT_CREDENTIALS) {
    // Define the route to this controller
    $routeProvider.when(ROUTE_INSUFFICIENT_CREDENTIALS.uri, { templateUrl: 'views/errors/AccessDenied.html' });
});

hmssModule.controller('InsufficientCredentialsController', function ($scope, $location) {
    // placeholder
});