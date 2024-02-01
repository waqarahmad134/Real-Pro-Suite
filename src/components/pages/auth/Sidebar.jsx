import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-themeBlue lg:py-12 py-4 lg:px-12 px-2 flex lg:flex-col items-center justify-center lg:gap-y-12">
      <div className="lg:block hidden">
        <img
          src="/images/auth/cart.webp"
          alt="cart"
          className="xl:w-[440px] lg:w-80"
        />
      </div>
      <Link to={"/"} className="p-0">
        <img src="/images/logo.webp" alt="logo" className="xl:w-60 w-52" />
      </Link>
      {/* <p className="font-normal xl:text-2xl lg:text-xl text-white text-center xl:w-4/5 mx-auto lg:block hidden">
        Lorem ipsum dolor sit amet consectetur. Vitae cras tortor nisl felis
        ultricies odio elementum ut. Sagittis mattis mauris commodo cras. Amet
        pellentesque morbi mauris blandit. Eu in at lectus dolor libero at
        integer tempus proin.
      </p> */}
    </div>
  );
}
