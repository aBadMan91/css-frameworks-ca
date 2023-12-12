import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";

// THis function is used to get all posts
export async function getPosts(sort = "newest") {
  let updatePostURL = `${API_SOCIAL_URL}${action}?_author=true&_comments=true&_reactions=true`;

  // this checks if the sort is newest or oldest and changes the url accordingly
  if (sort === "newest") {
    updatePostURL += "&sort=updated&sortOrder=desc";
  } else if (sort === "oldest") {
    updatePostURL += "&sort=updated&sortOrder=asc";
  }

  const response = await authFetch(updatePostURL);

  return await response.json();
}

// This function is used to get a single post
export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }

  const getPostURL = `${API_SOCIAL_URL}${action}/${id}?_author=true&_comments=true&_reactions=true`;

  const response = await authFetch(getPostURL);

  return await response.json();
}
