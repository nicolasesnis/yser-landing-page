<?php

// Import the Postmark Client Class:
require_once('./vendor/autoload.php');
use Postmark\PostmarkClient;

$client = new PostmarkClient("a58fdefa-b953-4e76-8057-e4829ba14678");

// Send an email:
$sendResult = $client->sendEmail(
  "nicolas.esnis@be-yser.com",
  "nicolas.esnis@be-yser.com",
  "Hello from Postmark!",
  "This is just a friendly 'hello' from your friends at Postmark."
);

?>
