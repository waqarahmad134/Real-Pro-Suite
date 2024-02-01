import React, { useState } from "react";
import Topbar from "./Topbar";
import Leftbar from "./Leftbar";

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleValue = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Leftbar extend={isOpen} onClick={toggleValue}/>
      <Topbar main="Home" extend={isOpen} onClick={toggleValue} />
    </div>
  );
}
