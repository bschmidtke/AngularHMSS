/**
 * Created with IntelliJ IDEA.
 * User: bschmidtke
 * Date: 8/19/13
 * Time: 4:03 PM
 * To change this template use File | Settings | File Templates.
 */
var hmssModule = angular.module('hmssModule');
hmssModule.factory('AgentService', function ($http, $rootScope)
    {
        // private variable
        var _user = null;

        return {
            getUser: function () {
                return _user;
            },
            login: function (agentId, password) {
                var promise = $http({ method: 'GET', url: ('assets/data/login/MI6/' + agentId + '/' + password + '.txt') });
                promise.success(loginSuccessHandler);
                promise.error(loginErrorHandler);
                return promise;
            },
            loadMenu: function (role) {
                return $http({ method: 'GET', url: ('assets/data/menu/' + role + '/' + role + '-menu.txt') });
            }
        };
    
        // Private Setter
        function setUser (val) {
            _user = val;
            $rootScope.$broadcast('agentChangedEvent');
        }

        function loginSuccessHandler (data, status, headers, config) {
            setUser(data);
        }

        function loginErrorHandler(data, status, headers, config) {
            
        }
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