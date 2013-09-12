define(['js/services/labs/LabsService'], function () {
    
    var hmssModule = angular.module('hmssModule');
    //hmssModule.config(function ($routeProvider, ROUTE_LABS) {
    //    // Define the route to this controller
    //    $routeProvider.when(ROUTE_LABS.uri, { templateUrl: 'views/labs.html' });
    //})
    hmssModule.controller('LabsController', function ($scope, $location, LabsService) {
        $scope.gadgetData = LabsService.getGadgets();


        $scope.checkForData = function() {
            if ($scope.gadgetData == null || $scope.gadgetData.length <= 0) {
                var promise = LabsService.loadGadgets();
                promise.success($scope.gadgetSuccessHandler);
                promise.error($scope.gadgetErrorHandler);
            }
        };

        $scope.gadgetSuccessHandler = function(data, status, headers, config) {

            LabsService.setGadgets(data);

            $scope.gadgetData = LabsService.getGadgets();
        };

        $scope.gadgetErrorHandler = function(data, status, headers, config) {
            var error = 'error';
        };

        $scope.checkForData();

    }
    );
});