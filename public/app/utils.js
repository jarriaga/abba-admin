
function paneles(){
    // *********************************    CODE FOR JQUERY ONLY MINIMIZAR PANELES
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

}



/** Aside
 **************************************************************** **/
function _aside() {

    // Mobile Button
    jQuery("#mobileMenuBtn").bind("click", function(e) {
        e.preventDefault();

        jQuery(this).toggleClass('active');

        if(window.width > 768) {

            if(jQuery('body').hasClass('min')) {

                jQuery('body').removeClass('min');
                jQuery("#sideNav>h3").show();
                jQuery("#middle").css({"margin-left":""});

            } else {

                jQuery("#middle").css({"margin-left":"0"});
                jQuery('body').addClass('min');

                if(jQuery('#aside nav li.el_primary.menu-open ul.sub-menu').prop('style')) {
                    jQuery('#aside nav li.el_primary.menu-open ul.sub-menu').prop('style').removeProperty("display");
                }

                jQuery("#sideNav>h3").hide();
                jQuery('#aside nav li.el_primary').removeClass('menu-open');

            }

        } else {

            if(jQuery('body').hasClass('menu-open')) {

                jQuery('body').removeClass('menu-open');
                jQuery("#sideNav>h3").show();
                jQuery("#middle").css({"margin-left":""});

            } else {

                jQuery("#middle").css({"margin-left":"0"});
                jQuery('body').addClass('menu-open');

                if(jQuery('#aside nav li.el_primary.menu-open ul.sub-menu').prop('style')) {
                    jQuery('#aside nav li.el_primary.menu-open ul.sub-menu').prop('style').removeProperty("display");
                }

                jQuery("#sideNav>h3").show();
                jQuery('#aside nav li.el_primary').removeClass('menu-open');

            }

        }
    });



    /** -------------------------------------------------------------------------------------- **/
        // Add an ID for each primary LI element (first dropdown)
    count = 0;
    jQuery('#aside ul.nav > li').each(function() {
        jQuery(this).addClass('el_primary');
        jQuery(this).attr('id', 'el_' + count);
        count++;
    });


    // Multilevel Navigation
    jQuery('#aside ul.nav li a').bind("click", function(e) {

        var _t 		= jQuery(this),
            _href 	= _t.attr('href');

        if(_href == '#') {
            e.preventDefault();
        }

        var find_li = jQuery(this).closest('li');

        if(!find_li.hasClass('always-open')) {

            var _id		= find_li.attr('id');

            // Hide other open submenus
            if(find_li.hasClass('el_primary')) {
                jQuery("#aside ul.nav li>ul").each(function() {
                    var __id = jQuery(this).closest('li').attr('id');
                    if(__id != _id) {
                        jQuery(this).slideUp(200, function() {
                            jQuery(this).parent().removeClass('menu-open');
                        });
                    }
                });

            }


            // Slide toggle
            jQuery(this).next().slideToggle(200, function() {

                if(jQuery(this).is(":visible")) {
                    find_li.addClass('menu-open');
                } else {
                    find_li.removeClass('menu-open active');
                }

            });

        }

    });
    /** -------------------------------------------------------------------------------------- **/


}


function _asideFix() {

    if(window.width > 768) {

        if(jQuery("body").hasClass('menu-open')) {
            jQuery("#middle").css({"margin-left":""});
        }

    }

}