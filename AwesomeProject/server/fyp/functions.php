<?php
use Firebase\JWT\JWT;
function validate_token($request, $response) {
     try{
         // Do something
//         $charset = $app->request->headers->get('authorization');
             $jwt =  $_SERVER["HTTP_AUTHORIZATION"];
       $decoded = JWT::decode($jwt, 'supersecretkeyyoushouldnotcommittogithub', array('HS256'));
     
       $decoded_array = (array) $decoded;

      $now = new DateTime();

       $hourdiff = round(($decoded_array['exp'] - $now->getTimeStamp())/3600, 1);
//        $response = $next($request,$response);
   if($hourdiff > 0){ 
//       $response = $next($request, $response);
//       return $response;
//       echo "hello";
       return TRUE;
       
   }else{
//       return FALSE;
      return $response->withJson(array('status' => '0', 'description'=>'expired'),406);
   }

 }
   catch(\Exception $ex){
        return FALSE;
//      return $response->withJson(array('status' => '0', 'description'=>'invalid token'),401);
//       return $ex->getMessage();
   }
};

function isValidUser($user, $pass, $con) {
    
      try{
      
       $con;
//       $sql = "SELECT * FROM users WHERE username = :username AND password = :password";
        $sql = "SELECT * FROM users WHERE username = :username";
       $pre  = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
       $values = array(
       ':username' => $user     
           );
//        password_verify( string $password , string $hash );
       $pre->execute($values);
       $result = $pre->fetch();
//       print_r($result['password']);
    return   $verify=password_verify($pass,$result['password']);
       if($verify){
           return true;
       }else{
           return false;
       }
      
   }
   catch(\Exception $ex){
       return $response->withJson(array('error' => $ex->getMessage()),422);
   }
    };
    
    function isTeacher($user, $pass, $con) {
    
      try{
      
       $con;

        $sql = "SELECT count(id) numr FROM users WHERE username = :username and teacher_flag='1'";
       $pre  = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
       $values = array(
       ':username' => $user     
           );
//        password_verify( string $password , string $hash );
       $pre->execute($values);
       $result = $pre->fetch();
//       print_r($result['password']);
//    return   $verify=password_verify($pass,$result['password']);
       if($result['numr']){
           return true;
       }else{
           return false;
       }
      
   }
   catch(\Exception $ex){
       return $response->withJson(array('error' => $ex->getMessage()),422);
   }
    };
 