
    appLoginModule.controller('loginController',['$scope','UserService', 'AuthenticationService','$window','$location',function($scope,UserService, AuthenticationService,$window,$location){




        $scope.login = function(email, password) {
            if (email != null && password != null) {
                UserService.logIn(email, password)
                    .success(function(data) {
                    AuthenticationService.isAuthenticated = true;
                    $window.sessionStorage.token = data.token;
                    $location.path("/");
                }).error(function(data,status) {
                   $scope.login.password='';
                   $scope.showError =   'El email y/o password es incorrecto';
                });
            }
        }

        $scope.logout = function logOut() {
            if (AuthenticationService.isAuthenticated) {
                UserService.logOut().success(function(data) {
                    AuthenticationService.isAuthenticated = false;
                    delete $window.sessionStorage.token;
                    $location.path("/login");
                }).error(function(data, status) {
                    AuthenticationService.isAuthenticated = false;
                    delete $window.sessionStorage.token;
                    $location.path("/login");
                });
            }
            else {
                $location.path("/login");
            }
        }

        $scope.register = function register(username, password, passwordConfirm) {
            if (AuthenticationService.isAuthenticated) {
                $location.path("/");
            }
            else {
                UserService.register(username, password, passwordConfirm).success(function(data) {
                    $location.path("/login");
                }).error(function(data, status) {
                    console.log(status);
                    console.log(data);
                });
            }
        }


  }]);




    /**
     Checkbox on "I agree" modal Clicked!
     **/
    jQuery("#terms-agree").click(function(){
        jQuery('#termsModal').modal('toggle');

        // Check Terms and Conditions checkbox if not already checked!
        if(!jQuery("#checked-agree").checked) {
            jQuery("input.checked-agree").prop('checked', true);
        }

    });
