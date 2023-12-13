import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "post";

// This function is used to create a post
export async function createPost(postData) {
  if (postData.tags) {
    postData.tags = postData.tags.split(",").map((tag) => tag.trim());
  } else {
    delete postData.tags;
  }

  const createPostURL = API_SOCIAL_URL + action;

  const response = await authFetch(createPostURL, {
    method,
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error(`An error occurred while creating the post: ${response.status}`);
  }

  return await response.json();
}
