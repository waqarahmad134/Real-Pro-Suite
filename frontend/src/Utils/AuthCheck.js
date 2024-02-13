import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./urls";
import axios from "axios";
export const getLoginStatus = () => {
  const items = localStorage.getItem("loginstatus");
  return items;
};

export const LoginCheck = async () => {
  const navigate = useNavigate();
  useEffect(() => {
    var header_config = {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    };
    axios.get(`${BASE_URL}login_check`, header_config).then((dat) => {
   
      if (dat.data.status === "0" || dat.data.status === "undefined") {
        
        navigate("/login");
      }
    });
    if (getLoginStatus() === null || getLoginStatus() === false) {
      navigate("/login");
    }
  });
};

export const setLoginStatus = (data) => {
  try {
    localStorage.setItem("loginStatus", data);
  } catch (err) {
    console.log(err);
  }
};
