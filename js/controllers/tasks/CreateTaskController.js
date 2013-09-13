define(['js/services/tasks/TaskService'], function () {
    
    var hmssModule = angular.module('hmssModule');
    hmssModule.controller('CreateTaskController', function ($scope, TaskService) {

        $scope.newTask = null;

        $scope.save_clickHandler = function() {
            TaskService.addTask($scope.newTask);

            $scope.newTask = null;
        };

        $scope.cancel_clickHandler = function() {
            $scope.$emit("cancelCreateTaskEvent");
        };

    });
});