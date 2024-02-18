import React from "react";

export default function Progress(props) {
  return (
    <div className="bg-gray-200 rounded-full h-2.5">
      <div
        className={`${props.colorScheme} h-2.5 rounded-full`}
        style={{ width: props.size + "%" }}
      ></div>
    </div>
  );
}
