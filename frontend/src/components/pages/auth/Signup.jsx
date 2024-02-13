// @ts-nocheck
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PostApi } from "../../../ApiClient/PostApi";
import Sidebar from "./Sidebar";
import { error_toaster, success_toaster } from "../../toaster/Toaster"
import { setLoginStatus } from "../../../Utils/AuthCheck";
import { Loader2 } from "../../loader/Loader";



export default function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const signup = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (data.firstName === "") {
      error_toaster("First Name is required!");
      return false;
    }
    else if (data.lastName === "") {
      error_toaster("Last Name is required!");
      return false;
    }
    else if (data.email === "") {
      error_toaster("Email is required!");
      return false;
    }
    else if (data.phone === "") {
      error_toaster("Phone is required!");
      return false;
    }
    else if (data.password === "") {
      error_toaster("Password is required!");
      return false;
    }
    else if (data.confirmPassword === "") {
      error_toaster("confirm Password is required!");
      return false;
    }
    else if (data.password !== data.confirmPassword) {
      error_toaster("confirm Password mismatch!");
      return false;
    }
    else {
      const res = await PostApi("registration", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        password: data.password,
      });

      if (res.data.status === "1") {
        setLoading(false);
        setLoginStatus(false);
        localStorage.setItem("accessToken", res.data.data.accessToken);
        navigate("/");
        success_toaster(res.data.message);
      }
      else {
        setLoading(false);
        success_toaster(res.data.message);
      }
    }


  }
  const body = "body {background: #FFFFFF !important}";
  const inputStyle =
    "bg-themeGray border-none font-normal text-xl px-5 py-3 rounded-lg placeholder:text-black placeholder:text-opacity-40 focus:outline-none";
  return (
    <>
      <style>{body}</style>
      <section className="grid lg:grid-cols-2 h-[100vh]">
        <Sidebar />
        {
          loading ? <Loader2 /> : <div className="xl:w-1/2 lg:w-3/4 md:w-1/2 sm:w-2/3 w-4/5 mx-auto flex flex-col justify-center gap-y-8">
            <h1 className="font-bold sm:text-5xl text-4xl">Sign up</h1>

            <div className="flex flex-col gap-y-4">
              <input
                onChange={onChange}
                type="name"
                value={data.firstName}
                name="firstName"
                placeholder="First Name"
                className={inputStyle}
              />
              <input
                type="name"
                name="lastName"
                onChange={onChange}
                value={data.lastName}
                placeholder="Last Name"
                className={inputStyle}
              />
              <input
                type="email"
                name="email"
                onChange={onChange}
                value={data.email}
                placeholder="Email Address"
                className={inputStyle}
              />
              <input
                type="name"
                name="phone"
                onChange={onChange}
                value={data.phone}
                placeholder="Phone"
                className={inputStyle}
              />
              <input
                type="password"
                name="password"
                onChange={onChange}
                value={data.password}
                placeholder="Create password"
                className={inputStyle}
              />
              <input
                type="password"
                name="confirmPassword"
                onChange={onChange}
                value={data.confirmPassword}
                placeholder="Confirm password"
                className={inputStyle}
              />
            </div>
            <button onClick={signup} className="bg-themeBlue text-white font-medium sm:text-xl text-lg py-3 px-8 rounded-md w-full border border-themeBlue hover:bg-transparent hover:text-themeBlue">
              Sign up
            </button>
            <Link to={"/login"} className="font-normal text-xl text-center">
              Already have a account?
            </Link>
          </div>
        }

      </section>
    </>
  );
}
