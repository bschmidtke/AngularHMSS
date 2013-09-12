var hmssModule = angular.module('hmssModule', ["google-maps"]);

define(['js/constants/RouteConstants',
        'js/controllers/location/LocationInterceptor',
        'js/controllers/menus/MainMenuController',
        'js/controllers/header/HeaderController'], function () {
    
    function registerRoutes($routeProvider, ROUTE_MAIN, ROUTE_LABS, ROUTE_UNKNOWN_RESOURCE, ROUTE_LOGIN) {
        
        // ******************************************************** // 
        // Configuration for the application                        //
        // ******************************************************** // 
        var unknownResourceRoute = {
            path: ROUTE_UNKNOWN_RESOURCE.uri,
            templateUrl: 'views/errors/UnknownResource.html',
            dependencies: ['js/controllers/errors/UnknownResourceController']
        };

        var routeConfig =
        {
            defaultPath: unknownResourceRoute,
            routes: [
                // Add the default path
                unknownResourceRoute,
                // Login
                {
                    path: ROUTE_LOGIN.uri,
                    templateUrl: 'views/forms/login.html',
                    dependencies: ['js/controllers/login/LoginController']
                },
                // Main
                {
                    path: ROUTE_MAIN.uri,
                    templateUrl: 'views/main.html',
                    dependencies: ['js/controllers/main/MainController']
                },
                // Labs
                {
                    path: ROUTE_LABS.uri,
                    templateUrl: 'views/labs.html',
                    dependencies: ['js/controllers/labs/LabsController']
                }]
        };

        //$routeProvider.when(ROUTE_INSUFFICIENT_CREDENTIALS.uri, { templateUrl: 'views/errors/AccessDenied.html' });
        //$routeProvider.when(ROUTE_INTEL.uri, { templateUrl: 'views/intel.html' });
        //$routeProvider.when(ROUTE_TARGET_DETAIL.uri, { templateUrl: 'views/targets/targetDetails.html' });
        //$routeProvider.when(ROUTE_TARGETS.uri, { templateUrl: 'views/targets/targets.html' });
        //$routeProvider.when(ROUTE_TASKS.uri, { templateUrl: 'views/tasks.html' });

        angular.forEach(routeConfig.routes, function (route) {
            var uri = route.path;
            var tUrl = route.templateUrl;
            var rDep = DependencyResolver(route.dependencies);

            $routeProvider.when(uri, { templateUrl: tUrl, resolve: rDep });
        });

        // Register the unknown resource view as the otherwise route.
        $routeProvider.otherwise({ redirectTo: routeConfig.defaultPath.path });
    };

    function config($routeProvider, $httpProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, ROUTE_MAIN, ROUTE_LABS, ROUTE_UNKNOWN_RESOURCE, ROUTE_LOGIN) {

        console.log('hmssModule.preConfig');
        
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        
        /*
        hmssModule._registerController = $controllerProvider.register;
        hmssModule._registerDirective = $compileProvider.directive;
        hmssModule._registerFilter = $filterProvider.register;
        hmssModule._registerFactory = $provide.factory;
        hmssModule._registerService = $provide.service;    
        */

        registerRoutes($routeProvider, ROUTE_MAIN, ROUTE_LABS, ROUTE_UNKNOWN_RESOURCE, ROUTE_LOGIN);
        
        hmssModule.controller = $controllerProvider.register;
        hmssModule.directive = $compileProvider.directive;
        hmssModule.filter = $filterProvider.register;
        hmssModule.factory = $provide.factory;
        hmssModule.service = $provide.service;

    }


    hmssModule.config(config);
});


