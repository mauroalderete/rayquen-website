<?php
header('Content-Type: application/text; charset=utf-8');

$data = json_decode( $_POST["data"] );

$to = "alderete.mauro@gmail.com";
$subject = "Rayquen.com - Nueva inscripción";
$headers = "From: contact@rayquen.com" . "\r\n";
$headers .= "Replay-To: contact@rayquen.com" . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

$message = "
<html>
<head>
<title>Nueva inscripción</title>
</head>
<body>
<h2>Nuevo inscripto</h2>

<h4>Taller</h4>
<p>Skill: ".$data->skill->title."</p>
<p>Level: ".$data->level->name." LEVEL ".$data->level->level."</p>
<h4>Horario</h4>
<p>Dia: Próximo ".$data->horario->day."</p>
<p>Horario: ".$data->horario->hour."</p>
<h4>Alumno</h4>";

if( $data->isJunior=="true" ){
    $message.="
    <p>Es menor?: SI</p>
    <p>Nombre: ".$data->personaldata->name."</p>
    <p>Apellido: ".$data->personaldata->surname."</p>
    <p>DNI: ".$data->personaldata->dni."</p>
    <p>Fecha de Nacimiento: ".$data->personaldata->date."</p>
    <p>Domicilio: ".$data->personaldata->address."</p>
    <p>Localidad: ".$data->personaldata->city."</p>
    <p>Email: ".$data->personaldata->email."</p>
    <h4>Adulto</h4>
    <p>Nombre: ".$data->personaldata->nameAdult."</p>
    <p>Apellido: ".$data->personaldata->surnameAdult."</p>
    <p>DNI: ".$data->personaldata->dniAdult."</p>
    <p>Fecha de Nacimiento: ".$data->personaldata->dateAdult."</p>
    <p>Email: ".$data->personaldata->emailAdult."</p>
    <p>Teléfono 1: ".$data->personaldata->phone1."</p>
    <p>Teléfono 2: ".$data->personaldata->phone2."</p>
    <p>Teléfono 3: ".$data->personaldata->phone3."</p>
    ";
}else{
    $message.="
    <p>Es menor?: NO</p>
    <p>Nombre: ".$data->personaldata->name."</p>
    <p>Apellido: ".$data->personaldata->surname."</p>
    <p>DNI: ".$data->personaldata->dni."</p>
    <p>Fecha de Nacimiento: ".$data->personaldata->date."</p>
    <p>Domicilio: ".$data->personaldata->address."</p>
    <p>Localidad: ".$data->personaldata->city."</p>
    <p>Email: ".$data->personaldata->email."</p>
    <p>Teléfono 1: ".$data->personaldata->phone1."</p>
    <p>Teléfono 2: ".$data->personaldata->phone2."</p>
    <p>Teléfono 3: ".$data->personaldata->phone3."</p>
    ";
}

$message.="
<h4>Plan de pago</h4>
<p>idplan: ".$data->plan->id."</p>
<p>Titulo: ".$data->plan->title."</p>
<p>Precio sin descuento: ".$data->plan->old."</p>
<p>Descuento: ".$data->plan->bonus."</p>
<p>Precio con descuento: ".$data->plan->new."</p>
<h4>Método de pago</h4>
<p>idmethod: ".$data->method->id."</p>
<p>Titulo: ".$data->method->title."</p>
<p>Descripción: ".$data->method->description."</p>
<p>Condiciones: ".$data->method->conditions."</p>
</body></html>";
$ok=0;
if ( mail($to, $subject, $message, $headers) ){
    $ok+=1;
}

/********************************************************************/
/* EMAIL PARA LOS NUEVOS CLIENTES                                   */
/********************************************************************/

$to = "";
if( $data->isJunior=="true" ){
    $to = $data->personaldata->emailAdult;
}else{
    $to = $data->personaldata->email;
}

$subject = "Datos de Inscripción - Rayquen.com";

$message = "
<html>
<head>
<title>Datos de Inscripción</title>
</head>
<body>
<h2>Datos de Inscripción</h2>

<h4>Taller</h4>
<p>Skill: ".$data->skill->title."</p>
<p>Nivel: ".$data->level->name." NIVEL ".$data->level->level."</p>
<h4>Horario</h4>
<p>Dia: Próximo ".$data->horario->day."</p>
<p>Horario: ".$data->horario->hour."</p>
<h4>Alumno</h4>";
if( $data->isJunior=="true" ){
    $message.="
    <p>Nombre: ".$data->personaldata->name."</p>
    <p>Apellido: ".$data->personaldata->surname."</p>
    <p>DNI: ".$data->personaldata->dni."</p>
    <p>Fecha de Nacimiento: ".$data->personaldata->date."</p>
    <p>Domicilio: ".$data->personaldata->address."</p>
    <p>Localidad: ".$data->personaldata->city."</p>
    <p>Email: ".$data->personaldata->email."</p>
    <h4>Adulto Responsable</h4>
    <p>Nombre: ".$data->personaldata->nameAdult."</p>
    <p>Apellido: ".$data->personaldata->surnameAdult."</p>
    <p>DNI: ".$data->personaldata->dniAdult."</p>
    <p>Fecha de Nacimiento: ".$data->personaldata->dateAdult."</p>
    <p>Email: ".$data->personaldata->emailAdult."</p>
    <p>Teléfono 1: ".$data->personaldata->phone1."</p>
    <p>Teléfono 2: ".$data->personaldata->phone2."</p>
    <p>Teléfono 3: ".$data->personaldata->phone3."</p>
    ";
}else{
    $message.="
    <p>Nombre: ".$data->personaldata->name."</p>
    <p>Apellido: ".$data->personaldata->surname."</p>
    <p>DNI: ".$data->personaldata->dni."</p>
    <p>Fecha de Nacimiento: ".$data->personaldata->date."</p>
    <p>Domicilio: ".$data->personaldata->address."</p>
    <p>Localidad: ".$data->personaldata->city."</p>
    <p>Email: ".$data->personaldata->email."</p>
    <p>Teléfono 1: ".$data->personaldata->phone1."</p>
    <p>Teléfono 2: ".$data->personaldata->phone2."</p>
    <p>Teléfono 3: ".$data->personaldata->phone3."</p>
    ";
}

$message.="
<h4>Plan de pago</h4>
<p>".$data->plan->title." $".$data->plan->new."</p>
<h4>Método de pago</h4>
<p>".$data->method->title."</p>
<p>".$data->method->description."</p>
<p>".$data->method->conditions."</p>
<br>
<p>Si tenes alguna duda, podes contestar este mensaje para iniciar una conversación</p>
<center><h2>TE ESPERAMOS</h2></center>
</body></html>";

if ( mail($to, $subject, $message, $headers) ){
    $ok+=2;
}

if ($ok==3){
    echo("ok");
}else{
    echo("false");
}

?>
