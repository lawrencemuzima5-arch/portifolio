// Selecting elements
let form = document.getElementById("contactForm");
let result = document.getElementById("result");

// Event listener
form.addEventListener("submit", function(event){

    // Stops page from refreshing
    event.preventDefault();

    // Change content
    result.textContent = "Message Sent Successfully!";

    // Alert message
    alert("Your message has been sent!");
});