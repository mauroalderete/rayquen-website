<?php
header('Content-Type: application/json');


$to = "alderete.mauro@gmail.com";
$subject = "Rayquen.com - ".$_POST["subject"];
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
 
$message = "
<html>
<head>
<title>Mensaje desde Rayquen.com</title>
</head>
<body>
<h3>Nuevo mensaje desde Rayquen.com</h3>

<p>Enviado por ".$_POST["name"]."</p>
<p>Su email es ".$_POST["email"]."</p>
<p>Su telefono es ".$_POST["phone"]."</p>
<p>Quiere saber sobre: ".$_POST["subject"]."</p>
<p>Dice: <br> ".$_POST["message"]."</p>
</body>
</html>";
 
mail($to, $subject, $message, $headers);

echo('{"res": "Su mensaje fue enviado, pronto recibira una respuesta."}');
?>
hola