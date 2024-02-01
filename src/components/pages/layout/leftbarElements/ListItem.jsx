import React from "react";
import { Link } from "react-router-dom";

export default function ListItem(props) {
  return (
    <li className={`text-${props.opacity} text-white`}>
      <Link
        to={props.path}
        className="inline-flex items-center gap-x-4 font-medium xl:text-base text-sm"
      >
        <img
          src={`/images/icon${props.icon}.webp`}
          alt="icon"
          className={`${props.opacity} max-w-[24px]`}
        />
        <span>{props.text}</span>
      </Link>
    </li>
  );
}

export function MiniItem(props) {
  return (
    <Link to={props.path}>
      <img
        src={`/images/icon${props.icon}.webp`}
        alt="logo"
        className="max-w-[24px]"
      />
    </Link>
  );
}
