/**
 * Created with IntelliJ IDEA.
 * User: bschmidtke
 * Date: 8/30/13
 * Time: 11:03 AM
 * To change this template use File | Settings | File Templates.
 */

var hmssModule = angular.module('hmssModule');
hmssModule.service('IntelService', function ($http, $rootScope) {
    // private variable
    var _intel = null;
    
    var path = "https://www.cia.gov/news-information/your-news/cia-newsroom/RSS.xml";
    // feeds were rejecting requests from localhost, so proxying it through yahoo to get around that. also gives
    // us the opportunity to convert from xml to json for easier parsing.
    var proxiedPath = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'" + encodeURI(path) + "'&format=json";

    function getIntel() {
        return _intel;
    }
    
    function setIntel( val ) {
        _intel = val;
        $rootScope.$broadcast('intelChangedEvent', _intel);
    }
    
    function loadIntel () {
        var promise = $http({ method: 'GET', url: (proxiedPath) });
        promise.success( loadIntelSuccessHandler );
        promise.error( loadIntelErrorHandler );
        return promise;
    }

    function loadIntelSuccessHandler( data, status, headers, config ) {
        // some future error handling
        if (data != null) {
            setIntel( data.query.results.RDF.item );
        }
        else {
            setIntel( null );
        }
    }

    function loadIntelErrorHandler(data, status, headers, config) {
        // some future error handling
    }

    // Public Service API
    return {
        getIntel: getIntel,
        loadIntel: loadIntel
    };
    
} );