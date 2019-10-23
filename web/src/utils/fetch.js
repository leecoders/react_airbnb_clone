import { fetchUrl } from "../configs/fetch.js";

const fetchSignInResult = (id, password) => {
  return fetch(fetchUrl + "users/signin", {
    method: "POST",
    body: JSON.stringify({ id, password }),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  })
    .then(res => res.json())
    .then(response => response)
    .catch(error => "error");
};

const fetchSignUpResult = (id, password, name) => {
  return fetch(fetchUrl + "users/create-user", {
    method: "POST",
    body: JSON.stringify({ id, password, name }),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  })
    .then(res => res.json())
    .then(response => response)
    .catch(error => "error");
};

export { fetchSignInResult, fetchSignUpResult };
