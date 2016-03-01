<?php

namespace App\Http\Controllers;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Models\User;

class AuthController extends Controller
{

    private     $key    =   "aw3bo";

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Function to Authtenticate user
     * @param Request $request
     * @return string
     */
    public function postAuth(Request $request)
    {
        $params       =       $request->all();

        $validator  =   Validator::make($params,['email'=>'required','password'=>'required']);
        if($validator->fails()){
            return response()->json(['error'=>'Unauthorized'],Response::HTTP_UNAUTHORIZED);
        }

        $usuario    =   new User();
        $usuario =   $usuario->getCollection()->findOne(['email'=>$params['email']]);

        if($usuario &&  isset($usuario['password']) && Hash::check($params['password'], $usuario['password'])){
            $usuario['password']='';
            $jwt_token   = JWT::encode($usuario,$this->key);
            return response()->json(['token'=>$jwt_token],Response::HTTP_OK);
        }

        return response()->json(['error'=>'Unauthorized'],Response::HTTP_UNAUTHORIZED);
    }

    public function postLogout()
    {
        return  response('',200);
    }


    public function postData(Request $request)
    {
        $jwt    =   trim($this->getBearer());
        try{
            $decodeToken =  JWT::decode($jwt, $this->key, array('HS256'));
            return response()->json(['message'=>$decodeToken],Response::HTTP_OK);
        }catch(\Exception $e){
           echo  $e->getMessage();
           return   response("",Response::HTTP_UNAUTHORIZED);
        }
        return   response("",Response::HTTP_UNAUTHORIZED);
    }

    /**
     * function to get the Token from header authorization
     * @return mixed|string
     */
    private function getBearer()
    {
        $headers = apache_request_headers();
        foreach ($headers as $header => $value) {
            if($header=="Authorization"){
               return str_replace("Bearer","",$value);
            }
        }
        return  "";
    }

}
