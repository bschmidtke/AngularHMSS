function initialize($rootScope, $location, AgentService)
{
    // register listener to watch route changes
    $rootScope.$on("$routeChangeStart", function(event, next, current)
    {
        if (AgentService.getUser() == null)
        {
            // no logged user, we should be going to #login
            if (next.templateUrl == "fragments/forms/login.html")
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
    $routeProvider.when('/login', { templateUrl: 'fragments/forms/login.html' })
                  .when('/main', { templateUrl: 'fragments/views/main.html' })
                  .when('/intel', { templateUrl: 'fragments/views/intel.html' })
                  .when('/labs', { templateUrl: 'fragments/views/labs.html' })
                  .when('/targets', { templateUrl: 'fragments/views/targets.html' })
                  .when('/targetDetail/:targetId', { templateUrl: 'fragments/views/targetDetails.html' })
                  .when('/tasks', { templateUrl: 'fragments/views/tasks.html' })
                  .otherwise({ redirectTo: '/login' });
    
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
};

var hmssModule = angular.module('hmssModule', ["google-maps"]);
hmssModule.config(config);
hmssModule.run( initialize );