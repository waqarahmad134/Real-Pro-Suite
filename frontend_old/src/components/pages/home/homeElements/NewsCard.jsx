import React from "react";
import { FaBookmark } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

export default function NewsCard(props) {
  return (
    <div className="bg-white rounded-lg p-5 ">
      <div className="grid grid-cols-2">
        <div className={`{props.order}`}>
          <img
            className="rounded-lg "
            src={`${props.img}`}
            alt=""
          />
        </div>
        <div className="p-5">
          <h5 className="text-gray-400 text-sm">MORE TO KNOW</h5>
          <h2 className="text-2xl font-semibold">{props.title}</h2>
          <h5 className="text-gray-400 text-sm">
          {props.desc}
          </h5>
        </div>
      </div>
      <div className="bg-gray-300 rounded-md">
        <div className="flex justify-between items-center px-5 py-1">
          <h4 className="text-gray-500 flex gap-x-2 items-center">
            <FaBookOpen /> News
          </h4>
          <FaBookmark className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}
