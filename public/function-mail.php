<?php
if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}

/*
if( ! isset( $_POST['nombre'] ) ){
    header("Location: index.html" );
}
*/


$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

if( empty(trim($nombre)) ) $nombre = 'anonimo';
if( empty(trim($apellido)) ) $apellido = '';

$body = <<<HTML
    <h1 style="color:blue;" >Contacto desde la web</h1>
    <p>De: $nombre $apellido / $email</p>
    <h2>Mensaje</h2>
    $mensaje
HTML;

//sintaxis de los emails email@algo.com || 
// nombre <email@algo.com>

$headers = "MIME-Version: 1.0 \r\n";
$headers.= "Content-type: text/html; charset=utf-8 \r\n";
$headers.= "From: $nombre $apellido <$email> \r\n";
$headers.= "To: Sitio web <jsaavedra@live.cl> \r\n";
// $headers.= "Cc: copia@email.com \r\n";
// $headers.= "Bcc: copia-oculta@email.com \r\n";


//REMITENTE (NOMBRE/APELLIDO - EMAIL)
//ASUNTO 
//CUERPO 
$rta = mail('jsaavedra@live.cl', "Mensaje web: $asunto", $body, $headers );
//var_dump($rta);

// header("Location: gracias.html" );
echo '<script>', 'MiFuncionJS()
{  alert (" EXITO")};' '</script>';

echo "<script>";
echo "MiFuncionJS();";
echo "</script>";