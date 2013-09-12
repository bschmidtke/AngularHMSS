require.config({
    findNestedDependencies: true
});

require(['hmssModule'], function () {
        console.log( "Bootstrapping Application" );
        angular.bootstrap(document, ['hmssModule']);
    }
);