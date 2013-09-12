define(['js/services/targets/TargetsService'], function () {
    
    var hmssModule = angular.module('hmssModule');
    hmssModule.controller('TargetsController', function ($scope, $location, TargetsService) {

        var _targetData = TargetsService.getTargets();

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

        $scope.checkForData = function() {
            if ($scope.getTargetData() == null || $scope.getTargetData().length <= 0) {
                var promise = TargetsService.loadTargets();
                promise.success($scope.targetsSuccessHandler);
                promise.error($scope.targetsErrorHandler);
            }
        };

        $scope.targetsSuccessHandler = function(data, status, headers, config) {

            TargetsService.setTargets(data);

            $scope.setTargetData(TargetsService.getTargets());
        };

        $scope.targetsErrorHandler = function(data, status, headers, config) {
            var error = 'error';
        };

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

        $scope.checkForData();
    });
});