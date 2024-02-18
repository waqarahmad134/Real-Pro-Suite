import axios from "axios";
import { BASE_URL } from "../Utils/urls";


export const DeleteApi = async (url, postData) => {
  console.log(postData);

  let config = {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  };
  try {
    const res = await axios.delete(BASE_URL + url, postData, config);
    console.log(res);
    return res;
  } catch (err) {}
};
