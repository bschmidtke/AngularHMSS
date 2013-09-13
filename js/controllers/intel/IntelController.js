define(['js/services/intel/IntelService'], function () {
    
    var hmssModule = angular.module('hmssModule');
    hmssModule.controller('IntelController', function ($scope, $location, IntelService) {

        $scope.intelData = IntelService.getIntel();

        $scope.checkForData = function () {
            if ($scope.intelData == null || $scope.intelData.length <= 0) {
                IntelService.loadIntel();
            }
        };

        $scope.$on("intelChangedEvent", function ( event, data ) {
            $scope.intelData = data;
        });

        $scope.checkForData();
    });
});
