import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBox(props) {
  return (
    <div className="relative">
      <input
        className={`w-full bg-white-200 pl-9 pr-10 text-black focus:outline-none dark:text-white xl:w-125 h-10 rounded-lg`}
        type="search"
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
      />
      {/* <button
        className="absolute right-0 top-0 bottom-0 px-3 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-r-lg"
      >
        <IoSearchOutline />
      </button> */}
    </div>
  );
};


