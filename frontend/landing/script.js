document.getElementById("email-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    
    // Here, we would send the email to a backend or save it in local storage
    console.log("Email captured:", email);

    // Show confirmation message
    document.getElementById("confirmation").style.display = "block";

    // Clear input field
    document.getElementById("email").value = "";
});
