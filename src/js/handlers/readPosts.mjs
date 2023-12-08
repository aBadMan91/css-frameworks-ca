import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

async function viewPosts(sort = "newest") {
  const posts = await postMethods.getPosts(sort);
  const container = document.querySelector("#post");

  if (container) {
    container.innerHTML = ""; // Clear existing posts
    templates.renderPostTemplates(posts, container);
  }
}

document.querySelector("#selection").addEventListener("change", function () {
  viewPosts(this.value);
});

// Call viewPosts initially with the default sort order
viewPosts(document.querySelector("#selection").value);
