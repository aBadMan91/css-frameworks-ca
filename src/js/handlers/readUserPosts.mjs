import { load } from "../storage/index.mjs";
import { authFetch } from "../api/authFetch.mjs";

// this function fetches the posts from the api
export async function fetchUserPosts() {
  try {
    const { name } = load("profile");

    const response = await authFetch(`https://api.noroff.dev/api/v1/social/profiles/${name}/posts`);

    if (!response.ok) {
      throw new Error(`Failed to fetch user posts: ${response.status}`);
    }

    const posts = await response.json();

    const postContainer = document.getElementById("post-container");
    posts.forEach((post) => {
      const postHtml = createHtml(post);
      postContainer.appendChild(postHtml);
    });

    return posts;
  } catch (error) {
    alert(error.message);
  }
}

fetchUserPosts();

// this function creates the html for the posts
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

  const editButton = document.createElement("button");
  editButton.classList.add("btn", "btn-primary");
  editButton.innerText = "Edit Post";
  editButton.onclick = function (event) {
    event.preventDefault();
    window.location.href = `/post/edit/?id=${posts.id}`;
  };
  editButton.classList.add("edit-button");

  cardBody.appendChild(title);
  cardBody.appendChild(editButton);
  link.appendChild(cardBody);
  postContainer.appendChild(link);

  return postContainer;
}
