var hmssModule = angular.module('hmssModule', ["google-maps"]);

define(['js/constants/Routes',
        'js/controllers/location/LocationInterceptor',
        'js/controllers/menus/MainMenuController',
        'js/controllers/header/HeaderController'], function ()
        {
    
            function registerRoutes($routeProvider, routeTable) {
        
            // ******************************************************** // 
            // Configuration for the application                        //
            // ******************************************************** // 

            var unknownResourceRoute =
            {
                path: routeTable.ROUTE_UNKNOWN_RESOURCE.uri,
                isPublic: true,
                templateUrl: 'views/errors/UnknownResource.html',
                dependencies: ['js/controllers/errors/UnknownResourceController']
            };
        
            var routeConfig =
            {
                // Set the default path to unknown resource
                defaultPath: unknownResourceRoute,
                routes: [
                    // Add the unknown resource path as an available route.
                    unknownResourceRoute,
                    // Insufficient Credentials
                    {
                        path: routeTable.ROUTE_INSUFFICIENT_CREDENTIALS.uri,
                        isPublic: true,
                        templateUrl: 'views/errors/AccessDenied.html',
                        dependencies: ['js/controllers/errors/InsufficientCredentialsController']
                    },
                    // Login
                    {
                        path: routeTable.ROUTE_LOGIN.uri,
                        isPublic: true,
                        templateUrl: 'views/forms/login.html',
                        dependencies: ['js/controllers/login/LoginController']
                    },
                    // Main
                    {
                        path: routeTable.ROUTE_MAIN.uri,
                        isPublic: true,
                        templateUrl: 'views/main.html',
                        dependencies: ['js/controllers/main/MainController']
                    },
                    // Labs
                    {
                        path: routeTable.ROUTE_LABS.uri,
                        isPublic: false,
                        templateUrl: 'views/labs.html',
                        dependencies: ['js/controllers/labs/LabsController']
                    },
                    // Intel
                    {
                        path: routeTable.ROUTE_INTEL.uri,
                        isPublic: false,
                        templateUrl: 'views/intel.html',
                        dependencies: ['js/controllers/intel/IntelController']
                    },
                    // Targets
                    {
                        path: routeTable.ROUTE_TARGETS.uri,
                        isPublic: false,
                        templateUrl: 'views/targets/targets.html',
                        dependencies: ['js/controllers/targets/TargetsController']
                    },
                    // Target Details
                    {
                        path: routeTable.ROUTE_TARGET_DETAIL.uri,
                        isPublic: false,
                        templateUrl: 'views/targets/targetDetails.html',
                        dependencies: ['js/controllers/targets/TargetDetailController']
                    },
                    ,
                    // Target Detail Location
                    {
                        path: routeTable.ROUTE_TARGET_LOCATION.uri,
                        isPublic: false,
                        templateUrl: 'views/targets/targetLocation.html',
                        dependencies: ['js/controllers/targets/TargetLocationController']
                    },
                    // Tasks
                    {
                        path: routeTable.ROUTE_TASKS.uri,
                        isPublic: false,
                        templateUrl: 'views/tasks.html',
                        dependencies: ['js/controllers/tasks/TasksController']
                    }
                ]
            };

            angular.forEach(routeConfig.routes, function (route)
            {
                var rDep = DependencyResolver(route.dependencies);
                $routeProvider.when(route.path, { path: route.path, templateUrl: route.templateUrl, isPublic: route.isPublic, resolve: rDep });
            });

            // Register the unknown resource view as the otherwise route.
            $routeProvider.otherwise({ redirectTo: routeConfig.defaultPath.path });
        };

        function config($routeProvider, $httpProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, ROUTES) {

            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        
            // Register routes
            registerRoutes($routeProvider, ROUTES);
        
            // Once the application has been bootstrapped replace the existing pre-bootstrap methods with the
            // registration methods. 
            hmssModule.controller = $controllerProvider.register;
            hmssModule.directive = $compileProvider.directive;
            hmssModule.filter = $filterProvider.register;
            hmssModule.factory = $provide.factory;
            hmssModule.service = $provide.service;
        }

        hmssModule.config(config);
});


