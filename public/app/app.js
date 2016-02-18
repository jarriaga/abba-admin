/**
 * Created by jbarron on 2/4/16.
 */

    //Aplicacion principal
var app             =   angular.module('app',['ngRoute','appLoginModule','appAuthFactory','appAdminModule']);
    //Modulos del sistema
var appLoginModule  =   angular.module('appLoginModule',[]);
var appAdminModule   =   angular.module('appAdminModule',[]);
var appAuthFactory  =   angular.module('appAuthFactory',[]);


var options = {};
options.api = {};
options.api.base_url = "http://admin.abba.local";






