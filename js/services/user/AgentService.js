/**
 * Created with IntelliJ IDEA.
 * User: bschmidtke
 * Date: 8/19/13
 * Time: 4:03 PM
 * To change this template use File | Settings | File Templates.
 */
var hmssModule = angular.module('hmssModule');
hmssModule.service('AgentService', function ($http, $rootScope) {

    // private variable
    var _user = null;
    var _userMenu = null;

    //
    function getUser () {
        return _user;
    };
    
    function setUser (val) {
        _user = val;
        $rootScope.$broadcast('agentChangedEvent', _user);
    }
    
    //
    function getUserMenu() {
        return _userMenu;
    };

    function setUserMenu(val) {
        _userMenu = val;
        $rootScope.$broadcast('userMenuChangedEvent', _userMenu);
    }

    //
    function login (agentId, password) {
        var promise = $http({ method: 'GET', url: ('assets/data/login/MI6/' + agentId + '/' + password + '.txt') });
        promise.success(loginSuccessHandler);
        promise.error(loginErrorHandler);
        return promise;
    }

    //
    function loginSuccessHandler (data, status, headers, config) {
        setUser(data);
    }

    function loginErrorHandler(data, status, headers, config) {
        // do something?
    }
    
    //
    function loadMenu(role) {
        var promise = $http({ method: 'GET', url: ('assets/data/menu/' + role + '/' + role + '-menu.txt') });
        promise.success(loadMenuSuccessHandler);
        promise.error(loadMenuErrorHandler);
        return promise;
    }
    
    //
    function loadMenuSuccessHandler(data, status, headers, config) {
        setUserMenu(data);
    }

    function loadMenuErrorHandler(data, status, headers, config) {
        // do something?
    }
    
    // Return Agent Service Public API
    return {
        currentUser: getUser,
        userMenu: getUserMenu,
        login: login,
        loadMenu: loadMenu
    };
});