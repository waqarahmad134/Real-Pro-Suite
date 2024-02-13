import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LoginCheck } from "./AuthCheck";


import { success_toaster } from "../components/toaster/Toaster";

export default function ProtectedRoutes(props) {
  const location = useLocation();

  // CheckRole(location.pathname.replace(/\//g, ""));

  LoginCheck();

  const { Component } = props;
  return (
    <>
      <Component />
    </>
  );
}
