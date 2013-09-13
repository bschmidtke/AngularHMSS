var hmssModule = angular.module('hmssModule');

// Register Route Constants
hmssModule.constant("ROUTES", {
        ROUTE_LOGIN: { uri: "/login" },
        ROUTE_INSUFFICIENT_CREDENTIALS: { uri: "/accessDenied" },
        ROUTE_UNKNOWN_RESOURCE: { uri: "/unknownResource" },
        ROUTE_MAIN: { uri: "/main" },
        ROUTE_INTEL: { uri: "/intel" },
        ROUTE_LABS: { uri: "/labs" },
        ROUTE_TARGETS: { uri: "/targets" },
        ROUTE_TARGET_DETAIL: { uri: "/targetDetail/:targetId" },
        ROUTE_TARGET_LOCATION: { uri: "/targetDetail/:targetId/loc/" },
        ROUTE_TASKS: { uri: "/tasks" }
    }
);
