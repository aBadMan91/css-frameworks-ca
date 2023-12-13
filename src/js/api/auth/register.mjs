import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

// This function is used to register a user
export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  if (!response.ok) {
    throw new Error(`Registration failed: ${response.status}`);
  }

  const result = await response.json();

  window.location.href = "/login/";

  return result;
}
