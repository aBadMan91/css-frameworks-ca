// This is a template for a single post
export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post");

  const link = document.createElement("a");
  link.classList.add("card", "my-4");
  link.href = `/post/?id=${postData.id}&title=${postData.title}`;
  link.style.textDecoration = "none";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.innerText = `${postData.title}`;
  title.style.textDecoration = "underline";

  const text1 = document.createElement("p");
  text1.classList.add("card-text");
  text1.innerText = `By user: ${postData.author.name}`;

  const text2 = document.createElement("p");
  text2.classList.add("card-text");
  const date = new Date(postData.created);
  const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
  const formattedDate = date.toLocaleString(undefined, options);
  text2.innerText = `Posted: ${formattedDate}`;

  cardBody.append(title, text1, text2);
  link.append(cardBody);

  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    img.classList.add("img-fluid");
    link.append(img);
  }

  post.append(link);

  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));
}
