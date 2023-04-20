<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
    $data_to_send_json = file_get_contents('php://input');
    echo $data_to_send_json;
    $data_to_send = json_decode($data_to_send_json, true);
    $email_content = implode($data_to_send);
    echo $data_to_send_json;
    echo $email_content;
    $to = "kontakt@bitsnbytes.ictblj.ch";
    $subject = "Feedback from dashboard";
    $txt = $email_content;
    $headers = "From: kontakt@bitsnbytes.ictblj.ch \r\n";
    $headers .= "Reply-To: kontakt@bitsnbytes.ictblj.ch\r\n";
    $headers .= "Return-Path: kontakt@bitsnbytes.ictblj.ch\r\n";
    mail($to,$subject,$txt,$headers);
?>