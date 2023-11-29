import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
  // If tags exist, split them into an array
  if (postData.tags) {
    postData.tags = postData.tags.split(",").map((tag) => tag.trim());
  } else {
    // Remove tags field if it is not present or null
    delete postData.tags;
  }

  const createPostURL = API_SOCIAL_URL + action;

  const response = await authFetch(createPostURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
