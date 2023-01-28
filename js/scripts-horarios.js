/* --------------------------------------------------
    All javascript and jquery plugins acativation
----------------------------------------------------- */
(function ($) {
    'use strict';
    
    $('.nav-enlace').on('click', function (event) {
        var $anchor = $(this);
        console.log("moving");
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 70)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.horario-status').click( function(event) {
        event.preventDefault();
        console.log($(this).attr('data-horario'));
        console.log($(this).attr('data-dia'));

        if ( $(this).attr('href')=="datos.html" ){
            localStorage.setItem("idhour", $(this).attr('data-horario'));
            localStorage.setItem("idday", $(this).attr('data-dia'));
            $(location).attr('href', $(this).attr('href'));
        }        
    });

    $(document).ready(function () {
        console.log("skill selected="+localStorage.getItem("idskill"));
        console.log("level selected="+localStorage.getItem("idlevel"));

    });

})(jQuery);
