/**
 * Created with IntelliJ IDEA.
 * User: bschmidtke
 * Date: 8/19/13
 * Time: 4:03 PM
 * To change this template use File | Settings | File Templates.
 */
var hmssModule = angular.module('hmssModule');
hmssModule.factory('AccessService', function ($http, $rootScope)
    {
        // private variable
        var _allowedRoutes = null;

        return {
            getAllowedRoutes: function () {
                return _allowedRoutes;
            },
            loadAccess: function (role) {
                var promise = $http({ method: 'GET', url: ('assets/data/access/MI6/' + role + '/' + role + '-access.txt') });
                promise.success(accessLoadedSuccess);
                promise.error(accessLoadErrorHandler);
                return promise;
            }
        };
    
        function setAllowedRoutes(val) {
            _allowedRoutes = val;
            $rootScope.$broadcast('accessChangedEvent');
        };

        function accessLoadedSuccess(data, status, headers, config) {
            setAllowedRoutes(data);
        };

        function accessLoadErrorHandler(data, status, headers, config) {
            
        };
    }
);

/*
angular.module('hmssModule').factory('Agent', function($resource){
        return $resource('assets/data/login/MI6/:agentId.txt',
            {},
            {
                query: {method:'GET',
                        params:{agentId:'007'},
                        isArray:false}
            }
        );
    });
*/