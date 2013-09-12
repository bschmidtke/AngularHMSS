define(['js/constants/Routes',
        'js/services/user/AgentService',
        'js/services/route/RouteService'], function () {

    var hmssModule = angular.module('hmssModule');
    hmssModule.controller('LocationInterceptor', function ($rootScope, $location, $log, AgentService, RouteService, ROUTES) {

        // undocumented
        $rootScope.$on("$locationChangeStart", function(angularEvent, newUrl, oldUrl) {

            // the path we are going to.
            var path = $location.path();

            // location change is about to occur.
            $log.log("location change start: " + newUrl + " -- " + path);
        });

        // undocumented
        $rootScope.$on("$locationChangeSuccess", function(angularEvent, newUrl, oldUrl) {
            $log.log("location change success");
        });

        /*
        // Broadcasted before a route change. At this point the route services starts resolving all of the dependencies 
        // needed for the route change to occurs. Typically this involves fetching the view template as well as any 
        // dependencies defined in resolve route property. Once all of the dependencies are resolved $routeChangeSuccess is fired.
        */
        $rootScope.$on("$routeChangeStart", function(next, current) {
            $log.log("route change start");
            if (AgentService.getUser() == null) {
                // no logged user, we should be going to #login
                $log.log("Redirecting to login.");
                $location.path(ROUTES.ROUTE_LOGIN.uri);
            } else {

                // the path we are going to.
                var path = $location.path();

                var userAllowedAccess = RouteService.hasAccess(path);
                if (!userAllowedAccess) {
                    $log.log("User not allowed to access this area.");
                    // do not allow the user to continue.
                    // angularEvent.preventDefault();

                    // reroute to the insufficient credentials page
                    $location.path(ROUTES.ROUTE_INSUFFICIENT_CREDENTIALS.uri);
                }
            }
        });

        // Broadcasted if any of the resolve promises are rejected.
        $rootScope.$on("$routeChangeError", function(current, previous, rejection) {
            $log.log("route change error");
        });

        //Broadcasted after a route dependencies are resolved. ngView listens for the directive to instantiate the controller and render the view.
        $rootScope.$on("$routeChangeSuccess", function(angularEvent, current, previous) {
            $log.log("route change success");
        });

        // The reloadOnSearch property has been set to false, and we are reusing the same instance of the Controller.
        $rootScope.$on("$routeUpdate", function(newUrl, oldUrl) {
            $log.log("route update");
        });
    });
});