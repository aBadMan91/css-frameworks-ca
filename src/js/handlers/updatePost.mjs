import { getPost, updatePost, removePost } from "../api/posts/index.mjs";

// This function is used to update or delete a post
export async function setUpdatePostFormListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    const deleteButton = document.querySelector("#deletePost");

    button.disabled = true;

    const post = await getPost(id);

    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags;
    form.media.value = post.media;

    button.disabled = false;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      // Send it to the API and let the user know it was updated
      try {
        await updatePost(post);
        alert("The post has been updated.");
        window.location.href = "/profile/";
      } catch (error) {
        alert(error.message);
      }
    });

    // Adds the posibility to delete a post and confirm and alert message before redirecting to the home page
    deleteButton.addEventListener("click", async () => {
      const confirmation = window.confirm("Are you sure you want to delete this post?");
      if (confirmation) {
        try {
          await removePost(id);
          alert("The post has been deleted.");
          window.location.href = "/profile/";
        } catch (error) {
          alert(error.message);
        }
      }
    });
  }
}
