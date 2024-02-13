// @ts-nocheck
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PostApi } from "../../../ApiClient/PostApi";
import Sidebar from "./Sidebar";
import { error_toaster, success_toaster } from "../../toaster/Toaster"

import { Loader2 } from "../../loader/Loader";
export default function ForgetPassword() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const forget_password = async (event) => {
        event.preventDefault();

        if (email === "") {
            error_toaster("Email is required!");
            return false;
        }
        else {
            setLoading(true);
            const res = await PostApi("forget_password", {
                email: email,

            });

            if (res.data.status === "1") {
                setLoading(false);
                success_toaster(res.data.message);
                navigate("/verify_otp");
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
                            <h1 className="font-bold sm:text-5xl text-4xl">Forget Password</h1>
                            <div className="flex flex-col gap-y-4">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    placeholder="Enter your email address"
                                    className={inputStyle}
                                />

                            </div>

                            <button onClick={forget_password} className="bg-themeBlue text-white font-medium sm:text-xl text-lg py-3 px-8 rounded-md w-full border border-themeBlue hover:bg-transparent hover:text-themeBlue">
                                Submit
                            </button>

                            <Link
                                to={"/signup"}
                                className="text-themeBlue font-medium sm:text-xl text-lg text-center py-3 px-8 rounded-md w-full border border-themeBlue hover:bg-themeBlue hover:text-white"
                            >
                                Create new account
                            </Link>
                        </div>
                }
            </section>
        </>
    );
}
