
define(['js/services/user/AgentService',
        'js/services/user/AccessService',
        'js/constants/Routes'], function () {
    
    var hmssModule = angular.module('hmssModule');
    //hmssModule.config(function ($routeProvider, ROUTE_LOGIN) {
    //    // Define the route to this controller
    //    //$routeProvider.when(ROUTE_LOGIN.uri, { templateUrl: 'views/forms/login.html' });
    //})
    hmssModule.controller('LoginController', function ($scope, $location, AgentService, AccessService, ROUTES) {

        $scope.attempts = 0;
        $scope.maximumAttempts = 3;
        $scope.isError = false;

        $scope.incorrectLoginMsg = "Codename / Passcode is Incorrect.";
        $scope.maximumAttemptsMsg = "Maximum login attempts exceeded.";
        $scope.accessError = "Unable to load security settings for your account.";
        $scope.currentErrorMsg = null;

        $scope.attemptLogin = function ($evt) {
            var un = $scope.newUser.userName;
            var pw = $scope.newUser.password;

            $scope.attempts++;

            // check number of attempts
            if (!$scope.loginPreflight()) {
                var msg = AgentService.login(un, pw);
                msg.success($scope.loginSuccessHandler);
                msg.error($scope.loginErrorHandler);
            }
        };

        $scope.loginPreflight = function () {
            if ($scope.attempts >= $scope.maximumAttempts) {
                $scope.toggleErrorMsg(true, $scope.maximumAttemptsMsg);
                return true;
            } else {
                return false;
            }
        };

        $scope.loginSuccessHandler = function (data, status, headers, config) {
            var agent = AgentService.currentUser();

            var accessPromise = AccessService.loadAccess(agent.role);
            accessPromise.success($scope.accessLoadSuccessHandler);
            accessPromise.error($scope.accessLoadErrorHandler);

        };

        $scope.loginErrorHandler = function (data, status, headers, config) {
            $scope.toggleErrorMsg(true, $scope.incorrectLoginMsg);
        };

        $scope.accessLoadSuccessHandler = function (data, status, headers, config) {
            $location.path(ROUTES.ROUTE_MAIN.uri);
        };

        $scope.accessLoadErrorHandler = function (data, status, headers, config) {
            $scope.toggleErrorMsg(true, $scope.accessError);
        };

        $scope.toggleErrorMsg = function (isError, reason) {
            $scope.isError = isError;
            $scope.currentErrorMsg = reason;
        };
    }
    );

});

