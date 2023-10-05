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
const message = document.getElementById("succes_message");
const dismiss = document.getElementById("dismiss_button");

// FUNCTION
function toggle(event) {
  event.preventDefault();
  // If it's true that the class .succes_message contains the class .display_message, do this:
  if (message.classList.contains("display_message")) {
    // Execute this block of code if the specified condition is true:
    message.classList.remove("display_message");
  } else {
    // Execute this block of code if the specified condition is false:
    message.classList.add("display_message");
  }
}

function close() {
  message.classList.remove("display_message");
}

// When the submit button is clicked, the function toggle() will be called, it will check if the class .succes_message contains the class .display_message
submit.addEventListener("click", toggle);

dismiss.addEventListener("click", close);

/*
"use strict";

const submit = document.getElementById("submit_button");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const message = document.getElementById("succes_message");

  // If it's true that the class .succes_message contains the class .display_message, do this:
  if (message.classList.contains("display_message")) {
    // Execute this block of code if the specified condition is true:
    message.classList.remove("display_message");
  } else {
    // Execute this block of code if the specified condition is false:
    message.classList.add("display_message");
  }
});
*/
