// @ts-nocheck
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PostApi } from "../../../ApiClient/PostApi";
import { error_toaster, success_toaster } from "../../toaster/Toaster";
import ListItem, { MiniItem } from "./leftbarElements/ListItem";

export default function Leftbar() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [loading, SetLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [permissions, setPermissions] = useState([]);

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
    <div className="bg-white md:w-52 lg:w-60 xl:w-[280px] absolute md:fixed h-full py-7 pl-8 pr-5 hidden md:flex flex-col gap-y-12">
      <Link to={"/"}>
        <img src="/images/logo.png" alt="logo" className="w-44" />
      </Link>
      <div className="h-full">
        <ul className="flex flex-col gap-y-7 h-4/5 overflow-auto sidebar">
          {permissions.length > 0 ? (
            permissions.map((per, index) => (
              <ListItem
                key={index}
                path={per?.permission?.value === 'agent_dashboard' ? '/' : `/${per?.permission?.value}` }
                text={per?.permission?.title}
                icon="1"
                opacity={location === "/" ? "opacity-100" : "opacity-60"}
              />
            ))
          ) : (
            <p>Loading permissions...</p>
          )}
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
  );
}
