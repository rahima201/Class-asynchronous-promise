function validate() {
  // Get the values from all the form fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const terms = document.getElementById("terms").checked;

  // For checking the data type of phone (optional - for debugging)
  console.log("phone", typeof phone);

  // Check if the name field is empty
  if (name.trim() === "") {
    showError("Name cannot be empty");
    return false;
  }

  // Check if the email field is empty
  if (email.trim() === "") {
    showError("Email cannot be empty"); // (fixed spelling mistake: "cannor" ➝ "cannot")
    return false;
  }

  // Check if phone is not empty, must be numbers, and must be 10 digits
  if (phone.trim() === "" || isNaN(phone) || phone.length !== 10) {
    showError("Phone should be minimum 10 digits");
    return false;
  }

  // Check if the user has selected a subject
  if (subject === "0") {
    showError("Please provide your expertise"); // (fixed spelling: "expirtise" ➝ "expertise")
    return false;
  }

  // Check if password is not empty and exactly 8 characters
  if (password.trim() === "" || password.length !== 8) {
    showError("Please enter an 8-character password");
    return false;
  }

  // Check if both passwords match
  if (confirmPassword !== password) {
    showError("Passwords do not match");
    return false;
  }

  // Check if the user has agreed to the terms
  if (terms === false) {
    showError("Terms and conditions is not selected");
    return false;
  }

  // If all checks pass, show success message
  alert("Registration successful");
  return true;

  // This function shows error messages on the page
  function showError(message) {
    const errorElement = document.getElementById("demo");
    errorElement.style.color = "red"; // Make the error text red
    errorElement.style.textAlign = "center"; // Center the error message
    errorElement.textContent = message; // Show the error message
  }
}
