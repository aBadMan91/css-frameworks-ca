import { register } from "../api/auth/register.mjs";

// this function adds an event listener to the register form
export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      // Send it to the API
      try {
        await register(profile);
      } catch (error) {
        alert(error.message);
      }
    });
  }
}
