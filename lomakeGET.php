<?php
/**
 * Created by PhpStorm.
 * User: Ville Linde
 * Date: 30.10.2017
 * Time: 9.29
 */

$firstname = "";
$lastname = "";
$email = "";
$phone = "";
$address = "";
$area = "";
$pass = "";

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $firstname = validate_data($_GET["Etunimi"]);
    $lastname = validate_data($_GET["Sukunimi"]);
    $email = validate_data($_GET["E-mail"]);
    $phone = validate_data($_GET["Puhelin"]);
    $address = validate_data($_GET["Osoite"]);
    $area = validate_data($_GET["Postinumero"]);
    $pass = validate_data($_GET["Salasana"]);
}

echo "<strong>Lomakkeen tiedot:</strong><br>";

echo "Etunimi: " . $firstname . "<br>";
echo "Sukunimi: " . $lastname . "<br>";
echo "E-Mail: " . $email . "<br>";
echo "Puhelin: " . $phone . "<br>";
echo "Osoite: " . $address . "<br>";
echo "Postinro: " . $area . "<br>";
echo "Salasana: " . $pass . "<br>";

function validate_data($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>