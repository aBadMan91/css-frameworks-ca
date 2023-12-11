import { getProfile } from "../api/profiles/index.mjs";
import { load } from "../storage/index.mjs";
import { authFetch } from "../api/authFetch.mjs";

export async function fetchUserPosts() {
  const { name } = load("profile");
  const profile = await getProfile(name);

  console.log(profile);

  const response = await authFetch(`https://api.noroff.dev/api/v1/social/profiles/${name}/posts`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const posts = await response.json();

  const postContainer = document.getElementById("post-container");
  posts.forEach((post) => {
    const postHtml = createHtml(post);
    postContainer.appendChild(postHtml);
  });

  return posts;
}

fetchUserPosts();

function createHtml(posts) {
  const postContainer = document.createElement("div");
  postContainer.classList.add("post");

  const link = document.createElement("a");
  link.classList.add("card", "my-4");
  link.href = `/post/?id=${posts.id}&title=${posts.title}`;
  link.style.textDecoration = "none";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.innerText = `${posts.title}`;
  title.style.textDecoration = "underline";

  cardBody.appendChild(title);
  link.appendChild(cardBody);
  postContainer.appendChild(link);

  return postContainer;
}
