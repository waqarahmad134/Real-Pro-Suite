// @ts-nocheck
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { PostApi } from "../../../ApiClient/PostApi";
import Sidebar from "./Sidebar";
import { error_toaster, success_toaster } from "../../toaster/Toaster"

import { Loader2 } from "../../loader/Loader";
export default function NewPassword() {

  const navigate = useNavigate();
  const [data, setData] = useState({ confirm_password: "", password: "" });
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const login = async (event) => {
    event.preventDefault();

    if (data.confirm_password === "") {
      error_toaster("Confirm Password is required!");
      return false;
    }

    else if (data.password === "") {
      error_toaster("Password is required!");
      return false;
    }
    else if(data.password !== data.confirm_password)
    {
        error_toaster("Confirm Password mismatch!");
        return false;
    }

    else {
      setLoading(true);
      const res = await PostApi("change_password_after_otp", {
        email: localStorage.getItem("email"),
        password: data.password,
      });

      if (res.data.status === "1") {
        setLoading(false);
        success_toaster(res.data.message);
        navigate("/login");
       
      }
      else {
        setLoading(false);
        success_toaster(res.data.message);
      }
    }


  }
  const body = "body {background: #FFFFFF !important}";
  const inputStyle =
    "bg-themeGray border-none font-normal sm:text-xl text-lg px-5 py-3 rounded-lg placeholder:text-black placeholder:text-opacity-40 focus:outline-none";
  return (
    <>
      <style>{body}</style>
      <section className="grid lg:grid-cols-2 h-[100vh]">
        <Sidebar />
        {
          loading ? <Loader2 /> :
            <div className="xl:w-1/2 lg:w-3/4 md:w-1/2 sm:w-2/3 w-4/5 mx-auto flex flex-col justify-center gap-y-8">
              <h1 className="font-bold sm:text-5xl text-4xl">New Password</h1>
              <div className="flex flex-col gap-y-4">
             
                <input
                  type="password"
                  onChange={onChange}
                  value={data.password}
                  name="password"
                  placeholder="Password"
                  className={inputStyle}
                />
                <input
                  type="password"
                  onChange={onChange}
                  value={data.confirm_password}
                  name="confirm_password"
                  placeholder="Confirm Password"
                  className={inputStyle}
                />
              </div>
          
              <button onClick={login} className="bg-themeBlue text-white font-medium sm:text-xl text-lg py-3 px-8 rounded-md w-full border border-themeBlue hover:bg-transparent hover:text-themeBlue">
                Submit
              </button>
         
            </div>
        }
      </section>
    </>
  );
}
