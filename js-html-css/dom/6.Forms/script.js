/** @format */

document.getElementById("firstname").addEventListener("keyup", function () {
  const firstname = this.value.trim();
  const displayFirstname = document.getElementById("display-firstname");
  const errorFirstname = document.getElementById("error-firstname");

  if (firstname === "") {
    errorFirstname.textContent = "First name cannot be empty.";
    displayFirstname.textContent = "";
  } else {
    errorFirstname.textContent = "";
    displayFirstname.textContent = firstname;
  }
});

document.getElementById("age").addEventListener("keyup", function () {
  const age = parseInt(this.value);
  const aHardTruth = document.getElementById("a-hard-truth");
  const errorAge = document.getElementById("error-age");

  if (isNaN(age) || age <= 0) {
    errorAge.textContent = "Please enter a valid age.";
    aHardTruth.style.visibility = "hidden";
  } else {
    errorAge.textContent = "";
    aHardTruth.style.visibility = age >= 18 ? "visible" : "hidden";
  }
});

const pwd = document.getElementById("pwd");
const pwdConfirm = document.getElementById("pwd-confirm");
const errorPwd = document.getElementById("error-pwd");

function validatePassword() {
  if (pwd.value.length < 6) {
    errorPwd.textContent = "Password must be at least 6 characters long.";
    pwd.style.borderColor = "red";
    pwdConfirm.style.borderColor = "red";
  } else if (pwd.value !== pwdConfirm.value) {
    errorPwd.textContent = "Passwords do not match.";
    pwd.style.borderColor = "red";
    pwdConfirm.style.borderColor = "red";
  } else {
    errorPwd.textContent = "";
    pwd.style.borderColor = "";
    pwdConfirm.style.borderColor = "";
  }
}

pwd.addEventListener("keyup", validatePassword);
pwdConfirm.addEventListener("keyup", validatePassword);

document
  .getElementById("toggle-darkmode")
  .addEventListener("change", function () {
    if (this.value === "dark") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    }
  });
