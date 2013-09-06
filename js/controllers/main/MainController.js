var hmssModule = angular.module('hmssModule');
hmssModule.config(function ($routeProvider, ROUTE_MAIN) {
    // Define the route to this controller
    $routeProvider.when(ROUTE_MAIN.uri, { templateUrl: 'views/main.html' });
})
.controller('MainController', function ($scope, $location)
{

})