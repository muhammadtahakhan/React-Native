<?php

namespace App\Http\Controllers;
use App\User;
use App\Service;
use App\PaidAmount;
use App\ServiceRequest;
use Illuminate\Http\Request;

class MainController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    //------------------- login
    public function login(Request $request){
       
       $allUsers = User::where('email','=', $request->input('email'))
            ->where('password', '=', $request->input('password'))
            ->first();
       $allUsers->api_token = rand(10000,99999);
       $allUsers->save();
       if($allUsers){
            $data['message']='successfully login';
            $data['status']=true;
            $data['api_token']=$allUsers->api_token;
            $data['user_type']=$allUsers->user_type;
            $data['users_id']=$allUsers->id;
            $data['address']=$allUsers->address;
            $data['data']='';
       }else{
            $data['message']='login failed.....';
            $data['status']=false;
            $data['data']='';
       }
      
       return response()->json($data);
    }

    // --------------------------------------------------
    public function getusers(){
        return "all users";
    }
    public function createusers(){
        return "all create users";
    }
    // --------------------------------------------------

public function houses(){
    $allhouses = User::where('user_type', '=', 'user')->get();
    
    return response()->json($allhouses);
}

public function services(){
    $allServices = Service::all();
    return response()->json($allServices); 
}

public function add_services(Request $request){
    
    $services = new Service();
    $services->service_name = $request->input('service_name');
    $services->service_price = $request->input('service_price');
   
    if($services->save()){
        $data['message']='successfully created service';
        $data['status']=true;
        $data['data']='';
   }else{
        $data['message']='service can not create ';
        $data['status']=false;
        $data['data']='';
   }
   return response()->json($data);
}



public function add_paid_amount(Request $request){
    
    $PaidAmount = new PaidAmount();
    $PaidAmount->users_id = $request->input('users_id');
    $PaidAmount->total_amount = $request->input('fullTotal');
   
    if($PaidAmount->save()){
        $data['message']='successfully Paid';
        $data['status']=true;
        $data['data']='';
   }else{
        $data['message']='can not create ';
        $data['status']=false;
        $data['data']='';
   }
   return response()->json($data);
}

public function get_ledger(Request $request){
    $users_id = $request->input('users_id');
    $ledger = PaidAmount::where('users_id', '=', $users_id)->get();
    return response()->json($ledger); 
}


public function service_request(Request $request){
    
    $services = new ServiceRequest();
    $services->users_id = $request->input('users_id');
    $services->request_content = $request->input('request_content');
   
    if($services->save()){
        $data['message']='successfully created service request';
        $data['status']=true;
        $data['data']='';
   }else{
        $data['message']='service request can not create ';
        $data['status']=false;
        $data['data']='';
   }
   return response()->json($data);
}


}
