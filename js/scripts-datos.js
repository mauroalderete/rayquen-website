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

    $(document).ready(function () {
        console.log("skill selected="+localStorage.getItem("idskill"));
        console.log("level selected="+localStorage.getItem("idlevel"));
        console.log("turno selected="+localStorage.getItem("idhour"));
        console.log("dia selected="+localStorage.getItem("idday"));

        $("#personaldata-btnYes").click(function () {
            $("#form-senior").hide();
            $("#form-junior").fadeIn();

            localStorage.setItem("isJunior", "true");
        });

        $("#personaldata-btnNo").click(function () {
            $("#form-junior").hide();
            $("#form-senior").fadeIn();

            localStorage.setItem("isJunior", "false");
        });

        $("#form-senior").hide();
        $("#form-junior").hide();

        /****************************/
        $('#form-junior').submit( function(event){
            console.log("form-junior");
            event.preventDefault();
            var formData = $('#form-junior').serialize();

            var personaldata = {};
            personaldata.name = $('#form-junior #name').val();
            personaldata.surname = $('#form-junior #surname').val();
            personaldata.dni = $('#form-junior #dni').val();
            personaldata.date = $('#form-junior #date').val();
            personaldata.address = $('#form-junior #address').val();
            personaldata.city = $('#form-junior #city').val();
            personaldata.email = $('#form-junior #email').val();
            personaldata.nameAdult = $('#form-junior #nameAdult').val();
            personaldata.surnameAdult = $('#form-junior #surnameAdult').val();
            personaldata.dniAdult = $('#form-junior #dniAdult').val();
            personaldata.dateAdult = $('#form-junior #dateAdult').val();
            personaldata.emailAdult = $('#form-junior #emailAdult').val();
            personaldata.phone1 = $('#form-junior #phone1').val();
            personaldata.phone2 = $('#form-junior #phone2').val();
            personaldata.phone3 = $('#form-junior #phone3').val();
            personaldata.phone1 = $('#form-junior #phone1').val();
            personaldata.message = $('#form-junior #message').val();



            localStorage.setItem("personaldata", JSON.stringify(personaldata) );

            $(location).attr('href', "pago.html");
        } );

        $('#form-senior').submit( function(event){
            event.preventDefault();
            console.log("form-senior::data");
            console.log($('#form-senior #name').val());
            
            var formData = $('#form-senior').serialize();

            var personaldata = {};
            personaldata.name = $('#form-senior #name').val();
            personaldata.surname = $('#form-senior #surname').val();
            personaldata.dni = $('#form-senior #dni').val();
            personaldata.date = $('#form-senior #date').val();
            personaldata.address = $('#form-senior #address').val();
            personaldata.city = $('#form-senior #city').val();
            personaldata.email = $('#form-senior #email').val();
            personaldata.phone1 = $('#form-senior #phone1').val();
            personaldata.phone2 = $('#form-senior #phone2').val();
            personaldata.phone3 = $('#form-senior #phone3').val();
            personaldata.phone1 = $('#form-senior #phone1').val();
            personaldata.message = $('#form-senior #message').val();

            localStorage.setItem("personaldata", JSON.stringify(personaldata) );
            
            $(location).attr('href', "pago.html");
        } );
        /****************************/

       
    });

})(jQuery);
