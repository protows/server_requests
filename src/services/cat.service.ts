import axios from "axios";

export const getCarsData = () => {
  return axios.get("https://dog.ceo/api/breed/hound/afghan/images/random/3");
};
