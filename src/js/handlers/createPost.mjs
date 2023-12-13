import { createPost } from "../api/posts/index.mjs";

// This function is used to create a post
export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      try {
        // Send it to the API and get the new post's ID
        const newPost = await createPost(post);

        window.location.href = `/post/?id=${newPost.id}`;
      } catch (error) {
        alert(error.message);
      }
    });
  }
}
