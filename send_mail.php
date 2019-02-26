<?php

$webmaster_email = "shubhamvermaiitdelhi@gmail.com";

$feedback_page = "contact.html";
$error_page = "contact.html";

$first_name = $_REQUEST['firstname'] ;
$last_name = $_REQUEST['lastname'] ;
$comments = $_REQUEST['subject'] ;
$msg = 
"Name: " . $first_name . $last_name . "\r\n" . 
// "Email: " . $email_address . "\r\n" . 
"Comments: " . $comments ;

	mail( "$webmaster_email", "Feedback Form Results", $msg );
	header( "Location: $feedback_page" );
?>