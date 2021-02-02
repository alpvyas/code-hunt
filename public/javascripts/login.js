const registerTab = document.querySelector(".register-tab");
const loginTab = document.querySelector(".login-tab");

const registerForm = document.getElementById("register");
const loginForm = document.getElementById("login");

const swapClass = (element, className) => {
  if (element.classList === className) {
    element.classList.remove(className);
  } else {
    element.classList.add(className)
  }
};


registerTab.addEventListener("click", () => {
  if (loginForm.classList === "hidden"){
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
  } else {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
  }
});

loginTab.addEventListener("click", () => {
  if (registerForm.classList === "hidden"){
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
  } else {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  }
});

