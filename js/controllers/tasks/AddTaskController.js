var hmssModule = angular.module('hmssModule');
hmssModule.controller('AddTaskController', function($scope)
{

    $scope.showAddTaskForm = false;

    $scope.$on('cancelCreateTaskEvent', function(event, next, current)
    {
        $scope.showAddTaskForm = false;
    });

    $scope.enableTaskForm = function()
    {
        $scope.showAddTaskForm = !($scope.showAddTaskForm);
    };

});