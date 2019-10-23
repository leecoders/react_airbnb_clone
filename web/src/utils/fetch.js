import { fetchUrl } from "../configs/fetch.js";

const fetchSignInResult = (id, password) => {
  return fetch(fetchUrl + "users/signin", {
    method: "POST",
    body: JSON.stringify({ id, password }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => response)
    .catch(error => "error");
};

export { fetchSignInResult };
