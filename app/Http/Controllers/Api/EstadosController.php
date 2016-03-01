<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Http\Models\Estado;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class EstadosController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }


    public function index()
    {
        $estados    =   new Estado();
        $estados    =   $estados->getCollection()->find([],['identificador'=>1,'nombre'=>1]);
        $result     =   [];
        foreach ($estados as $estado) {
            $result[] = [ "id"=>$estado["_id"]->{'$id'}, "nombre"=>$estado["nombre"] ];
        }

        return  $result;
    }
}
