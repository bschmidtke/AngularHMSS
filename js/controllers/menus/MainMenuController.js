/**
 * Created with IntelliJ IDEA.
 * User: bschmidtke
 * Date: 8/20/13
 * Time: 12:29 PM
 * To change this template use File | Settings | File Templates.
 */
define(['js/services/user/AgentService'], function () {
    
    var hmssModule = angular.module('hmssModule');
    hmssModule.controller('MainMenuController', function ($scope, $location, AgentService) {

        $scope.menuItems = [];

        $scope.sessionCheck = function() {
            var usr = AgentService.getUser();
            return !(usr == null);
        },
        $scope.$on('agentChangedEvent', function(event, next, current) {
            var usr = AgentService.getUser();
            if (usr != null) {
                var promise = AgentService.loadMenu(usr.role);
                promise.success($scope.menuLoadedSuccess);
                promise.error($scope.menuLoadErrorHandler);
            } else {

            }
        }),
        $scope.menuLoadedSuccess = function(data, status, headers, config) {
            $scope.menuItems = data;
        },
        $scope.menuLoadErrorHandler = function(data, status, headers, config) {

        },
        $scope.itemClicked = function(selectedItem) {
            $location.path(selectedItem.route);
        };
    });
    
});