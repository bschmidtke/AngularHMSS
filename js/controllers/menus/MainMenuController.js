/**
 * Created with IntelliJ IDEA.
 * User: bschmidtke
 * Date: 8/20/13
 * Time: 12:29 PM
 * To change this template use File | Settings | File Templates.
 */
var hmssModule = angular.module('hmssModule');
hmssModule.controller('MainMenuController', function ($scope, $location, AgentService)
{

    $scope.menuItems = [];

    $scope.sessionCheck = function()
    {
        var usr = AgentService.getUser();
        return !(usr == null);
    },
    $scope.$on('agentChangedEvent', function(event, next, current)
    {
        var menu = AgentService.getMenu();
        if (menu == null)
        {
            var usr = AgentService.getUser();
            AgentService.loadMenu(usr.role);
        } else
        {
            $scope.configMenuItems();
        }
    }),
    $scope.$on('agentMenuChanged', function(event, next, current)
    {
        $scope.configMenuItems();
    }),
    
    $scope.configMenuItems = function()
    {
        $scope.menuItems = AgentService.getMenu();
    };

    $scope.itemClicked = function ( selectedItem )
    {
        $location.path( selectedItem.route );
    };

})