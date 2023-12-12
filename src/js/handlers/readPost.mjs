import { API_SOCIAL_URL } from "../api/constants.mjs";
import { getPost } from "../api/posts/read.mjs";

const postContainer = document.querySelector(".container");
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const title = params.get("title");

document.title = title;

const url = `${API_SOCIAL_URL}/posts/${id}?_author=true&_comments=true&_reactions=true`;
console.log(url);

async function viewPost() {
  const postData = await getPost(id);
  console.log(postData);

  createHtml(postData);
}

viewPost();

export function createHtml(post) {
  const heading = document.createElement("h1");
  heading.textContent = `${post.title}`;
  postContainer.appendChild(heading);

  const headingTwo = document.createElement("h2");
  const date = new Date(post.created);
  const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
  const formattedDate = date.toLocaleString(undefined, options);
  headingTwo.textContent = `Posted: ${formattedDate}`;
  postContainer.appendChild(headingTwo);

  const postContent = document.createElement("div");
  postContent.classList.add("post-content");
  postContainer.appendChild(postContent);

  const body = document.createElement("p");
  body.innerText = post.body;
  postContent.appendChild(body);

  if (post.media) {
    const img = document.createElement("img");
    img.src = post.media;
    img.alt = `Image from ${post.title}`;
    img.classList.add("img-fluid");
    postContent.appendChild(img);
  }

  const author = document.createElement("p");
  author.innerText = `Author: ${post.author.name}`;
  postContent.appendChild(author);
}
