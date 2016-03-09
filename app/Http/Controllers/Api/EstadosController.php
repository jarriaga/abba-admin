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

    public function getRegiones($idEstado)
    {
        $estadoModel     =   new Estado();
        $regiones   =   $estadoModel->getEstadoyRegiones($idEstado);
        return response()->json($regiones,200);

        /* $dm = App::make('ODM');
        $user = new Usuario();
        $user->setName('Jesus Tesaaaat ODM');
        $dm->persist($user);
        $dm->flush(); */
    }

    public function changeStatusRegion(Request $request)
    {
        $idRegion       =   $request->input('region');
        $idEstado       =   $request->input('estado');
        $status         =   $request->input('status');

        $estadoModel    =   new Estado();
        $result = $estadoModel->updateStatusRegion($idEstado,$idRegion,$status);

        if($request['updatedExisting'])
            return  response()->json(['error'=>'not found'],Response::HTTP_FORBIDDEN);

        return  response()->json(['update'=>'ok'],Response::HTTP_OK);

    }
}
