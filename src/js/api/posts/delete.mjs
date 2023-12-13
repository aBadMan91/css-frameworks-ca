import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "delete";

// This function is used to delete a post
export async function removePost(id) {
  if (!id) {
    throw new Error("Delete requires a postID");
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(updatePostURL, {
    method,
  });

  if (!response.ok) {
    throw new Error(`An error occurred while deleting the post: ${response.status}`);
  }

  return await response.json();
}
