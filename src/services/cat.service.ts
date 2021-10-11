import axios from "axios";

export const getCatsData = () => {
  return axios.get("https://api.thecatapi.com/v1/breeds?limit=25");
};
