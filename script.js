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

"use strict";

// Select all the buttons:
const buttons = document.querySelectorAll("buttons");

// Select Succes Message:
const message = document.getElementsByClassName("succes_message");

// Add listeners to all of them:
buttons.forEach((button) => {
  button.addEventListener("click", toggleMe);
});

// When button is clicked toggle display
function toggleMe() {
  if (message.display.style === "none") {
    message.display.style === "block";
  } else {
    message.display.style === "none";
  }
}

toggleMe();
