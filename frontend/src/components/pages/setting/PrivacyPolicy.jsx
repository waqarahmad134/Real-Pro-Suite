import React  from "react";
import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";


import useFetch from "../../../ApiClient/GetApi";

import Privacy from "../../summernote/Privacy";

export default function PrivacyPolicy() {


  return (
    <>
      <Leftbar />
      <Topbar main="Setting" extend={true} sub="Privacy & Policy" />
      
      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        <Privacy placeholder={'Write something...'}/>
       
      </section>
    </>
  );
}
