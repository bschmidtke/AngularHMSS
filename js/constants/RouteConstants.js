var hmssModule = angular.module('hmssModule');

// Register Route Constants
hmssModule.constant("ROUTE_LOGIN", { uri: "/login", isPublic: true });
hmssModule.constant("ROUTE_INSUFFICIENT_CREDENTIALS", { uri: "/accessDenied", isPublic: true });
hmssModule.constant("ROUTE_UNKNOWN_RESOURCE", { uri: "/unknownResource", isPublic: true });
hmssModule.constant("ROUTE_MAIN", { uri: "/main", isPublic: true });
hmssModule.constant("ROUTE_INTEL", { uri: "/intel", isPublic: false });
hmssModule.constant("ROUTE_LABS", { uri: "/labs", isPublic: false });
hmssModule.constant("ROUTE_TARGETS", { uri: "/targets", isPublic: false });
hmssModule.constant("ROUTE_TARGET_DETAIL", { uri: "/targetDetail/:targetId", isPublic: false });
hmssModule.constant("ROUTE_TASKS", { uri: "/tasks", isPublic: false });