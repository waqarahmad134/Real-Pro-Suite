// @ts-nocheck
import React, { useState } from "react";
import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";
import { error_toaster, success_toaster } from "../../toaster/Toaster";
import { MdOutlineCancel } from "react-icons/md";
import { PostApi } from "../../../ApiClient/PostApi";
import useFetch from "../../../ApiClient/GetApi";
import { Loader2 } from "../../loader/Loader";
import {
  ContentCSS,
  MobileTopCSS,
  TopCSS,
  LeftCSS,
  MobileLeftCSS,
  MobileContentCSS,
} from "../../../Utils/Styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ListItem, { MiniItem } from "../layout/leftbarElements/ListItem";
import { CiMenuBurger } from "react-icons/ci";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaRegUser, FaSearch } from "react-icons/fa";

export default function Profile() {
  const { data, reFetch } = useFetch("admin_profile");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, SetLoading] = useState(false);
  const [tabs, setTabs] = useState(1);
  console.log("🚀 ~ Profile ~ tabs:", tabs);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const logoutAdmin = async () => {
    SetLoading(true);
    const res = await PostApi("logout", {
      accessToken: localStorage.getItem("accessToken"),
    });
    if (res.data.status === "1") {
      success_toaster(res.data.message);
      SetLoading(false);
      localStorage.removeItem("loginstatus");
      localStorage.removeItem("accessToken");
      navigate("/login");
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };

  const update_profile = async () => {
    // if(formData.firstName === "" || formData.firstName === null)
    // {
    //   error_toaster("First Name is required");
    //   return false;
    // }
    // if(formData.lastName === "" || formData.lastName === null)
    // {
    //   error_toaster("Last Name is required");
    //   return false;
    // }
    // if(formData.phone === "" || formData.phone === null)
    // {
    //   error_toaster("PHone No. is required");
    //   return false;
    // }
    // if(formData.email === "" || formData.email === null)
    // {
    //   error_toaster("Email is required");
    //   return false;
    // }
    // if(formData.password === "" || formData.password === null)
    // {
    //   error_toaster("Password is required");
    //   return false;
    // }
    // if(formData.confirmPassword === "" || formData.confirmPassword === null)
    // {
    //   error_toaster("Confirmed Password is required");
    //   return false;
    // }
    SetLoading(true);
    const res = await PostApi("update_profile", {
      firstName:
        formData.firstName === "" ? data?.data?.firstName : formData.firstName,
      lastName:
        formData.lastName === "" ? data?.data?.lastName : formData.lastName,
      phone: formData.phone === "" ? data?.data?.phone : formData.phone,
      email: formData.email === "" ? data?.data?.email : formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    });

    if (res.data.status === "1") {
      success_toaster("Profile Update Sucessfully");
      SetLoading(false);
      empty_input_fields();
      reFetch();
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const empty_input_fields = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const [menu, setMenu] = useState(false);
  const [canvas, setCanvas] = useState(false);
  const handleCanvas = () => {
    setCanvas(!canvas);
  };

  return (
    <>
      <div className={canvas !== true ? LeftCSS : MobileLeftCSS}>
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <img src="/images/logo.png" alt="logo" className="w-44" />
          </Link>
          <div className="block md:hidden">
            <MdOutlineCancel
              onClick={handleCanvas}
              size={24}
              className="cursor-pointer text-white"
            />
          </div>
        </div>
        <div className="h-full">
          <ul className="flex flex-col gap-y-7 h-4/5 overflow-auto sidebar">
            <li
              onClick={() => {
                setTabs(1);
                setCanvas(false);
              }}
              className="text-white hover:text-themeBlue cursor-pointer"
            >
              Profile Overview
            </li>
            <li
              onClick={() => {
                setTabs(2);
                setCanvas(false);
              }}
              className="text-white hover:text-themeBlue cursor-pointer"
            >
              General Info
            </li>
            <li
              onClick={() => {
                setTabs(3);
                setCanvas(false);
              }}
              className="text-white hover:text-themeBlue cursor-pointer"
            >
              Contact Info
            </li>
            <li
              onClick={() => {
                setTabs(4);
                setCanvas(false);
              }}
              className="text-white hover:text-themeBlue cursor-pointer"
            >
              Professional Details
            </li>
            <li
              onClick={() => {
                setTabs(5);
                setCanvas(false);
              }}
              className="text-white hover:text-themeBlue cursor-pointer"
            >
              Personal Details
            </li>
            <li
              onClick={() => {
                setTabs(6);
                setCanvas(false);
              }}
              className="text-white hover:text-themeBlue cursor-pointer"
            >
              Awards
            </li>
          </ul>
          <div className="flex items-center gap-x-8 absolute bottom-7">
            <MiniItem path="/" icon="10" />
            {loading ? (
              <p>Loading...</p>
            ) : (
              <button onClick={logoutAdmin} style={{ color: "white" }}>
                <MiniItem icon="12" />
              </button>
            )}
          </div>
        </div>
      </div>
      <nav className={canvas !== true ? TopCSS : MobileTopCSS}>
        <div className="bg-white px-5 py-4 flex items-center justify-between rounded-lg">
          <div className="flex items-center gap-x-2">
            <CiMenuBurger
              onClick={handleCanvas}
              size={24}
              className="cursor-pointer"
            />
            <h1 className="font-medium text-2xl">Update Profile</h1>
          </div>
          <div className="hidden md:block">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaSearch className="text-gray-400" />
              </InputLeftElement>
              <Input type="tel" placeholder="Phone number" />
            </InputGroup>
          </div>
          <div className="relative">
            <div className="flex items-center gap-x-4">
              <button
                onClick={() => setMenu(true)}
                className="bg-themeBlue p-2 rounded-md text-white border border-themeBlue hover:text-themeBlue hover:bg-transparent hover:border-themeBlue"
              >
                <FaRegUser size={28} />
              </button>
            </div>
            {menu ? (
              <div className="bg-white shadow-xl rounded-lg absolute w-64 top-16 right-0 z-50">
                <div className="p-5">
                  <div className="text-end">
                    <button onClick={() => setMenu(false)}>x</button>
                  </div>
                  <div className="text-center">
                    <img
                      className="w-24 mx-auto"
                      src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
                      alt=""
                    />
                    <h3 className="font-semibold">Sandy MCalpine</h3>
                    <h3 className="text-black text-opacity-50 text-sm">
                      SandyMCalpine@gmail.com
                    </h3>
                    <Link
                      target="_blank"
                      className="text-blue-600 text-lg"
                      to={"/profile"}
                    >
                      Update Profile
                    </Link>
                    <hr className="my-3" />
                    <div>
                      <ul className="text-start text-black text-opacity-50">
                        <li>Referrals</li>
                        <li>View my profile</li>
                        <li>Settings</li>
                        <li>Reservations</li>
                        <li>Pay Bill</li>
                      </ul>
                    </div>
                    <Link to={"/login"} className="text-blue-600 text-lg">
                      Logout
                    </Link>
                  </div>
                </div>

                <div className="bg-gray-300 text-gray-500 text-[10px] flex justify-center items-center p-3">
                  <h5 className="pr-3 border-r-2 border-gray-600">
                    User Agreement
                  </h5>
                  <h5 className="pl-3">Privacy Policy</h5>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
      <section className={canvas !== true ? ContentCSS : MobileContentCSS}>
        {loading ? (
          <Loader2 />
        ) : (
          <>
            {/* <div className="flex flex-wrap gap-x-3 gap-y-3 my-3">
              <div>
                <button className="text-base text-lg-sm text-xl-md bg-themeBlue text-white rounded-sm shadow-md border border-themeBlue hover:border hover:border-themeBlue py-1 px-3 md:w-44 w-full mx-auto">
                  Profile Overview
                </button>
              </div>
              <div>
                <button className="text-themeBlue rounded-sm shadow-md border border-themeBlue hover:border hover:border-themeBlue hover:bg-themeBlue hover:text-white py-1 px-3 md:w-44 w-full mx-auto">
                  General Info
                </button>
              </div>
              <div>
                <button className="text-themeBlue rounded-sm shadow-md border border-themeBlue hover:border hover:border-themeBlue hover:bg-themeBlue hover:text-white py-1 px-3 md:w-44 w-full mx-auto">
                  Contact Info
                </button>
              </div>
              <div>
                <button className="text-themeBlue rounded-sm shadow-md border border-themeBlue hover:border hover:border-themeBlue hover:bg-themeBlue hover:text-white py-1 px-3 md:w-44 w-full mx-auto">
                  Professional Details
                </button>
              </div>
              <div>
                <button className="text-themeBlue rounded-sm shadow-md border border-themeBlue hover:border hover:border-themeBlue hover:bg-themeBlue hover:text-white py-1 px-3 md:w-44 w-full mx-auto">
                  Personal Details
                </button>
              </div>
              <div>
                <button className="text-themeBlue rounded-sm shadow-md border border-themeBlue hover:border hover:border-themeBlue hover:bg-themeBlue hover:text-white py-1 px-3 md:w-44 w-full mx-auto">
                  Awards
                </button>
              </div>
            </div> */}
            {tabs === 1 ? (
              <div className="bg-white p-10 space-y-6">
                <h3 className="text-lg text-gray-500 font-semibold">
                  General Info
                </h3>
                <hr />
                <div className="grid md:grid-cols-2 gap-x-5 gap-y-4">
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-lg">Sandy Mcapline</h4>
                      <p className="text-black text-opacity-50">
                        Remix ID : 10002733
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg">Re/Max Executive</h4>
                      <p className="text-black text-opacity-50">
                        121 roing road suit{" "}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg">Re/Max Executive</h4>
                      <p className="text-black text-opacity-50">
                        121 roing road suit{" "}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <img
                      className="ml-auto"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU"
                      alt=""
                    />
                  </div>
                </div>
                <h3 className="text-lg text-gray-500 font-semibold">
                  Phone Numbers
                </h3>
                <hr />
                <div className="grid md:grid-cols-2 gap-x-5 gap-y-4">
                  <div className="space-y-2">
                    <div>
                      <p className="text-lg text-black text-opacity-50">
                        Mobile (Cell) : (704) 746-5638
                      </p>
                      <p className="text-lg text-black text-opacity-50">
                        Main Office : (704) 664-5638
                      </p>
                      <p className="text-lg text-black text-opacity-50">
                        Direct : (383) 1243-5638
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg text-gray-500 font-semibold">Emails</h3>
                <hr />
                <div className="grid md:grid-cols-2 gap-x-5 gap-y-4">
                  <div className="space-y-2">
                    <div>
                      <p className="text-lg text-black text-opacity-50">
                        mexcy@gmail.com
                      </p>
                      <p className="text-lg text-black text-opacity-50">
                        mexcy.developer@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div>
                    <button
                      onClick={update_profile}
                      className="bg-themeBlue text-white rounded py-1 px-8 border border-themeBlue hover:text-themeBlue hover:bg-white"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-white p-10 space-y-6">
                  <p className="text-lg text-gray-500 font-semibold">
                    NAME & TITLE
                  </p>
                  <div className="grid md:grid-cols-2 gap-x-5 gap-y-4">
                    <div className="space-y-2">
                      <div>
                        <label>Name</label>
                      </div>
                      <input
                        onChange={onChange}
                        name="firstName"
                        value={formData.firstName}
                        className="py-3 px-8 bg-themeGray3 focus:outline-gray-200 w-full"
                        placeholder={data?.data?.firstName ?? ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <div>
                        <label>Team</label>
                      </div>

                      <input
                        onChange={onChange}
                        name="lastName"
                        value={formData.lastName}
                        className="py-3 px-8 bg-themeGray3 focus:outline-gray-200 w-full"
                        placeholder={data?.data?.lastName ?? ""}
                      />
                    </div>
                  </div>
                  <p className="text-lg text-gray-500 font-semibold">
                    DEMOGRAPHICS
                  </p>
                  <div className="grid md:grid-cols-2 gap-x-5 gap-y-4">
                    <div className="space-y-2">
                      <div>
                        <label>Birth Date</label>
                      </div>
                      <input
                        onChange={onChange}
                        name="firstName"
                        value={formData.firstName}
                        className="py-3 px-8 bg-themeGray3 focus:outline-gray-200 w-full"
                        placeholder={data?.data?.firstName ?? ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <div>
                        <label>Gender</label>
                      </div>
                      <input
                        onChange={onChange}
                        name="lastName"
                        value={formData.lastName}
                        className="py-3 px-8 bg-themeGray3 focus:outline-gray-200 w-full"
                        placeholder={data?.data?.lastName ?? ""}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div>
                      <button
                        onClick={update_profile}
                        className="bg-themeBlue text-white rounded py-1 px-8 border border-themeBlue hover:text-themeBlue hover:bg-white"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </section>
    </>
  );
}
