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
        console.log("isJunior="+localStorage.getItem("isJunior"));
        console.log("personaldata="+localStorage.getItem("personaldata"));

        var idskill = localStorage.getItem("idskill");
        var idlevel = localStorage.getItem("idlevel");
        var idlevel1 = skills[idskill].levels[0];
        var idhour = localStorage.getItem("idhour");
        var idday = localStorage.getItem("idday");
        var isJunior = localStorage.getItem("isJunior")=="true"?true:false;
        var personaldata = JSON.parse( localStorage.getItem("personaldata") );
        console.log(personaldata);

        console.log(skills[idskill]);

        if ( isJunior ){
            var temp = $.trim( $("#personaldata-junior").html() );
            var x = temp.replace(/{{name}}/ig, personaldata.name).
            replace(/{{surname}}/ig, personaldata.surname).
            replace(/{{dni}}/ig, personaldata.dni).
            replace(/{{date}}/ig, personaldata.date).
            replace(/{{address}}/ig, personaldata.address).
            replace(/{{city}}/ig, personaldata.city).
            replace(/{{email}}/ig, personaldata.email).

            replace(/{{nameAdult}}/ig, personaldata.nameAdult).
            replace(/{{surnameAdult}}/ig, personaldata.surnameAdult).
            replace(/{{dniAdult}}/ig, personaldata.dniAdult).
            replace(/{{dateAdult}}/ig, personaldata.dateAdult).
            replace(/{{emailAdult}}/ig, personaldata.emailAdult).
            replace(/{{phone1}}/ig, personaldata.phone1).
            replace(/{{phone2}}/ig, personaldata.phone2).
            replace(/{{phone3}}/ig, personaldata.phone3).
            replace(/{{level}}/ig, workshops[idlevel1].level).
            replace(/{{skill}}/ig, skills[idskill].title);

            $('#personaldata-content').append( x );
        }else{
            var temp = $.trim( $("#personaldata-senior").html() );
            var x = temp.replace(/{{name}}/ig, personaldata.name).
            replace(/{{surname}}/ig, personaldata.surname).
            replace(/{{dni}}/ig, personaldata.dni).
            replace(/{{date}}/ig, personaldata.date).
            replace(/{{address}}/ig, personaldata.address).
            replace(/{{city}}/ig, personaldata.city).
            replace(/{{email}}/ig, personaldata.email).
            replace(/{{phone1}}/ig, personaldata.phone1).
            replace(/{{phone2}}/ig, personaldata.phone2).
            replace(/{{phone3}}/ig, personaldata.phone3).
            replace(/{{level}}/ig, workshops[idlevel1].level).
            replace(/{{skill}}/ig, skills[idskill].title);

            $('#personaldata-content').append( x );
        }

        /*********************************/
        
        Object.keys(workshops[ idlevel1 ].prices).forEach( p => {

            var plan;
            if ( p == "clase"){
                plan = "clase";
            }
            if ( p == "mensual"){
                plan = "mensual";
            }
            if ( p == "fulllevel"){
                plan = "fulllevel";
            }

            var temp = $.trim( $("#plan-item").html() );
            var x = temp.replace(/{{title}}/ig, payplan[plan].title ).
            replace(/{{old}}/ig, workshops[idlevel1].prices[p].old ).
            replace(/{{bonus}}/ig, workshops[idlevel1].prices[p].bonus).
            replace(/{{new}}/ig, workshops[idlevel1].prices[p].new).
            replace(/{{idplan}}/ig, plan);

            $('#plan-list').append( x );
        });


        Object.keys(paymethod).forEach( m => {

            console.log(m);

            var temp = $.trim( $("#method-item").html() );
            var x = temp.replace(/{{title}}/ig, paymethod[m].title ).
            replace(/{{description}}/ig, paymethod[m].description ).
            replace(/{{conditions}}/ig, paymethod[m].conditions).
            replace(/{{idmethod}}/ig, m);

            console.log(x);

            $('#method-list').append( x );
        });

        $(".planlink").click(function(){
            console.log($(this).attr("data-idplan"));

            $(".planlink").removeClass("plan-selected");
            $(this).addClass("plan-selected");

            $(".planlink input").prop("checked", false);
            $(this).children("input").prop("checked", true);

            localStorage.setItem("idplan", $(this).attr("data-idplan"));
        });

        $(".methodlink").click(function(){
            console.log("aa");
            console.log( $(this).attr("data-idmethod") );

            $(".methodlink").removeClass("plan-selected");
            $(this).addClass("plan-selected");

            $(".methodlink input").prop("checked", false);
            $(this).children("input").prop("checked", true);

            localStorage.setItem("idmethod", $(this).attr("data-idmethod"));
        });


        $("#form-pago").submit(function(e){
            e.preventDefault();
            console.log("pagar");

            /********************************/

            var inscripcion = {};
            inscripcion.skill = {};
            inscripcion.skill.id = localStorage.getItem("idskill");
            inscripcion.skill.title = skills[inscripcion.skill.id].title;
            inscripcion.level = {};
            inscripcion.level.idselected = localStorage.getItem("idlevel");
            inscripcion.level.idlevel1 = skills[inscripcion.skill.id].levels[0];
            inscripcion.level.level = workshops[inscripcion.level.idlevel1].level;
            inscripcion.level.name = workshops[inscripcion.level.idlevel1].name;
            inscripcion.horario = {}
            inscripcion.horario.idhour = localStorage.getItem("idhour");
            inscripcion.horario.idday = localStorage.getItem("idday");
            if ( inscripcion.horario.idhour == 1){ inscripcion.horario.hour = "De 8:00 a 9:30" }
            if ( inscripcion.horario.idhour == 2){ inscripcion.horario.hour = "De 10:00 a 11:30" }
            if ( inscripcion.horario.idhour == 3){ inscripcion.horario.hour = "De 13:00 a 14:30" }
            if ( inscripcion.horario.idhour == 4){ inscripcion.horario.hour = "De 15:00 a 16:30" }
            if ( inscripcion.horario.idhour == 5){ inscripcion.horario.hour = "De 17:00 a 18:30" }
            if ( inscripcion.horario.idhour == 6){ inscripcion.horario.hour = "De 19:30 a 21:00" }
            if ( inscripcion.horario.idday == 1){ inscripcion.horario.day = "Lunes" }
            if ( inscripcion.horario.idday == 2){ inscripcion.horario.day = "Martes" }
            if ( inscripcion.horario.idday == 3){ inscripcion.horario.day = "Miercoles" }
            if ( inscripcion.horario.idday == 4){ inscripcion.horario.day = "Jueves" }
            if ( inscripcion.horario.idday == 5){ inscripcion.horario.day = "Viernes" }
            if ( inscripcion.horario.idday == 6){ inscripcion.horario.day = "Sábado" }
            inscripcion.isJunior = localStorage.getItem("isJunior");
            inscripcion.personaldata = JSON.parse( localStorage.getItem("personaldata") );
            inscripcion.plan = {}
            inscripcion.plan.id = localStorage.getItem("idplan");
            inscripcion.plan.title = payplan[inscripcion.plan.id].title;
            inscripcion.plan.old = workshops[inscripcion.level.idlevel1].prices[inscripcion.plan.id].old;
            inscripcion.plan.bonus = workshops[inscripcion.level.idlevel1].prices[inscripcion.plan.id].bonus;
            inscripcion.plan.new = workshops[inscripcion.level.idlevel1].prices[inscripcion.plan.id].new;
            inscripcion.method = {}
            inscripcion.method.id = localStorage.getItem("idmethod");
            inscripcion.method.title = paymethod[inscripcion.method.id].title;
            inscripcion.method.description = paymethod[inscripcion.method.id].description;
            inscripcion.method.conditions = paymethod[inscripcion.method.id].conditions;
            inscripcion.personaldata = JSON.parse(localStorage.getItem("personaldata"));

            localStorage.setItem("inscripcion", JSON.stringify(inscripcion));

            console.log( localStorage.getItem("inscripcion") );

            /********************************/

            $.ajax({
                type: 'POST',
                typeData: "text",
                url: $("#form-pago").attr('action'),
                data: {"data": JSON.stringify(inscripcion)}
            })
            .done(function (response) {
                console.log("done::"+response);

                $("#modal-inscription-content").append($("#modal-inscription-good").html());
                $("#myModal").modal();
            })
            .fail(function (data) {
                console.log("fail::"+data);

                $("#modal-inscription-content").append($("#modal-inscription-fail").html());
                $("#myModal").modal();
            }).always(function( xhr, status ) {
                console.log("always");
            });
        });       
    });

})(jQuery);
