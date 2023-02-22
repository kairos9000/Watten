<?php
session_start();
require_once 'connection.php';

$sqlQuery = $conn->prepare("SELECT * FROM meals");
$sqlQuery->execute();
$result = $sqlQuery->get_result();

$friendList = array();
$friendList = $result->fetch_all(MYSQLI_ASSOC);

// returns response
$responseFriendList = json_encode($friendList);
echo $responseFriendList;
?> 