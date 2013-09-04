function initialize($rootScope, $location, AgentService)
{
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
    }
    );
};

function config($routeProvider, $httpProvider) 
{
    $routeProvider.when('/login', { templateUrl: 'views/forms/login.html' })
                  .when('/main', { templateUrl: 'views/main.html' })
                  .when('/intel', { templateUrl: 'views/intel.html' })
                  .when('/labs', { templateUrl: 'views/labs.html' })
                  .when('/targets', { templateUrl: 'views/targets/targets.html' })
                  .when('/targetDetail/:targetId', { templateUrl: 'views/targets/targetDetails.html' })
                  .when('/tasks', { templateUrl: 'views/tasks.html' })
                  .otherwise({ redirectTo: '/login' });
    
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
};

var hmssModule = angular.module('hmssModule', ["google-maps"]);
hmssModule.config(config);
hmssModule.run( initialize );