/**
 * Created with IntelliJ IDEA.
 * User: bschmidtke
 * Date: 8/19/13
 * Time: 4:03 PM
 * To change this template use File | Settings | File Templates.
 */
var hmssModule = angular.module('hmssModule');
hmssModule.service('AccessService', function ($http, $rootScope)
    {
        // private variable
        var _allowedRoutes = null;

        function getAllowedRoutes() {
            return _allowedRoutes;
        }
    
        function setAllowedRoutes(val) {
            _allowedRoutes = val;
            $rootScope.$broadcast('accessChangedEvent', _allowedRoutes);
        };
    
        function loadAccess(role) {
            var promise = $http({ method: 'GET', url: ('assets/data/access/MI6/' + role + '/' + role + '-access.txt') });
            promise.success(accessLoadedSuccess);
            promise.error(accessLoadErrorHandler);
            return promise;
        }

        function accessLoadedSuccess(data, status, headers, config) {
            setAllowedRoutes(data);
        };

        function accessLoadErrorHandler(data, status, headers, config) {
            // TODO: Future Error Handling
        };

        // Return Public Service API
        return {
            getAllowedRoutes: getAllowedRoutes,
            loadAccess: loadAccess
        };
    }
);