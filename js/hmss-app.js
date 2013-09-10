// TODO: Clean up? Or use later. Leaving here as a reminder about the mpdule.run( func ) method.
function initialize($rootScope, $location, AgentService) {
    // do stuff
};

function configRoutes($routeProvider, $httpProvider, ROUTE_UNKNOWN_RESOURCE) {
    
    // Register the unknown resource view as the otherwise route.
    $routeProvider.otherwise({ redirectTo: ROUTE_UNKNOWN_RESOURCE.uri });
    
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
};

var hmssModule = angular.module('hmssModule', ["google-maps"]);
hmssModule.config(configRoutes);
hmssModule.run( initialize );