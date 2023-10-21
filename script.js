/*
Your users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
*/

// Using strict mode helps you to catch and identify certain errors
"use strict";

const form = document.getElementById("form");
const message = document.querySelector(".succes_message");
const dismiss = document.getElementById("dismiss_button");
const email = document.getElementById("email");
const mirror = document.getElementById("users_email");

// Mirror the input value into the succes message:
email.addEventListener("input", function (event) {
  mirror.innerText = event.target.value.split("").join("");
});

// Listen for events on form:
form.addEventListener("submit", (e) => {
  // This tells the browser to prevent the form from submitting by default:
  e.preventDefault();

  const emailInput = email.value;
  const small = form.querySelector("small");

  // When the input is empty or invalid, do this:
  if (!isValidEmail(emailInput)) {
    form.classList.add("error");
    small.innerText = "Valid email required";

    // When the input is valid, do this:
  } else {
    form.classList.remove("error");
    message.classList.add("display_message");
  }
});
// REGEX = Regular Expression
function isValidEmail(emailInput) {
  return /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(emailInput);
}

// Function for Dismiss Button
function close() {
  message.classList.remove("display_message");
  document.getElementById("email").value = "";
  window.location.reload();
}
// Call the function close() when dismiss button is clicked
dismiss.addEventListener("click", close);
