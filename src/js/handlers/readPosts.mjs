import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

async function viewPosts() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#post");
  templates.renderPostTemplates(posts, container);
}

viewPosts();
