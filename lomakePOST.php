<?php
/**
 * Created by PhpStorm.
 * User: Ville Linde
 * Date: 30.10.2017
 * Time: 9.30
 */

$firstname = "";
$lastname = "";
$email = "";
$phone = "";
$address = "";
$area = "";
$pass = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = validate_data($_POST["Etunimi"]);
    $lastname = validate_data($_POST["Sukunimi"]);
    $email = validate_data($_POST["E-mail"]);
    $phone = validate_data($_POST["Puhelin"]);
    $address = validate_data($_POST["Osoite"]);
    $area = validate_data($_POST["Postinumero"]);
    $pass = validate_data($_POST["Salasana"]);
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