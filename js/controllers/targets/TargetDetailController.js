
var hmssModule = angular.module('hmssModule');
hmssModule.controller('TargetDetailController', function ($scope, $routeParams, TargetsService)
{

    $scope.target = TargetsService.getTarget($routeParams.targetId);
    

    
});