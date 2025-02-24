<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Adresse email invalide!";
    } else {
        $to = "glodimietete@gmail.com";
        $subject = "Mail from my website";
        $body = "Vous avez reçu un nouveau message de $name ($email) : \n \n $message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Message envoyé avec succès!";
        } else {
            echo "Echec de l'envoi du message!";
        }
    }
} else {
    echo "Une erreur s'est produite!";
}
