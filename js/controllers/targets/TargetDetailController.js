define(['js/services/targets/TargetsService'], function () {
    
    var hmssModule = angular.module('hmssModule');
    hmssModule.controller('TargetDetailController', function ($location, $scope, $routeParams, TargetsService) {
        
        $scope.target = TargetsService.getTarget($routeParams.targetId);

        $scope.goBack = function( event ) {
            $window.history.back();
        };

        $scope.viewLocation = function( event ) {
            $location.path('/targetDetail/' + $scope.target.id + "/loc");
        };
    });
    
});