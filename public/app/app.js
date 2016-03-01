/**
 * Created by jbarron on 2/4/16.
 */

    //Application
var app             =   angular.module('app',['ngRoute','appLoginModule','appAuthFactory','moduleHome','moduleCatalogos']);
    //Factory and Login
var appLoginModule  =   angular.module('appLoginModule',[]);
var appAuthFactory  =   angular.module('appAuthFactory',[]);


//Modules
var moduleHome   =   angular.module('moduleHome',[]);
var moduleCatalogos =   angular.module('moduleCatalogos',[]);


app.controller('mainController',['$scope','AuthenticationService',function($scope,AuthenticationService){

    $scope.main = AuthenticationService;



}]);

var options = {};
options.api = {};
options.api.base_url = "";






