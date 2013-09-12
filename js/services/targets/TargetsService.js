var hmssModule = angular.module('hmssModule');
hmssModule.service('TargetsService', function ($http, $rootScope) {

    // private variable
    var _targets = [];

    return {
        getTargets: function () {
            return _targets;
        },
        setTargets: function (val) {
            _targets = val;

            $rootScope.$broadcast('targetsChangedEvent');
        },
        getTarget: function (id)
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
        },
        loadTargets: function () {
            return $http({ method: 'GET', url: ('assets/data/targets.txt') });
        }
    }

});