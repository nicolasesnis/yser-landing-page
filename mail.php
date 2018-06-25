<?php $nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$telephone = $_POST['telephone'];
$email = $_POST['email'];
$entreprise = $_POST['entreprise'];
$formcontent="Nom: $nom \n Prenom: $prenom \n Telephone: $telephone \n Email: $email \n Entreprise: $entreprise";
$recipient = "contact@be-yser.com";
$subject = "Demande Audit RGPD";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
