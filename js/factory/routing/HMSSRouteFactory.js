var hmssModule = angular.module('hmssModule');
hmssModule.factory('HMSSRouteFactory', function ($rootScope) {

    /*
    var _globalRouteList = [
        ["login", { route: "/login", templateUrl: 'views/forms/login.html', isPublic: true }],
        ["main", { route: "/main", templateUrl: 'views/main.html', isPublic: true }],
        ["intel", { route: "/intel", templateUrl: 'views/intel.html', isPublic: false }],
        ["labs", { route: "/labs", templateUrl: 'views/labs.html', isPublic: false }],
        ["targets", { route: "/targets", templateUrl: 'views/targets/targets.html', isPublic: false }],
        ["targetDetail", { route: "/targetDetail/:targetId", templateUrl: 'views/targets/targetDetails.html', isPublic: false }],
        ["tasks", { route: "/tasks", templateUrl: 'views/tasks.html', isPublic: false }]
    ];

    // private variable
    var _publicRoutes = null;
    var _roleRoutes = null;
    */
    var _routes = null;
    
    $rootScope.$on('agentMenuChanged', function (event, next, current) {
        addSomeMore();
    });

    function addSomeMore () {        
        hmssModule._routeProvider.when('/main', { templateUrl: 'views/main.html' })
        .when('/intel', { templateUrl: 'views/intel.html' })
        .when('/labs', { templateUrl: 'views/labs.html' })
        .when('/targets', { templateUrl: 'views/targets/targets.html' })
        .when('/targetDetail/:targetId', { templateUrl: 'views/targets/targetDetails.html' })
        .when('/tasks', { templateUrl: 'views/tasks.html' })
    };

    /*
    var reconstructRoutes = function () {
        var routeList = [];
        for (var route in _globalRouteList)
        {

        }
    };
    */
    
    return {
        getRoutes: function () {
            return _routes;
        },
        setRoutes: function (val) {
            _routes = val;

            $rootScope.$broadcast('routesChangedEvent');
        },
        initPublicRoutes: function () {
            hmssModule._routeProvider.when('/login', { templateUrl: 'views/forms/login.html' })
                  .otherwise({ redirectTo: '/login' });

        }
        };
    }
);