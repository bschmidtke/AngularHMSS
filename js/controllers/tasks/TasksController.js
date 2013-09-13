define(['js/services/tasks/TaskService',
        'js/services/user/AgentService'], function () {
    
    var hmssModule = angular.module('hmssModule');
    hmssModule.controller('TasksController', function ($scope, $location, AgentService, TaskService) {

        $scope.agent = AgentService.currentUser();
        $scope.taskData = TaskService.getTasks();

        $scope.getImageForPriority = function(priority) {
            var result;

            switch (priority) {
            case "high":
                result = "assets/images/tasks/priority/priority_high.png";
                break;
            case "medium":
                result = "assets/images/tasks/priority/priority_medium.png";
                break;
            case "low":
                result = "assets/images/tasks/priority/priority_low.png";
                break;
            }

            return result;
        };

        $scope.checkForData = function() {
            if ($scope.taskData == null || $scope.taskData.length <= 0) {
                TaskService.loadTasks();
            }
        };

        $scope.$on( 'tasksChangedEvent', function( event, data ) {
            $scope.taskData = data;
        } );

        $scope.checkForData();
    });
    
});