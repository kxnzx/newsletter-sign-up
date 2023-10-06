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

const form = document.getElementById("form");
const submit = document.getElementById("submit_button");
const message = document.getElementById("succes_message");
const dismiss = document.getElementById("dismiss_button");
const email = document.getElementById("email");

// This tells the browser to prevent the form from submitting by default:
form.addEventListener("submit", (e) => {
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

function close() {
  message.classList.remove("display_message");
  document.getElementById("email").value = "";
}

dismiss.addEventListener("click", close);

/*

// FUNCTION for Input
form.addEventListener("submit", (e) => {
  // This tells the browser to prevent the form from submitting by default:
  e.preventDefault();
  const email = form["email"].value;
  // When the input is empty do this:
  if (email === "") {
    addError("email", "Email cannot be empty");
    // When the input is invalid check REGEX and do this:
  } else if (!isValid(email)) {
    addError("email", "Looks like this is not an email");
    // When the input is valid, do this:
  } else {
    removeError("email");
  }
});

// Add Error Message & Icon
function addError(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");
  const small = form[field].parentNode.querySelector("small");
  small.innerText = message;
}
// Remove Error Message & Icon
function removeError(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
}
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

// REGEX = Regular Expression
function isValid(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

*/
