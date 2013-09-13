define(['js/services/targets/TargetsService'], function () {

    var hmssModule = angular.module('hmssModule');
    hmssModule.controller('TargetLocationController', function ($window, $scope, $routeParams, TargetsService) {

        var _target = null;

        $scope.center = null;
        $scope.zoom = 1;
        $scope.mapTypeId = google.maps.MapTypeId.SATELLITE;
        $scope.markers = [];
        
        function configMap( target ) {
         
            $scope.center = {
                latitude: target.latitude, // initial map center latitude
                longitude: target.longitude, // initial map center longitude
            }
            
            if (target.latitude && target.longitude) {
                $scope.zoom = 16;
            } else {
                $scope.zoom = 1;
            }

            var marker = new Object();
            marker.title = target.name;
            marker.latitude = target.latitude;
            marker.longitude = target.longitude;
            $scope.markers.push(marker);
        }

        $scope.setTarget = function (val) {
            _target = val;
            
            if( val )
                configMap( _target );
        };
        
        $scope.goBack = function( event ) {
            $window.history.back();
        };
        
        $scope.setTarget ( TargetsService.getTarget($routeParams.targetId) );
    });

});