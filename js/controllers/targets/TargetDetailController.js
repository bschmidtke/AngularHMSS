
var hmssModule = angular.module('hmssModule');
hmssModule.config(function ($routeProvider, ROUTE_TARGET_DETAIL) {
    // Define the route to this controller
    $routeProvider.when(ROUTE_TARGET_DETAIL.uri, { templateUrl: 'views/targets/targetDetails.html' });
})
.controller('TargetDetailController', function ($scope, $routeParams, TargetsService)
{
    $scope.target = TargetsService.getTarget($routeParams.targetId);
});