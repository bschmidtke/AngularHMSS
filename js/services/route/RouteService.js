define(['js/services/user/AccessService', 'js/constants/Routes'], function () {

    var hmssModule = angular.module('hmssModule');
    
    hmssModule.service('RouteService', function ($route, AccessService, ROUTES)
    {

        return {
            getRoute: function (path) {

                var results = null;
                
                angular.forEach($route.routes, function (route) {
                    if (route.path == path) {
                        results = route;
                        return;
                    }
                });
                
                return results;
            },
            getRouteByKey: function (key) {
                
                var routeConst = ROUTES[key];
                return this.getRoute(routeConst.uri);

            },
            isPublic: function(path) {

                // default
                var results = false;
                
                angular.forEach( $route.routes, function( route ) {
                    if (route.path == path) {
                        results = route.isPublic;
                        return;
                    }
                } );

                return results;
            },
            isAllowedAccess: function(path) {

                var accessList = AccessService.getAllowedRoutes();
                if (accessList && accessList.length > 0) {

                    var destinationRoute = this.getRoute(path);

                    for (var item in accessList) {
                        var accessItem = accessList[item];
                        if (accessItem != null) {
                            var accessRoute = this.getRouteByKey( accessItem );
                            if (destinationRoute === accessRoute) {
                                return true;
                            }
                        }
                    }
                }

                // undefined
                return false;
            },
            hasAccess: function(path) {
                if (this.isPublic(path)) {
                    return true;
                } else if (this.isAllowedAccess(path)) {
                    return true;
                } else {
                    // if we wanted to, we could iterate over the users loaded menu, if the server returned it, return true;
                    return false;
                }
            }
        };
    });
});