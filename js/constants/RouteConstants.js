var hmssModule = angular.module('hmssModule');
hmssModule.constant("ROUTE_LOGIN", { uri: "/login", isPublic: "true" });
hmssModule.constant("ROUTE_MAIN", { uri: "/main", isPublic: "true" });
hmssModule.constant("ROUTE_INTEL", { uri: "/intel", isPublic: "false" });
hmssModule.constant("ROUTE_LABS", { uri: "/labs", isPublic: "false" });
hmssModule.constant("ROUTE_TARGETS", { uri: "/targets", isPublic: "false" });
hmssModule.constant("ROUTE_TARGET_DETAIL", { uri: "/targetDetail/:targetId", isPublic: "false" });
hmssModule.constant("ROUTE_TASKS", { uri: "/tasks", isPublic: "false" });
