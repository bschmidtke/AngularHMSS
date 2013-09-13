var hmssModule = angular.module('hmssModule');
hmssModule.service('TargetsService', function ($http, $rootScope) {

    // private variable
    var _targets = null;
    
    function getTargets () {
        return _targets;
    }

    function setTargets (val) {
        _targets = val;
        $rootScope.$broadcast('targetsChangedEvent', _targets);
    }
    
    function getTarget (id)
    {
        for (var index in _targets)
        {
            var target = _targets[index];
            if (target.id == id)
            {
                return target;
            }
        }

        return null;
    }

    function loadTargets () {
        var promise = $http({ method: 'GET', url: ('assets/data/targets.txt') });
        promise.success(targetsSuccessHandler);
        promise.error(targetsErrorHandler);
        return promise;
    }
    
    function targetsSuccessHandler (data, status, headers, config) {
        setTargets(data);
    };

    function targetsErrorHandler (data, status, headers, config) {
        // TODO: Future Error Handling
    };
    
    // Define Public Service API
    return {
        getTargets: getTargets,
        getTarget: getTarget,
        loadTargets: loadTargets
    };

});