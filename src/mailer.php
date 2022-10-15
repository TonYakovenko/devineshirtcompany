<?php
    //get data from form  
    $name = $_POST['name'];
    $email= $_POST['email'];
    $message= $_POST['message'];

    $to = "artonyweb@gmail.com";
    $subject = "Devine Shirt Company Website";
    $txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
    $headers = "From: noreply@yoursite.com";
    if($email!=NULL){
        //print phpinfo();
        echo 'Email on the way';  
        mail($to,$subject,$txt,$headers);
    }
    //redirect
    header("Location:thankyou.html");
?>