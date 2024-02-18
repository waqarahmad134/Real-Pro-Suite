// @ts-nocheck
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PostApi } from "../../../ApiClient/PostApi";
import { error_toaster, success_toaster } from "../../toaster/Toaster";
import ListItem, { MiniItem } from "./leftbarElements/ListItem";
import { LeftCSS, MobileLeftCSS, TopCSS } from "../../../Utils/Styles";
import { CiMenuBurger } from "react-icons/ci";

export default function Leftbar(props) {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [loading, SetLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [permissions, setPermissions] = useState([]);
  console.log("🚀 ~ Leftbar ~ permissions:", permissions)

  useEffect(() => {
    const storedPermissions = localStorage.getItem("permissions");
    if (storedPermissions) {
      const parsedPermissions = JSON.parse(storedPermissions);
      setPermissions(parsedPermissions);
    }
  }, []);
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

  return (
    <div className={props.extend !== true ? LeftCSS : MobileLeftCSS}>
      <div className="">
        <div className="flex justify-center md:justify-end mb-4">
          <CiMenuBurger
            onClick={props.onClick}
            size={24}
            className="cursor-pointer"
          />
        </div>
        <Link to={"/"}>
          {props.extend !== true ? (
            <img src="/images/logo.png" alt="logo" className="w-44" />
          ) : (
            <img src="/images/favicon.webp" alt="logo" className="w-44" />
          )}
        </Link>
      </div>
      <div className="h-full">
        <ul className={`flex flex-col ${props.extend !== true ? "items-start" : "items-center"}  gap-y-7 h-4/5 overflow-auto sidebar`}>
          {permissions.length > 0 ? (
            permissions.map((per, index) => (
              <ListItem
                key={index}
                path={
                  per?.permission?.value === "agent_dashboard"
                    ? "/"
                    : `/${per?.permission?.value}`
                }
                text={
                  props.extend !== true ? per?.permission?.title : undefined
                }
                
                icon={per?.permission?.value}
                opacity={location === "/" ? "opacity-100" : "opacity-60"}
              />
            ))
          ) : (
            <p>Loading permissions...</p>
          )}
        </ul>
        {/* <div className="flex items-center gap-x-8 absolute bottom-7">
          <MiniItem path="/" icon="10" />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <button onClick={logoutAdmin} style={{ color: "white" }}>
              <MiniItem icon="12" />
            </button>
          )}
        </div> */}
      </div>
    </div>
  );
}
