import { getProfile } from "../api/profiles/index.mjs";
import { load } from "../storage/index.mjs";

// this function fetches the current profile from the local storage
export async function fetchProfileData() {
  const { name } = load("profile");
  const profile = await getProfile(name);

  console.log(profile);

  const profileContainer = document.getElementById("card-container");
  const profileHtml = createProfileHtml(profile);
  profileContainer.appendChild(profileHtml);

  return profile;
}

fetchProfileData();

// this function creates the html for the posts
export function createProfileHtml(profile) {
  const profileContainer = document.createElement("div");
  profileContainer.classList.add("profileCard");

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = profile.avatar;
  img.alt = "Profile picture";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "text-center");

  const name = document.createElement("h5");
  name.classList.add("card-title");
  name.textContent = profile.name;

  const description = document.createElement("p");
  description.classList.add("card-text");
  description.textContent = profile.description;

  const followers = document.createElement("p");
  followers.classList.add("card-text");
  followers.textContent = `Followers: ${profile._count.followers}`;

  const following = document.createElement("p");
  following.classList.add("card-text");
  following.textContent = `Following: ${profile._count.following}`;

  const editButtonProfile = document.createElement("a");
  editButtonProfile.href = "/profile/edit/";
  editButtonProfile.role = "button";
  editButtonProfile.classList.add("btn", "btn-primary", "mt-2");
  editButtonProfile.textContent = "Edit Profile";

  cardBody.append(name, description, followers, following, editButtonProfile);
  card.append(img, cardBody);
  profileContainer.appendChild(card);

  return profileContainer;
}
