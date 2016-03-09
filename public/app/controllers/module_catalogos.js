/**
 * Created by jbarron on 2/22/16.
 */


/**
 *  ****************  ciudadesController ***********
 */
moduleCatalogos.controller('ciudadesController',['$scope','$http',function($scope,$http){

    $scope.estadosApi = [];
    $scope.data={};
    $scope.regiones={};
    $scope.nombreEstado ='';

    //funcion para mostrar las regiones de un estado
    $scope.cambiarEstado = function(){
        $http({
           method   :   'POST',
            url     :   '/api/estado/'+$scope.data.estadoSeleccionado
        }).then(function(response){
            $scope.nombreEstado =   findEstadoNombre($scope.data.estadoSeleccionado);
            $scope.regiones =   response.data;
        },  function(   response ){
            $scope.regiones={};
        });

    }

    function findEstadoNombre( idEstado ){
        for(var i=0;i<$scope.estadosApi.length;i++){
            if($scope.estadosApi[i].id == idEstado)
                return $scope.estadosApi[i].nombre;
        }
        return '';
    }

    $scope.activarRegion    =   function(idRegion,idEstado,idStatus){
        $http({
            method  :   'POST',
            url     :   '/api/region/change-status',
            data    :   {region:idRegion,estado:idEstado,status:idStatus}
        }).then(function(response){

        },function(response){

        });

    }

    //function to retrieve all estados from the API
    $scope.getEstados   =   function(){
        $http({
            method  :   'POST',
            url     :   '/api/estados'
        })
            .then(function( response ){
                $scope.estadosApi = response.data;
                jQuery('select.select2').select2();
            },
                function( response ){
                    //Error response

                }
            );
    };

    $scope.getEstados();
    paneles();

}]);



