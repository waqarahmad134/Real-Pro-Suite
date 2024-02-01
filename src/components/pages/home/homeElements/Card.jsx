import React from "react";
import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    <div className="text-center">
      <Link to={props.location} target="_blank">
        <div className="bg-white rounded-lg w-full flex justify-center items-center sm:w-44 sm:h-40 mx-auto p-5">
          <img
            // src={`/images/icon${props.icon}.webp`}
            src={`${props.icon}`}
            alt={props.alt}
            className="h-20 mx-auto object-contain"
          />
        </div>
      </Link>
      <h5 className="font-normal text-lleg my-3">{props.title}</h5>
    </div>
  );
}
