function initialize($rootScope, $location, AgentService, HMSSRouteFactory)
{
    HMSSRouteFactory.initPublicRoutes();
    // register listener to watch route changes
    $rootScope.$on("$routeChangeStart", function(event, next, current)
    {
        if (AgentService.getUser() == null)
        {
            // no logged user, we should be going to #login
            if (next.templateUrl == "views/forms/login.html")
            {
                // already going to #login, no redirect needed
            } else
            {
                // not going to #login, we should redirect now
                $location.path("/login");
            }
        }
    }),
    $rootScope.$on("agentMenuChanged", function (event, next, current) {
        // temp, menu data has loaded, redirect to home page
        $location.path("/main");
    });
};

function configHttp( $httpProvider )
{
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
};

function configRoutes($routeProvider)
{
    // exposing the route provider...
    hmssModule._routeProvider = $routeProvider;
    
    /*
    $routeProvider.when('/login', { templateUrl: 'views/forms/login.html' })
                  .when('/main', { templateUrl: 'views/main.html' })
                  .when('/intel', { templateUrl: 'views/intel.html' })
                  .when('/labs', { templateUrl: 'views/labs.html' })
                  .when('/targets', { templateUrl: 'views/targets/targets.html' })
                  .when('/targetDetail/:targetId', { templateUrl: 'views/targets/targetDetails.html' })
                  .when('/tasks', { templateUrl: 'views/tasks.html' })
                  .otherwise({ redirectTo: '/login' });*/

};

var hmssModule = angular.module('hmssModule', ["google-maps"]);
hmssModule.config( configHttp );
hmssModule.config( configRoutes );
hmssModule.run( initialize );