define(['js/services/labs/LabsService'], function () {
    
    var hmssModule = angular.module('hmssModule');
    hmssModule.controller('LabsController', function ($scope, $location, LabsService)
    {
        $scope.gadgetData = LabsService.getGadgets();

        $scope.checkForData = function() {
            if ($scope.gadgetData == null || $scope.gadgetData.length <= 0) {
                LabsService.loadGadgets();
            }
        };

        $scope.$on("gadgetsChangedEvent", function (event, data) {
            $scope.gadgetData = data;
        });

        $scope.checkForData();
    });
});