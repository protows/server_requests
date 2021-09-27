import axios from "axios";

export const getAllBreeds = () => {
  return axios.get("https://dog.ceo/api/breeds/list/all");
};
