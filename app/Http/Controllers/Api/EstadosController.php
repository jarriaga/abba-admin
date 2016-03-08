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
        $estados    =   $estados->getSoloEstados();
        $result     =   [];
        foreach ($estados as $estado) {
            $result[] = [ "id"=>$estado["_id"]->{'$id'}, "nombre"=>$estado["nombre"] ];
        }

        return  response()->json($result,200);
    }

    public function getEstado($idEstado)
    {
        $estado     =   new Estado();
        $estadoInfo =   $estado->getEstadoyRegiones($idEstado);
    }
}
