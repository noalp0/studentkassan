<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $skola = $_POST["skola"];
    $klass = $_POST["klass"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Email Configuration
    $to = "info@studentkassanuf.se"; // Change this to your email address
    $subject = "New Contact Form Submission";

    // Compose the email message
    $email_message = "First Name: $first_name\n";
    $email_message .= "Last Name: $last_name\n";
    $email_message .= "Skola: $skola\n";
    $email_message .= "Klass: $klass\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

    // Additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    $mailResult = mail($to, $subject, $email_message, $headers);

    // Check if the email was sent successfully
    header("Location: ./kontakt.html", true, 301);  
    exit();  


}
?>



