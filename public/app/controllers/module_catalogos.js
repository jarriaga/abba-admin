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

    $scope.cambiarEstado = function(){
        console.log($scope.data);
        $http({
           method   :   'GET',
            url     :   '/api/estado/'+$scope.data.estadoSeleccionado
        }).then(function(response){
            $scope.regiones =   response.data;
          console.log(response.data);
        },  function(   response ){
            //error
        });

    }

    //function to retrieve all estados from the API
    $scope.getEstados   =   function(){
        $http({
            method  :   'GET',
            url     :   '/api/estados'
        })
            .then(function( response ){
                $scope.estadosApi = response.data;
                console.log(response);
                    jQuery('select.select2').select2();
            },
                function( response ){
                    //Error response

                }
            );
    };

    $scope.getEstados();


    // *********************************    CODE FOR JQUERY ONLY MINIMIZAR PANELES
    (function(){
        jQuery(document).ready(function(){
            jQuery('#middle div.panel ul.options>li>a.panel_colapse').bind("click", function(e) {
                e.preventDefault();

                var panel 			= jQuery(this).closest('div.panel'),
                    button 			= jQuery(this),
                    panel_body 		= jQuery('div.panel-body', panel),
                    panel_footer 	= jQuery('div.panel-footer', panel),
                    panel_id		= panel.attr('id');

                panel_footer.slideToggle(200);
                panel_body.slideToggle(200, function() {

                    if(panel_body.is(":hidden")) {

                        // Add to localStorage
                        if(panel_id != '' && panel_id != undefined) {
                            localStorage.setItem(panel_id, 'hidden');
                        }

                    } else {
                        // Remove from localStorage
                        localStorage.removeItem(panel_id);
                    }
                });
                button.toggleClass('plus').toggleClass('');
            });



        });

    })();

}]);




