var hmssModule = angular.module('hmssModule');

// Register Route Constants
hmssModule.constant("ROUTE_LOGIN", { uri: "/login", isPublic: true });
hmssModule.constant("ROUTE_INSUFFICIENT_CREDENTIALS", { uri: "/accessDenied", isPublic: true });
hmssModule.constant("ROUTE_UNKNOWN_RESOURCE", { uri: "/unknownResource", isPublic: true });

hmssModule.constant("ROUTE_MAIN", { uri: "/main", isPublic: true });
hmssModule.constant("ROUTE_INTEL", { uri: "/intel", isPublic: false });
hmssModule.constant("ROUTE_LABS", { uri: "/labs", isPublic: false });
hmssModule.constant("ROUTE_TARGETS", { uri: "/targets", isPublic: false });
hmssModule.constant("ROUTE_TARGET_DETAIL", { uri: "/targetDetail/:targetId", isPublic: false });
hmssModule.constant("ROUTE_TASKS", { uri: "/tasks", isPublic: false });


hmssModule.service('HmssRouteService', function (ROUTE_LOGIN, ROUTE_MAIN, ROUTE_INTEL, ROUTE_LABS, ROUTE_TARGETS, ROUTE_TARGET_DETAIL, ROUTE_TASKS) {

    // construct a dictionary list of all the routes so we can loop over them during security checks.
    // find a better way to do this
    var _globalRouteList = [
                            ROUTE_LOGIN,
                            ROUTE_MAIN,
                            ROUTE_INTEL,
                            ROUTE_LABS,
                            ROUTE_TARGETS,
                            ROUTE_TARGET_DETAIL,
                            ROUTE_TASKS
    ];
    
    return {
        isPublic: function(path) {

            for (var key in _globalRouteList) {
                var route = _globalRouteList[key];
                if ( route.uri == path )
                    return route.isPublic;
            }
            
            // undefined
            return false;
        },
        hasAccess: function (path) {
            if (this.isPublic(path)) {
                return true;
            } else {
                // if we wanted to, we could iterate over the users loaded menu, if the server returned it, return true;
                return false;
            }
        }
    };
});