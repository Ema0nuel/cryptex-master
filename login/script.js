const signUpButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signInButton");
const signInForm = document.getElementById("signIn");
const signUpForm = document.getElementById("signup");

signInButton.addEventListener("click", () => {
  signUpForm.classList.add("hidden");
  signInForm.classList.remove("hidden");
});
signUpButton.addEventListener("click", () => {
  signUpForm.classList.remove("hidden");
  signInForm.classList.add("hidden");
});
