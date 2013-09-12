define(['js/services/user/AgentService'], function() {

    var hmssModule = angular.module('hmssModule');
    hmssModule.controller('HeaderController', function ($scope, AgentService) {
        $scope.sessionMessage = function() {
            var usr = AgentService.getUser();
            return $scope.showUser(usr);
        };

        $scope.showUser = function(usr) {
            if (usr != null) {
                return ("Welcome: (" + usr.codeName + ") " + usr.lastName + ", " + usr.firstName);
            } else {
                return "Not Signed In.";
            }
        };
    });
});