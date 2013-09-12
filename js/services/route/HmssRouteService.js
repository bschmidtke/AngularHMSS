﻿define(['js/services/user/AccessService'], function () {

    var hmssModule = angular.module('hmssModule');
    
    hmssModule.service('HmssRouteService', function (AccessService, ROUTE_INSUFFICIENT_CREDENTIALS, ROUTE_UNKNOWN_RESOURCE, ROUTE_LOGIN, ROUTE_MAIN, ROUTE_INTEL, ROUTE_LABS, ROUTE_TARGETS, ROUTE_TARGET_DETAIL, ROUTE_TASKS) {
        
        // construct a dictionary list of all the routes so we can loop over them during security checks.
        // find a better way to do this
        var _globalRouteList = [
            ROUTE_LOGIN,
            ROUTE_INSUFFICIENT_CREDENTIALS,
            ROUTE_UNKNOWN_RESOURCE,
            ROUTE_MAIN,
            ROUTE_INTEL,
            ROUTE_LABS,
            ROUTE_TARGETS,
            ROUTE_TARGET_DETAIL,
            ROUTE_TASKS
        ];

        return {
            getURI: function(routeStr) {

                for (var key in _globalRouteList) {
                    if (routeStr == key)
                        return _globalRouteList[key];
                }

                return null;
            },
            getRoute: function(uri) {

                for (var key in _globalRouteList) {
                    var route = _globalRouteList[key];
                    if (route.uri == uri)
                        return route;
                }

                return null;
            },
            getRouteByKey: function(key) {
                return eval(key);
            },
            isPublic: function(path) {

                for (var key in _globalRouteList) {
                    var route = _globalRouteList[key];
                    if (route.uri == path)
                        return route.isPublic;
                }

                // undefined
                return false;
            },
            isAllowedAccess: function(path) {

                var accessList = AccessService.getAllowedRoutes();
                if (accessList && accessList.length > 0) {

                    var pathRoute = this.getRoute(path);

                    for (var item in accessList) {
                        var accessItem = accessList[item];
                        var allowedRoute = this.getRouteByKey(accessItem);
                        if (pathRoute === allowedRoute) {
                            return true;
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