import axios from "axios";

//{credential: email or username, password}
//
//
const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

// data {username: ricardo,AND/OR repo_name: banana}
export const postRootApi = data => axios.post(`/api`, data, config);

export const getRootApi = (username, repo_name = "") =>
  axios.get(`/api/${username}/${repo_name}`);

export const getUserRepos = username => axios.get(`/api/${username}`);
