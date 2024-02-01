// @ts-nocheck
import React from "react";

export default function SaleCard(props) {
  const { Icon } = props;
  return (
    <>
      <h1 className="font-bold text-2xl">{props.title}</h1>
      <div className="grid grid-cols-2 items-center">
        <div className="space-y-1">
          <h1 className="font-bold text-4xl text-themeBlue">
            ${props.quantity}
          </h1>
          <span className="font-normal text-base text-black text-opacity-60">
            {props.sub}
          </span>
        </div>
        <div>
          <div className={`${props.bgColor} text-white w-fit py-4 px-12`}>
            <Icon size={60} />
          </div>
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <p
          className={`${props.textColor} font-normal text-xl text-end`}
          style={{
            width: (props.percent > 100 ? 100 + 5 : props.percent + 5) + "%",
          }}
        >
          {props.percent > 100 ? 100 : props.percent}%
        </p>
        <hr
          className={`${props.bgColor} h-1.5 border-none`}
          style={{
            width: (props.percent > 100 ? 100 : props.percent) + "%",
            clipPath: "polygon(0 0, 99% 0, 100% 100%, 0% 100%)",
          }}
        />
      </div>
    </>
  );
}
