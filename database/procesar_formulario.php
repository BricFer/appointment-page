<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "root";   // El nombre de usuario de tu base de datos
$password = "aula7";       // La contraseña de tu base de datos
$dbname = "appointments";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recoger datos del formulario
$name = $_POST['fname'];
$last_name = $_POST['lname'];
$prefix = $_POST['prefix'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// Preparar y ejecutar la consulta SQL
$sql = "INSERT INTO clients (name, last_name, prefix, phone, email) VALUES ('$name', '$last_name', '$prefix', '$phone','$email')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
