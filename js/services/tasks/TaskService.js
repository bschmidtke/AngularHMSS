var hmssModule = angular.module('hmssModule');
hmssModule.service('TaskService', function ($http, $rootScope) {

    // private variable
    var _tasks = [];

    function getTasks() {
        return _tasks;
    };
    
    function setTasks(val) {
        _tasks = val;
        $rootScope.$broadcast('tasksChangedEvent', _tasks);
    };

    function loadTasks() {
        var promise = $http({ method: 'GET', url: ('assets/data/tasks.txt') });
        promise.success( taskSuccessHandler );
        promise.error( taskErrorHandler );
        return promise;
    };
    
    function addTask(task) {
        _tasks.push(task);
        $rootScope.$broadcast('tasksChangedEvent', task);
    };
    
    function taskSuccessHandler  (data, status, headers, config) {
        setTasks(data);
    };

    function taskErrorHandler (data, status, headers, config) {
        // TODO: Future Error Handling
    }
    
    // Define Public Service API
    return {
        getTasks: getTasks,
        loadTasks: loadTasks,
        addTask: addTask
    };
});