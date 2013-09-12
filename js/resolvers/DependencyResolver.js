function DependencyResolver(dependencies) {
    
    var definition =
    {
        resolver: ['$q', '$log', '$rootScope', function($q, $log, $rootScope) {
            var deferred = $q.defer();
            
            require(dependencies, function() {
                $rootScope.$apply(function() {
                    deferred.resolve();
                });
            });

            return deferred.promise;
        }]
    };

    return definition;
}