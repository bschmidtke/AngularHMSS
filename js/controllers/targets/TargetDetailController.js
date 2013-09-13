define(['js/services/targets/TargetsService'], function () {
    
    var hmssModule = angular.module('hmssModule');
    hmssModule.controller('TargetDetailController', function ($window, $scope, $routeParams, TargetsService) {
        
        $scope.target = TargetsService.getTarget($routeParams.targetId);
        
        $scope.goBack = function( event ) {
            $window.history.back();
        }
    });
    
});