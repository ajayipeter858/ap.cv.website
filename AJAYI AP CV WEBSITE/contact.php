<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];

    // Add contact form data to database
    $sql = "INSERT INTO contact_form (name, email, message) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $name, $email, $message);
    $stmt->execute();

    // Send response back to client
    echo json_encode(['message' => 'Thank you for contacting me!']);
} else {
    echo json_encode(['error' => 'Invalid request method']);
}
?>