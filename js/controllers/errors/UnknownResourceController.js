var hmssModule = angular.module('hmssModule');


hmssModule.config(function ($routeProvider, ROUTE_UNKNOWN_RESOURCE) {
    // Define the route to this controller
    $routeProvider.when(ROUTE_UNKNOWN_RESOURCE.uri, { templateUrl: 'views/errors/UnknownResource.html' });
});

hmssModule.controller('UnknownResourceController', function ($scope, $location) {

});