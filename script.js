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

const submit = document.getElementById("submit_button");
const message = document.getElementsByClassName("succes_message");

// FUNCTION
function toggleMenu() {
  // If it's true that the menu class contains the showMenu class, do this:
  if (message.classList.contains("show_message")) {
    // Execute this block of code if the specified condition is true:
    message.classList.remove("show_message");
  }
  // If it's false that the menu class contains the showMenu class, do this:
  else {
    // Execute this block of code if the specified condition is false:
    message.classList.add("show_message");
  }
}

// When the toggle button is clicked, the function toggleMenu() will be called, it will check if the menu contains the class showMenu
submit.addEventListener("click", toggleMenu);
