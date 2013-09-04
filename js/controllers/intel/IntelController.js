
var hmssModule = angular.module('hmssModule');
hmssModule.controller('IntelController', function($scope, $location, IntelService)
{

    $scope.intelData = IntelService.getIntel();

    $scope.checkForData = function()
    {
        if ($scope.intelData == null || $scope.intelData.length <= 0)
        {
            var promise = IntelService.loadIntel();
            promise.success($scope.intelSuccessHandler);
            promise.error($scope.intelErrorHandler);
        }
    };

    $scope.intelSuccessHandler = function(data, status, headers, config)
    {

        IntelService.setIntel(data.query.results.RDF.item);

        $scope.intelData = IntelService.getIntel();
    };

    $scope.intelErrorHandler = function(data, status, headers, config)
    {
        var error = 'error';
    };

    $scope.checkForData();

});
