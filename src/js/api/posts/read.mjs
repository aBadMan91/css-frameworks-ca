import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";

export async function getPosts() {
  const updatePostURL = `${API_SOCIAL_URL}${action}?_author=true&_comments=true&_reactions=true`;

  const response = await authFetch(updatePostURL);

  return await response.json();
}

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }
  // const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;
  const getPostURL = `${API_SOCIAL_URL}${action}/${id}?_author=true&_comments=true&_reactions=true`;

  const response = await authFetch(getPostURL);

  return await response.json();
}

// export async function getPost(id) {
//   if (!id) {
//     throw new Error("Get requires a postID");
//   }
//   const getPostURL = `${API_SOCIAL_URL}${action}/${id}?_author=true&_comments=true&_reactions=true`;

//   const response = await authFetch(getPostURL);
//   const post = await response.json();

//   // Redirect to the getPostURL
//   window.location.href = getPostURL;

//   return post;
// }
