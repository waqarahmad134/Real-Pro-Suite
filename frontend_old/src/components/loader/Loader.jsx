import React from "react";
import { Circles, Watch } from "react-loader-spinner";

export default function Loader() {
  return (
    <div
      className="fixed left-0 top-0 z-50 h-[100vh] w-full bg-yellow-200 flex flex-col 
        justify-center items-center gap-y-4"
    >
      <div>
        <Watch width="200" color="#124769" />
      </div>
      <p className="text-center font-medium text-xl text-themeBlue">
        Loading...
      </p>
    </div>
  );
}

export function Loader2() {
  return (
    <div
      className="relative left-0 top-0 z-50 h-full w-full flex flex-col 
        justify-center items-center gap-y-4"
    >
      <div>
        <Circles width={160} color="#124769" />
      </div>
      <p className="text-center font-medium text-xl text-themeBlue">
        Loading...
      </p>
    </div>
  );
}
