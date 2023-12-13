import { load } from "../storage/index.mjs";

// function to get the token from the storage and return the headers with the token
export function headers() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
