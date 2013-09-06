function initialize($rootScope, $location, AgentService) {
    // do stuff
    
};

function configRoutes($routeProvider, $httpProvider, ROUTE_UNKNOWN_RESOURCE) {
    
    // default view is the login view.
    $routeProvider.otherwise({ redirectTo: ROUTE_UNKNOWN_RESOURCE.uri });
    
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
};

var hmssModule = angular.module('hmssModule', ["google-maps"]);
hmssModule.config(configRoutes);
hmssModule.run( initialize );