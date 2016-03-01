/**
 * Created by jbarron on 2/22/16.
 */


/**
 *  ****************  ciudadesController ***********
 */
moduleCatalogos.controller('ciudadesController',['$scope','$http',function($scope,$http){

    //function to retrieve all estados from the API
    $scope.getEstados   =   function(){
        $http({
            method  :   'GET',
            url     :   '/api/estados'
        })
            .then(function( response ){
                //Success response

            },
                function( response ){
                    //Error response

                }
            );
    };









    // *********************************    CODE FOR JQUERY ONLY
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

            jQuery('select.select2').select2();

        });

    })();

}]);




