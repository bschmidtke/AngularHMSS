/**
 * Created with IntelliJ IDEA.
 * User: bschmidtke
 * Date: 8/30/13
 * Time: 11:03 AM
 * To change this template use File | Settings | File Templates.
 */

var hmssModule = angular.module('hmssModule');
hmssModule.factory('IntelService', function ($http, $rootScope, $location) {
    // private variable
    var _intel = [];
    
    var path = "https://www.cia.gov/news-information/your-news/cia-newsroom/RSS.xml";
    // feeds were rejecting requests from localhost, so proxying it through yahoo to get around that. also gives
    // us the opportunity to convert from xml to json for easier parsing.
    var proxiedPath = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'" + encodeURI(path) + "'&format=json";

    return {
        getIntel: function () {
            return _intel;
        },
        setIntel: function (val) {
            _intel = val;

            $rootScope.$broadcast('intelChangedEvent');
        },
        
        loadIntel: function () {
            return $http({ method: 'GET', url: ( proxiedPath ) });
        }
    }
}
);