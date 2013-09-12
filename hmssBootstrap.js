require.config({
    findNestedDependencies: true
});

require(['hmssModule'], function ()
    {
        angular.bootstrap(document, ['hmssModule']);
    }
);