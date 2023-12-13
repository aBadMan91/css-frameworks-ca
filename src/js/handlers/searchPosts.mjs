import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

// This searches the posts by the search term
export async function searchPosts(searchTerm) {
  const posts = await postMethods.getPosts();
  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const container = document.querySelector("#post");

  if (container) {
    container.innerHTML = "";
    templates.renderPostTemplates(filteredPosts, container);
  }
}

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search");

if (searchForm) {
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchTerm = searchInput.value;
    window.location.href = `/posts/?search=${encodeURIComponent(searchTerm)}`;
  });
}

if (searchInput) {
  searchInput.addEventListener("input", function () {
    searchPosts(this.value);
  });
}
