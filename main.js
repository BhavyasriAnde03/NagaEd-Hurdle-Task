// public/main.js
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from submitting normally
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && validateEmail(email) && message) {
        // Log to console
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);
        
        // Display success message
        document.getElementById("successMessage").style.display = "block";
    } else {
        alert("All fields are required and email must be valid!");
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
