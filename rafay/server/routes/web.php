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

$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->post('/login', 'MainController@login');

$router->get('/houses', 'MainController@houses');

$router->get('/services', 'MainController@services');
$router->post('/services', 'MainController@add_services');
$router->post('/add_paid_amount', 'MainController@add_paid_amount');
$router->post('/get_ledger', 'MainController@get_ledger');
$router->post('/service_request', 'MainController@service_request');




// $router->get('/get_user', 'MainController@getusers');
$router->post('/create_user', 'MainController@createusers');
$router->get('/get_user', 
                ['middleware' => 'auth', 
                'uses' =>  'MainController@getusers']);