<?php
include_once('env.php');

$hostName = $config["HOSTNAME"];
$userName = $config["USERNAME"];
$password = $config["PASSWORD"];
$database = $config["DATABASE"];

// Create connection
$conn = new mysqli($hostName, $userName, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>