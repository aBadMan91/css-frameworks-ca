import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

// this function fetches the posts from the api by newest
export async function viewPosts(sort = "newest") {
  const posts = await postMethods.getPosts(sort);
  const container = document.querySelector("#post");

  if (container) {
    container.innerHTML = "";
    templates.renderPostTemplates(posts, container);
  }
}

// this filters the posts by the selected value
if (window.location.pathname === "/posts/") {
  document.querySelector("#selection").addEventListener("change", function () {
    viewPosts(this.value);
  });

  viewPosts(document.querySelector("#selection").value);
}
