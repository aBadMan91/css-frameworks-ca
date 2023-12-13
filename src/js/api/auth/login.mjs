import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

// This function is used to login a user
export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  if (!response.ok) {
    throw new Error(`Login failed: ${response.status}`);
  }

  const { accessToken, ...user } = await response.json();

  storage.save("token", accessToken);

  storage.save("profile", user);

  window.location.href = "/profile/";
}
