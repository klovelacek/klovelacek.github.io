<?php
$name = $_POST ['name'];
$email = $_POST ['email'];
$phone = $_POST ['phone'];
$contact_comment = $_POST ['contact_comment'];
$to = "kent@lovelace-design.com";
$subject = "New Message";

mail ($to, $subject, $message, "from: " .$name);
echo "Nice! Your message has been sent.";


//validation
$nameErr = $emailErr = $websiteErr = "";
$name = $email = $contact_comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
    }
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
    }
  }

  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
    // check if URL address syntax is valid (this regular expression also allows dashes in the URL)
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
      $websiteErr = "Invalid URL";
    }
  }

  if (empty($_POST["contact_comment"])) {
  $comment = "";
  } else {
  $comment = test_input($_POST["contact_comment"]);
  }
}

?>
