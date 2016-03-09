<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/v1', function () use ($app) {
    return $app->version();
});



$app->post('/auth/login', ['as'=>'authentication','uses'=>'AuthController@postAuth']);
$app->post('/auth/logout', ['as'=>'authentication','uses'=>'AuthController@postLogout']);
$app->post('/data',['as'=>'data','uses'=>'AuthController@postData']);


$app->post('/api/estados',['as'=>'api_estados','uses'=>'Api\EstadosController@index']);
$app->post('/api/estado/{idEstado}',['as'=>'api_estado','uses'=>'Api\EstadosController@getRegiones']);


/* Admin api */

$app->post('/api/region/change-status/',['as'=>'api_region_changeStatus','uses'=>'Api\EstadosController@changeStatusRegion']);