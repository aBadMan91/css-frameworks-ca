import { login } from "../api/auth/login.mjs";

// this function adds an event listener to the login form
export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      // Send it to the API
      try {
        await login(profile);
      } catch (error) {
        alert(error.message);
      }
    });
  }
}
