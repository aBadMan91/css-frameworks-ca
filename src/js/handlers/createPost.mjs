import { createPost } from "../api/posts/index.mjs";

export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", async (event) => {
      // make the event handler async
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      // Send it to the API and get the new post's ID
      const newPost = await createPost(post);

      // Redirect to the new post's page
      window.location.href = `/post/?=id${newPost.id}`;
    });
  }
}
