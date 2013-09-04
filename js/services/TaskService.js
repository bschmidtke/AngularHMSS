var hmssModule = angular.module('hmssModule');
hmssModule.factory('TaskService', function ($http, $rootScope) {

    // private variable
    var _tasks = [];

    return {
        getTasks: function () {
            return _tasks;
        },
        setTasks: function (val) {
            _tasks = val;

            $rootScope.$broadcast('tasksChangedEvent');
        },
        loadTasks: function () {
            return $http({ method: 'GET', url: ('assets/data/tasks.txt') });
        }
    }

});