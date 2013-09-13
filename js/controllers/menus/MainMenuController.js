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

        $scope.menuItems = null;
        
        $scope.$on( 'agentChangedEvent', function( event, data ) {
            if (data != null) {
                AgentService.loadMenu( data.role );
            } else {

            }
        } );

        $scope.$on( 'userMenuChangedEvent', function( event, data ) {
            $scope.menuItems = data;
        } );

        $scope.itemClicked = function( selectedItem ) {
            $location.path( selectedItem.route );
        };
    });
    
});