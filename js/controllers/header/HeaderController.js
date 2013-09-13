define(['js/services/user/AgentService'], function() {

    var hmssModule = angular.module('hmssModule');
    hmssModule.controller('HeaderController', function ($scope) {

        $scope.usr = null;

        $scope.$on( 'agentChangedEvent', function( event, data ) {
            $scope.usr = data;
        } );
        
    });
});