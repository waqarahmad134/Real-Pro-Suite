import React from "react";
import Topbar from "./Topbar";
import Leftbar from "./Leftbar";

export default function MainLayout() {
  return (
    <div>
      <Leftbar />
      <Topbar main="Home" extend={false} />
    </div>
  );
}
