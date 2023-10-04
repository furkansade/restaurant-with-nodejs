<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Foores Restaurant">
    <meta name="author" content="Ansonika">
    <title>Foores Restaurant</title>
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
    $mail->Subject = 'Message from Foores';                                      // Email Subject    

    // Email verification, do not edit
    function isEmail($email_contact ) {
        return(preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/",$email_contact));
    }

   // Form fields
    $name_contact     = $_POST['name_contact'];
    $email_contact    = $_POST['email_contact'];
    $message_contact = $_POST['message_contact'];
    $verify_contact   = $_POST['verify_contact'];

    if(trim($name_contact) == '') {
    echo '<div class="error_message">You must enter your Name.</div>';
    exit();
    } else if(trim($email_contact) == '') {
        echo '<div class="error_message">Please enter a valid email address.</div>';
        exit();
    } else if(!isEmail($email_contact)) {
        echo '<div class="error_message">You have enter an invalid e-mail address.</div>';
        exit();
    } else if(trim($message_contact) == '') {
        echo '<div class="error_message">Please enter your message.</div>';
        exit();
    } else if(!isset($verify_contact) || trim($verify_contact) == '') {
        echo '<div class="error_message"> Please enter the verification number.</div>';
        exit();
    } else if(trim($verify_contact) != '4') {
        echo '<div class="error_message">The verification number you entered is incorrect.</div>';
        exit();
    }                          
            
    // Get the email's html content
    $email_html = file_get_contents('template-email.html');

    // Setup html content
    $e_content = "You have been contacted by <strong>$name_contact</strong> with the following message:<br><br>$message_contact<br><br>You can contact $name_contact via email at $email_contact";
    $body = str_replace(array('message'),array($e_content),$email_html);
    $mail->MsgHTML($body);

    $mail->send();

    // Confirmation/autoreplay email send to who fill the form
    $mail->ClearAddresses();
    $mail->addAddress($_POST['email_contact']); // Email address entered on form
    $mail->isHTML(true);
    $mail->Subject    = 'Confirmation'; // Custom subject
    
    // Get the email's html content
    $email_html_confirm = file_get_contents('confirmation.html');

    // Setup html content, do not edit
    $body = str_replace(array('message'),array($e_content),$email_html_confirm);
    $mail->MsgHTML($body);

    $mail->Send();

    // Succes message
    echo '<div id="success_page">
            <div class="icon icon--order-success svg">
                 <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
                  <g fill="none" stroke="#8EC343" stroke-width="2">
                     <circle cx="36" cy="36" r="35" style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"></circle>
                     <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>
                  </g>
                 </svg>
             </div>
            <h5>Thank you!<span>Request successfully sent!</span></h5>
            <small>We will reply shortly.</small>
        </div>';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }  
?> 

</body>
</html>