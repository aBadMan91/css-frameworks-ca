import * as listeners from "./handlers/index.mjs";

// router function to handle different routes and sets up event listeners based on the current URL path
export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/profile/login/":
    case "/profile/login/index.html":
      listeners.setLoginFormListener();
      break;
    case "/profile/register/":
    case "/profile/register/index.html":
      listeners.setRegisterFormListener();
      break;
    case "/post/create/":
    case "/post/create/index.html":
      listeners.setCreatePostFormListener();
      break;
    case "/post/edit/":
    case "/post/edit/index.html":
      listeners.setUpdatePostFormListener();
      break;
    case "/profile/edit/":
    case "/profile/edit/index.html":
      listeners.setUpdateProfileListener();
      break;
  }
}
