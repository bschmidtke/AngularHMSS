var hmssModule = angular.module('hmssModule');
hmssModule.service('LabsService', function ($http, $rootScope)
{
    
    // private variable
    var _gadgets = null;
    
    function getGadgets () {
        return _gadgets;
    }

    function setGadgets (val) {
        _gadgets = val;
        $rootScope.$broadcast('gadgetsChangedEvent', _gadgets);
    }
    
    function loadGadgets () {
        var promise = $http({ method: 'GET', url: ('assets/data/gadgets.txt') });
        promise.success(gadgetSuccessHandler);
        promise.error(gadgetErrorHandler);
            
    }
    
    function gadgetSuccessHandler (data, status, headers, config) {
        setGadgets(data);
    };

    function gadgetErrorHandler (data, status, headers, config) {
        // TODO: future error handling
    }

    return {
        getGadgets: getGadgets,
        loadGadgets: loadGadgets
    };

});