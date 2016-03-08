<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Http\Models\Estado;
use App\Http\Odm\Documents\Usuario;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\App;


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
        $regiones   =   $estado->getEstadoyRegiones($idEstado);

        return response()->json($regiones,200);
        /* $dm = App::make('ODM');
        $user = new Usuario();
        $user->setName('Jesus Tesaaaat ODM');
        $dm->persist($user);
        $dm->flush(); */
    }
}
