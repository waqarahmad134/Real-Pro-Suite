import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaGreaterThan, FaRegUser, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { error_toaster, success_toaster } from "../../toaster/Toaster";
import { PostApi } from "../../../ApiClient/PostApi";
import { MobileTopCSS, TopCSS } from "../../../Utils/Styles";
import { CiMenuBurger } from "react-icons/ci";

export default function Topbar(props) {
  const [menu, setMenu] = useState(false);
  const [canvas, setCanvas] = useState(false);
  const handleCanvas = () => {
    setCanvas(!canvas);
  };
  let navigate = useNavigate();

  const logoutAdmin = async () => {
    const res = await PostApi("logout", {
      accessToken: localStorage.getItem("accessToken"),
    });
    if (res.data.status === "1") {
      success_toaster(res.data.message);
      localStorage.removeItem("loginstatus");
      localStorage.removeItem("accessToken");
      navigate("/login");
    } else {
      error_toaster(res.data.message);
    }
  };
  return (
    <nav className={canvas !== true ? TopCSS : MobileTopCSS}>
      <div className="bg-white px-5 py-4 flex items-center justify-between rounded-lg">
        <div className="flex items-center gap-x-2">
          <CiMenuBurger
            onClick={handleCanvas}
            size={24}
            className="cursor-pointer"
          />
          <h1 className="font-medium text-2xl">{props.main}</h1>
        </div>
        <div>
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
                  <Link target="_blank" className="text-blue-600 text-lg" to={"/profile"}>
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
  );
}
