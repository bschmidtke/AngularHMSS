define(['js/services/targets/TargetsService'], function () {
    
    var hmssModule = angular.module('hmssModule');
    hmssModule.controller('TargetsController', function ($scope, $location, TargetsService) {

        var _targetData = null;

        $scope.getTargetData = function() {
            return _targetData;
        };

        $scope.setTargetData = function(val) {
            _targetData = val;

            $scope.buildTargetMarkers();
        };

        $scope.center = {
            latitude: 32.7502, // initial map center latitude
            longitude: 6.1916, // initial map center longitude
        };

        $scope.targetMarkers = []; // an array of markers,

        $scope.zoom = 2; // the zoom level

        $scope.mapTypeId = google.maps.MapTypeId.SATELLITE;

        $scope.buildTargetMarkers = function() {
            var updatedMarkers = [];
            for (var index in _targetData) {
                var target = _targetData[index];
                var marker = new Object();
                marker.title = target.name;
                marker.latitude = target.latitude;
                marker.longitude = target.longitude;
                updatedMarkers.push(marker);
            }

            $scope.targetMarkers = updatedMarkers;
        };

        $scope.targetRowClicked = function(target) {
            $location.path('/targetDetail/' + target.id);
        };
        
        $scope.$on('targetsChangedEvent', function (event, data) {
            $scope.setTargetData(data);
        });

        if ($scope.getTargetData() == null || $scope.getTargetData().length <= 0) {
            var targets = TargetsService.getTargets();
            if (targets == null || targets.length <= 0) {
                TargetsService.loadTargets();
            } else {
                $scope.setTargetData(targets);
            }
        }
    });
});