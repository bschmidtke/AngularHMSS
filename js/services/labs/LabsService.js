var hmssModule = angular.module('hmssModule');
hmssModule.service('LabsService', function ($http, $rootScope)
{
    
    // private variable
    var _gadgets = [];
    
    return {
        getGadgets: function () {
            return _gadgets;
        },
        setGadgets: function (val) {
            _gadgets = val;

            $rootScope.$broadcast('gadgetsChangedEvent');
        },
        loadGadgets: function () {
            return $http({ method: 'GET', url: ('assets/data/gadgets.txt') });
        }
    }
    
});