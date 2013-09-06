var hmssModule = angular.module('hmssModule');
hmssModule.controller('LocationInterceptor', function ($rootScope, $location, $log, AgentService) {

    // undocumented
    $rootScope.$on("$locationChangeStart", function(newUrl, oldUrl) {
        $log.log("location change start");
    });
    
    // undocumented
    $rootScope.$on("$locationChangeSuccess", function (newUrl, oldUrl) {
        $log.log("location change success");
    });

    /*
    // Broadcasted before a route change. At this point the route services starts resolving all of the dependencies 
    // needed for the route change to occurs. Typically this involves fetching the view template as well as any 
    // dependencies defined in resolve route property. Once all of the dependencies are resolved $routeChangeSuccess is fired.
    */
    $rootScope.$on("$routeChangeStart", function (next, current) {
        $log.log("route change start");
        if (AgentService.getUser() == null) {
            // no logged user, we should be going to #login
            if (next.templateUrl == "views/forms/login.html") {
                // already going to #login, no redirect needed
            } else {
                // not going to #login, we should redirect now
                $location.path("/login");
            }
        }
    });
    
    // Broadcasted if any of the resolve promises are rejected.
    $rootScope.$on("$routeChangeError", function (current, previous, rejection) {
        $log.log("route change error");
    });
    
    //Broadcasted after a route dependencies are resolved. ngView listens for the directive to instantiate the controller and render the view.
    $rootScope.$on("$routeChangeSuccess", function (angularEvent, current, previous) {
        $log.log("route change success");
    });
    
    // The reloadOnSearch property has been set to false, and we are reusing the same instance of the Controller.
    $rootScope.$on("$routeUpdate", function (newUrl, oldUrl) {
        $log.log("route update");
    });
})