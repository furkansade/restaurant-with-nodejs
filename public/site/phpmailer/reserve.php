<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Foores - Single Restaurant Version">
    <meta name="author" content="Ansonika">
    <title>Foores - Single Restaurant Version</title>

    <!-- Favicons-->
    <link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" type="image/x-icon" href="../img/apple-touch-icon-57x57-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="../img/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="../img/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="../img/apple-touch-icon-144x144-precomposed.png">

    <!-- GOOGLE WEB FONT -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital@1&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- BASE CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">

    <!-- SPECIFIC CSS -->
    <link href="../css/wizard.css" rel="stylesheet">

    <!-- YOUR CUSTOM CSS -->
    <link href="../css/custom.css" rel="stylesheet">
</head>

<body>
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';

$mail = new PHPMailer(true);

try {

    //Recipients - main edits
    $mail->setFrom('info@foores.com', 'Message from Foores');                    // Email Address and Name FROM
    $mail->addAddress('info@foores.com', 'Jhon Doe');                            // Email Address and Name TO - Name is optional
    $mail->addReplyTo('noreply@foores.com', 'Message from Foores');              // Email Address and Name NOREPLY
    $mail->isHTML(true);                                                       
    $mail->Subject = 'Reserve request from Foores';                              // Email Subject   

    // Form fields
    $message = "<strong>Details</strong><br />";
    $message .= "\nPreferred date: " . $_POST['datepicker_field'] . "<br />";
    $message .= "\nPreferred time: " . $_POST['time'] . "<br />";
    $message .= "\nNumber of Guests: " . $_POST['people'] . "<br />";
    $message .= "\nFirst and Last Name: " . $_POST['name_reserve'] . "<br />";
    $message .= "\nEmail: " . $_POST['email_reserve'] . "<br />";
    $message .= "\nTelephone: " . $_POST['telephone_reserve'] . "<br />";
    $message .= "\nOptional Message: " . $_POST['opt_message_reserve'];

    $mail->Body = "" . $message . "";

    $mail->send();

    // Confirmation/autoreplay email send to who fill the form
    $mail->ClearAddresses();
    $mail->addAddress($_POST['email_reserve']); // Email address entered on form
    $mail->isHTML(true);
    $mail->Subject    = 'Confirmation'; // Custom subject
    $mail->Body = "" . $message . "";

    $mail->Send();

    // Succes message
    echo '<div id="success">
            <div class="icon icon--order-success svg">
                 <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
                  <g fill="none" stroke="#8EC343" stroke-width="2">
                     <circle cx="36" cy="36" r="35" style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"></circle>
                     <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>
                  </g>
                 </svg>
             </div>
            <h4><span>Thank you!Request sent.</span>We will reply shortly.</h4>
            <div><a href="../index.html">Back to home</a></div>
        </div>';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }  
?> 

</body>
</html>