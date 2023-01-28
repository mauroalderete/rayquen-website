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

        
        Object.keys(skills).forEach(skill => {
            console.log(skill);
            console.log(skills[skill].title);
            console.log(skills[skill].img);
            console.log(skills[skill].levels);

            var temp = $.trim( $("#skill-item").html() );
            var x = temp.replace(/{{skill}}/ig, skill).
            replace(/{{img}}/ig,skills[skill].img);
            $("#skill-list").append(x);

            console.log("creando lista de talleres");
            var temp = $.trim( $("#level-list").html() );
            var x = temp.replace(/{{skill}}/ig, skill);
            $("#levels").append(x);

            skills[skill].levels.forEach( level => {
                console.log("    añadiendo nivel:"+level);
                var temp = $.trim( $("#level-item").html() );
                var x = temp.replace(/{{skill}}/ig, skills[skill].title).
                replace(/{{idlevel}}/ig, level).
                replace(/{{level}}/ig, workshops[level].level).
                replace(/{{name}}/ig, workshops[level].name).
                replace(/{{title}}/ig, workshops[level].title).
                replace(/{{exp}}/ig, workshops[level].bonus[skill]).
                replace(/{{durationLevel}}/ig, workshops[level].durationLevel).
                replace(/{{durationClass}}/ig, workshops[level].durationClass);
                $("#"+skill+"-level-list").append(x);
            } );
        });

        var swiper = new Swiper('.interface-slider2', {
            effect: 'coverflow',
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 80,
                depth: 200,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination2',
                clickable: true
            },
        });

        /***************************************
         * 1. Levels show and hide
         ***************************************/

        $('.interface-icon').click(function(event){

            event.preventDefault();
            var sk = $(this).attr("data-skill");
            localStorage.setItem("idskill",sk);

            console.log(".interface-icon::click");

            $(".noshow").css("display", "flex").hide();

            var $anchor = $(this);
            console.log("moving");
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 70)
            }, 1250, 'easeInOutExpo');

            $("#"+sk+"-level-list").fadeIn({
                duration: 2500
            });
        });

        $('.tallerCard').click(function(event){
            console.log("level-link::click");
            var lvl = $(this).attr("data-level");
            localStorage.setItem("idlevel",lvl);

            //limpio estructura del modal
            $('#var-name').empty();
            $('#var-description').empty();
            $('#bonus-list').empty();
            $('#content-list').empty();
            $('#require-list').empty();
            $('#extrabonus-list').empty();
            $('#price-list').empty();
            $('#modal-foot').empty();
            //obtengo acceso a los datos del nivel
            $('#var-name').append( workshops[lvl].name );
            $('#var-description').append( workshops[lvl].description );

            Object.keys( workshops[lvl].bonus ).forEach( b =>{
                var temp = $.trim( $("#bonus-item").html() );
                var x = temp.replace(/{{skill}}/ig, b).
                replace(/{{exp}}/ig, workshops[lvl].bonus[b]);

                $('#bonus-list').append( x );
            });

            workshops[lvl].contents.forEach( c => {
                var temp = $.trim( $("#content-item").html() );
                var x = temp.replace(/{{content}}/ig, c);

                $('#content-list').append( x );
            });

            if ( Object.keys(workshops[lvl].requires).length == 0 ){
                $('#require-list').append( `<li> LEVEL `+ workshops[lvl].level+ ` de `+
                skills[workshops[lvl].skill].title+` es un taller ideal para principiantes <i class="fa fa-check"></i> </li>`+
                `<li>Cualquiera con poca o ninguna experiencia puede participar.<i class="fa fa-check"></i></li>` );

                //**********************/

                $('#modal-foot').append( $('#foot-inscripcion').html() );
            }else{
                Object.keys(workshops[lvl].requires).forEach( r => {
                    var temp = $.trim( $("#require-item").html() );
                    var x = temp.replace(/{{skill}}/ig, skills[r].title).
                    replace(/{{exp}}/ig, workshops[lvl].requires[r]);

                    $('#require-list').append( x );
                });

                var temp = $.trim($('#foot-empezar').html());
                var x = temp.replace(/{{skill}}/ig, skills[workshops[lvl].skill].title);
                $('#modal-foot').append( x );
            }

            Object.keys(workshops[lvl].prices).forEach( p => {

                var lbl;
                if ( p == "clase"){
                    lbl = "Clase a Clase";
                }
                if ( p == "mensual"){
                    lbl = "Mensual";
                }
                if ( p == "fulllevel"){
                    lbl = "Full Level";
                }

                var temp = $.trim( $("#price-item").html() );
                var x = temp.replace(/{{plan}}/ig, lbl).
                replace(/{{old}}/ig, workshops[lvl].prices[p].old).
                replace(/{{bonus}}/ig, workshops[lvl].prices[p].bonus).
                replace(/{{new}}/ig, workshops[lvl].prices[p].new);

                $('#price-list').append( x );
            });

            console.log(workshops[lvl]);

            var extrabonus = {};
            Object.keys(skills).forEach( s =>{
                if ( s != workshops[lvl].skill ){
                    //inicio la sumatoria
                    extrabonus[s] = 0;

                    skills[s].levels.forEach( l =>{
                        Object.keys( workshops[l].bonus ).forEach( b =>{
                            if ( workshops[lvl].skill == b ){
                                extrabonus[s]+=workshops[l].bonus[b];
                            }
                        });
                    });
                }
            } );

            Object.keys(extrabonus).forEach( t => {
                var temp = $.trim( $("#extrabonus-item").html() );
                var x = temp.replace(/{{skill}}/ig, workshops[lvl].skill).
                replace(/{{extraexp}}/ig, extrabonus[t]).
                replace(/{{extraskill}}/ig, skills[t].title);

                $('#extrabonus-list').append( x );
            });


        });

    });

})(jQuery);
