// @ts-nocheck
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PostApi } from "../../../ApiClient/PostApi";
import Sidebar from "./Sidebar";
import { error_toaster, success_toaster } from "../../toaster/Toaster";
import { setLoginStatus } from "../../../Utils/AuthCheck";
import { Loader2 } from "../../loader/Loader";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import  {useSelector,useDispatch} from "react-redux";
// import { incNumber } from '../../../action/index';

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const login = async (event) => {
    event.preventDefault();
    if (data.email === "") {
      error_toaster("Email is required!");
      return false;
    } else if (data.password === "") {
      error_toaster("Password is required!");
      return false;
    } else {
      setLoading(true);
      const res = await PostApi("auth/v1/signin", {
        email: data.email,
        password: data.password,
      });

      if (res.data.status === "1") {
        console.log(res);
        setLoading(false);
        setLoginStatus(true);
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem(
          "permissions",
          JSON.stringify(res?.data?.data?.role?.rolePermissions)
        );
        navigate("/");
        success_toaster(res.data.message);
      } else {
        setLoading(false);
        error_toaster(res.data.message);
      }
    }
  };
  const body = "body {background: #FFFFFF !important}";
  const inputStyle =
    "bg-themeGray border-none font-normal w-full sm:text-xl text-lg px-5 py-3 rounded-lg placeholder:text-black placeholder:text-opacity-40 focus:outline-none";
  return (
    <>
      <style>{body}</style>
      <section className="h-[100vh] bg-themeBlue flex items-center justify-center">
        {loading ? (
          <Loader2 />
        ) : (
          <div className="md:w-[30%] w-4/5">
            <div className="bg-white shadow-2xl rounded-md mx-auto flex flex-col justify-center gap-y-8 p-5">
              <div>
                <img src="/images/logo.png" alt="" />
              </div>
              {/* <h1 className="font-bold sm:text-5xl text-4xl text-center">Sign in</h1> */}
              <div className="flex flex-col gap-y-4 mt-10">
                <input
                  type="email"
                  name="email"
                  onChange={onChange}
                  value={data.email}
                  placeholder="Email"
                  className={inputStyle}
                />
                <div className="relative mb-20">
                  <button
                    onClick={() => setVisible(!visible)}
                    type="button"
                    className="text-black text-opacity-40 absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {visible ? (
                      <AiOutlineEye size={28} />
                    ) : (
                      <AiOutlineEyeInvisible size={28} />
                    )}
                  </button>
                  <input
                    type={visible ? "text" : "password"}
                    onChange={onChange}
                    value={data.password}
                    name="password"
                    placeholder="Password"
                    className={inputStyle}
                  />
                </div>
              </div>
              <button
                type="submit"
                onClick={login}
                className="bg-themeRed text-white font-medium sm:text-xl text-lg py-3 px-8 rounded-md w-full border border-themeRed hover:bg-transparent hover:text-themeRed"
              >
                Sign in
              </button>
              <div className="text-center">
                <h4>
                  Forgot Password? <Link to="/"> Click Here</Link>
                </h4>
              </div>
            </div>
            <div className="bg-white text-center shadow-2xl rounded-md p-5 mt-5">
              <h3 className="text-themeBlue font-semibold">
                REALPRO INTERNATIONAL INC
              </h3>
              <h4 className="text-themeBlue">
                For Support Contact : 800-555-5555
              </h4>
              <h4 className="text-themeBlue">Support@therealproway.com</h4>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
