/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementsByTagName("form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.getElementsByClassName("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const enteredEmail = emailInput.value;
        if (enteredEmail) {
            messageDiv.textContent = `Thank you! Your email address ${enteredEmail} has been added to our mailing list!`;
            console.log("Email recieved");
        } else {
            messageDiv.textContent = "Please enter a valid email address.";
            console.log("Email not recieved");
        }
    });
  });