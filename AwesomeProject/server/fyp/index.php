<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Firebase\JWT\JWT;
use Slim\Middleware\TokenAuthentication;    
//https://www.programmableweb.com/news/how-to-create-rest-api-using-slim-framework/how-to/2017/02/28?page=2
require 'vendor/autoload.php';
include 'config.php';
require './functions.php';

$app = new \Slim\App(["settings" => $config]);

//function validate_token($request, $response, $args) {
//     try{
//         // Do something
////         $charset = $app->request->headers->get('authorization');
//             $jwt =  $_SERVER["HTTP_AUTHORIZATION"];
//       $decoded = JWT::decode($jwt, 'supersecretkeyyoushouldnotcommittogithub', array('HS256'));
//       $decoded_array = (array) $decoded;
//
//      $now = new DateTime();
//
//       $hourdiff = round(($decoded_array['exp'] - $now->getTimeStamp())/3600, 1);
//   if($hourdiff > 0){ echo "time not expired";}else{
//      return $response->withJson(array('status' => '0', 'description'=>'expired'),406);
//   }
//
// }
//   catch(\Exception $ex){
//      return $response->withJson(array('status' => '0', 'description'=>'invalid token'),401);
////       return $ex->getMessage();
//   }
//}


//$app->add(new TokenAuthentication([
//    'path' => '/users',
//    'authenticator' => $authenticator,
//    'secure' => false
//]));

//$app->add(new \Slim\Middleware\JwtAuthentication([
//    "path" => ["/"],
//    "passthrough" => ["/token"],
//    "secret" => "supersecretkeyyoushouldnotcommittogithub",
//     "algorithm" => ["HS256"]
//]));

//Handle Dependencies
$container = $app->getContainer();

$container['db'] = function ($c) {
   
   try{
       $db = $c['settings']['db'];
       $options  = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
       PDO::ATTR_DEFAULT_FETCH_MODE                      => PDO::FETCH_ASSOC,
       );
       $pdo = new PDO("mysql:host=" . $db['servername'] . ";dbname=" . $db['dbname'],
       $db['username'], $db['password'],$options);
       return $pdo;
   }
   catch(\Exception $ex){
       return $ex->getMessage();
   }
   
};


$app->post('/faqnotes', function ($request, $response) {
   
   try{
//        if(isValidUser($username, $password, $this->db)==FALSE){
       $con = $this->db;
       $sql = "INSERT INTO `faq_notes`(`category_id`, `name`, `content`) VALUES (:category_id, :name, :content)";
       $pre  = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
       $values = array(
        ':category_id' => $request->getParam('category_id'),
        ':name' => $request->getParam('name'),
        ':content' => $request->getParam('content')
        );
       $result = $pre->execute($values);
//        return $response->withJson(array('status' => '0', 'description'=>"user not found..."), 200);
//       return $response->withJson(array('status' => 'User Created'),200);
         return $response->withStatus(200)
        ->withHeader("Content-Type", "application/json")
        ->write(json_encode(array('status' => 'notes created Created'.$request->getParam('category_id').'<--'), JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
//        }else{
//             return $response->withJson(array('status' => '0', 'description'=>'user alrady been taken'),200);
//        }
   }
   catch(\Exception $ex){
       return $response->withJson(array('error' => $ex->getMessage()),422);
   }
   
});


$app->post('/categoty', function ($request, $response) {
   
   try{
//        if(isValidUser($username, $password, $this->db)==FALSE){
       $con = $this->db;
       $sql = "INSERT INTO `category`(`category_name`) VALUES (:caegory_name)";
       $pre  = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
       $values = array(
       ':caegory_name' => $request->getParam('category_name')
         );
       $result = $pre->execute($values);
//        return $response->withJson(array('status' => '0', 'description'=>"user not found..."), 200);
//       return $response->withJson(array('status' => 'User Created'),200);
         return $response->withStatus(200)
        ->withHeader("Content-Type", "application/json")
        ->write(json_encode(array('status' => 'Category Created'), JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
//        }else{
//             return $response->withJson(array('status' => '0', 'description'=>'user alrady been taken'),200);
//        }
   }
   catch(\Exception $ex){
       return $response->withJson(array('error' => $ex->getMessage()),422);
   }
   
});

$app->get('/categories', function ($request, $response) {
    
   try{
      
       $con = $this->db;
       $sql = "SELECT * FROM faq_notes";
       $result = null;
       foreach ($con->query($sql) as $row) {
           $result[] = $row;
       }
//      $tokenStatus = validate_token($request, $response);
       if($result){
           return $response->withJson(array('status' => 'true','result'=>$result),200);
       }else{
           return $response->withJson(array('status' => '0', 'description'=>'something is wrong'),422);
       }
              
   }
   catch(\Exception $ex){
       return $response->withJson(array('error' => $ex->getMessage()),422);
   }
   
});


$app->post("/token", function ($request, $response, $arguments) {
//    $request = Slim::getInstance()->request();
//	$wine = json_decode($request->getBody());
   
        $username = $request->getParam('username');
        $password = $request->getParam('password');
         
//        print_r($password.$username);
   if(isValidUser($username, $password, $this->db)){
    $now = new DateTime();
    $future = new DateTime("now +2 hours");
    $server = $request->getServerParams();

    $payload = [
        "iat" => $now->getTimeStamp(),
        "exp" => $future->getTimeStamp(),
        "name" => 'taha'
//        "sub" => $server["PHP_AUTH_USER"],
    ];
    $secret = "supersecretkeyyoushouldnotcommittogithub";
    $token = JWT::encode($payload, $secret, "HS256");
    $data["status"] = "ok";
    $data["token"] = $token;
    $data["teacher"] = '0';
  if(isTeacher($username, $password, $this->db)){
       $data["teacher"] = 1;
  }else{
    $data["teacher"] = 0;
  }
    return $response->withStatus(200)
        ->withHeader("Content-Type", "application/json")
        ->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
   }else{
        return $response->withJson(array('status' => '0', 'description'=>"user not found... $username /$password "),422);
   }
});

$app->post('/user', function ($request, $response) {
   
   try{
        if(isValidUser($username, $password, $this->db)==FALSE){
       $con = $this->db;
       $sql = "INSERT INTO `users`(`username`, `email`,`password`,`name`) VALUES (:username,:email,:password,:name)";
       $pre  = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
       $values = array(
       ':username' => $request->getParam('username'),
       ':email' => $request->getParam('email'),
       ':name' =>  $request->getParam('name'),   
//Using hash for password encryption
       'password' => password_hash($request->getParam('password'),PASSWORD_DEFAULT)
       );
       $result = $pre->execute($values);
//        return $response->withJson(array('status' => '0', 'description'=>"user not found..."), 200);
//       return $response->withJson(array('status' => 'User Created'),200);
         return $response->withStatus(200)
        ->withHeader("Content-Type", "application/json")
        ->write(json_encode(array('status' => 'User Created'), JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
        }else{
             return $response->withJson(array('status' => '0', 'description'=>'user alrady been taken'),200);
        }
   }
   catch(\Exception $ex){
       return $response->withJson(array('error' => $ex->getMessage()),422);
   }
   
});

$app->get('/user/{id}', function ($request,$response) {
   try{
       $id     = $request->getAttribute('id');
       $con = $this->db;
       $sql = "SELECT * FROM users WHERE id = :id";
       $pre  = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
       $values = array(
       ':id' => $id);
       $pre->execute($values);
       $result = $pre->fetch();
       if($result){
           return $response->withJson(array('status' => 'true','result'=> $result),200);
       }else{
           return $response->withJson(array('status' => 'User Not Found'),422);
       }
      
   }
   catch(\Exception $ex){
       return $response->withJson(array('error' => $ex->getMessage()),422);
   }
   
});

$app->get('/users', function ($request,$response) {
    
   try{
      
       $con = $this->db;
       $sql = "SELECT * FROM users";
       $result = null;
       foreach ($con->query($sql) as $row) {
           $result[] = $row;
       }
      $tokenStatus = validate_token($request, $response);
       if($result && $tokenStatus){
           return $response->withJson(array('status' => 'true','result'=>$result),200);
       }else{
           return $response->withJson(array('status' => '0', 'description'=>'something is wrong'),422);
       }
              
   }
   catch(\Exception $ex){
       return $response->withJson(array('error' => $ex->getMessage()),422);
   }
   
});

$app->put('/user/{id}', function ($request,$response) {
   try{
       $id     = $request->getAttribute('id');
       $con = $this->db;
       $sql = "UPDATE users SET name=:name,email=:email,password=:password WHERE id = :id";
       $pre  = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
       $values = array(
       ':name' => $request->getParam('name'),
       ':email' => $request->getParam('email'),
       ':password' => password_hash($request->getParam('password'),PASSWORD_DEFAULT),
       ':id' => $id
       );
       $result =  $pre->execute($values);
       if($result){
           return $response->withJson(array('status' => 'User Updated'),200);
       }else{
           return $response->withJson(array('status' => 'User Not Found'),422);
       }
              
   }
   catch(\Exception $ex){
       return $response->withJson(array('error' => $ex->getMessage()),422);
   }
   
});

$app->delete('/user/{id}', function ($request,$response) {
   try{
       $id     = $request->getAttribute('id');
       $con = $this->db;
       $sql = "DELETE FROM users WHERE id = :id";
       $pre  = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
       $values = array(
       ':id' => $id);
       $result = $pre->execute($values);
       if($result){
           return $response->withJson(array('status' => 'User Deleted'),200);
       }else{
           return $response->withJson(array('status' => 'User Not Found'),422);
       }
      
   }
   catch(\Exception $ex){
       return $response->withJson(array('error' => $ex->getMessage()),422);
   }
   
});



$app->get('/hello/{name}', function (Request $request, Response $response) {
    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello..., $name");

    return $response;
});

$app->get('/test', function (Request $request, Response $response) {
     $sql = "SELECT count(id) numr FROM users WHERE username = :username and teacher_flag='1'";
       $pre  = $this->db->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
       $values = array(
       ':username' => 'taha@yahoo.com'     
           );
//        password_verify( string $password , string $hash );
       $pre->execute($values);
       $result = $pre->fetch();
//       print_r($result['password']);
//    $name = $request->getAttribute('name');
    $response->getBody()->write(''.$result['numr']);

    return $response;
});

$app->get('/nots/{id}', function (Request $request, Response $response) {
     $id     = $request->getAttribute('id');
     $sql = "SELECT * from faq_notes WHERE `category_id` = :id";
       $pre  = $this->db->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
       $values = array(
       ':id' => $id     
           );
//        password_verify( string $password , string $hash );
       $pre->execute($values);
       $result = $pre->fetch();
//       print_r($result['password']);
//    $name = $request->getAttribute('name');
//    $response->getBody()->write(''.print_r($result));
       return $response->withJson($result,200);

    return $response;
});

$app->run();