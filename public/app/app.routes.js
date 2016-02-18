
app.config( ['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/login', {
                templateUrl :   'app/views/login/index.html',
                controller  :   'loginController',
                access      :   {   requiredAuthentication  :   false }
            })
            .when('/signup', {
                templateUrl :   'app/views/signup/index.html',
                controller  :   'loginController',
                access      :   {   requiredAuthentication  :   false }
            })
            .when('/logout', {
                templateUrl :   'app/views/login/logout.html',
                controller  :   'loginController',
                access      :   {   requiredAuthentication  :   false }
            })
            .when('/', {
                templateUrl :   'app/views/admin/index.html',
                controller  :   'adminController',
                access      :   {   requiredAuthentication  :   true }
            });
    }
]);


app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
});

app.run(function($rootScope, $location, $window, AuthenticationService) {
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        //redirecciona solo si isAuthenticated es falso  o   si no hay token
        if (nextRoute != null && nextRoute.access != null && nextRoute.access.requiredAuthentication
            && !AuthenticationService.isAuthenticated && !$window.sessionStorage.token) {
            $location.path("/login");
        }
    });
});