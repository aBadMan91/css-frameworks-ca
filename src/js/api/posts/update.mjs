import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "put";

// This function is used to update a post
export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postID");
  }

  if (postData.tags) {
    postData.tags = postData.tags.split(",").map((tag) => tag.trim());
  } else {
    delete postData.tags;
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await authFetch(updatePostURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
