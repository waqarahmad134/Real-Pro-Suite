import React, { useState } from "react";
import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";
import { error_toaster, success_toaster } from "../../toaster/Toaster";
import { PostApi } from "../../../ApiClient/PostApi";
import useFetch from "../../../ApiClient/GetApi";
import { Loader2 } from "../../loader/Loader";

export default function SocialLinks() {
  const { data, reFetch } = useFetch("get_all_social_links");

  const [loading, SetLoading] = useState(false);
  const [input, setInput] = useState("");

  const add_social_link = async (type) => {
    if (input === "") {
      error_toaster("Link is required!");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("add_social_link", {
      link: input,
      type: type,
    });
    if (res.data.status === "1") {
      setInput("");
      success_toaster(res.data.message);
      SetLoading(false);
      reFetch();
    } else {
      SetLoading(false);
      error_toaster(res.data.message);
    }
  };
  return (
    <>
      <Leftbar />
      <Topbar main="Social Links" extend={false} />
      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right ">
        {loading ? (
          <Loader2 />
        ) : (
          <div className="grid lg:grid-cols-2 py-2 gap-x-2 gap-y-4">
            <div
              className="bg-white p-6 space-y-4 rounded-lg flex flex-col gap-3"
              style={{
                overflowY: "scroll",
              }}
            >
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold text-white bg-themeBlue p-1 rounded shadow-lg">Facebook Link</p>
                <img
                  src="/images/facebook.webp"
                  className="w-12 h-12 object-cover"
                  alt="facebook"
                  srcset=""
                />
              </div>
              <table className="table-auto">
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Current Link : {data?.data?.facebook?.link ?? ""}
                  </p>
                  <input
                    onChange={(e) => setInput(e.target.value)}
                    className="py-3 px-4 bg-themeGray  w-4/5"
                    placeholder="Enter new Link"
                  />
                  <button
                    onClick={() => add_social_link("facebook")}
                    className="text-themeBlue py-1 px-10 border border-themeBlue rounded hover:bg-themeBlue hover:text-white   cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </table>
            </div>
            <div
              className="bg-white p-6 space-y-4 rounded-lg flex flex-col gap-3"
              style={{
                overflowY: "scroll",
              }}
            >
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold text-white bg-themeBlue p-1 rounded shadow-lg">Instagram Link</p>
                <img
                  src="/images/instagram.png"
                  className="w-12 h-12 object-cover"
                  alt="facebook"
                  srcset=""
                />
              </div>
              <table className="table-auto">
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Current Link : {data?.data?.instagram?.link ?? ""}
                  </p>
                  <input
                    onChange={(e) => setInput(e.target.value)}
                    className="py-3 px-4 bg-themeGray  w-4/5"
                    placeholder="Enter new Link"
                  />
                  <button
                    onClick={() => add_social_link("instagram")}
                    className="text-themeBlue py-1 px-10 border border-themeBlue rounded hover:bg-themeBlue hover:text-white   cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </table>
            </div>
            <div
              className="bg-white p-6 space-y-4 rounded-lg flex flex-col gap-3"
              style={{
                overflowY: "scroll",
              }}
            >
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold text-white bg-themeBlue p-1 rounded shadow-lg">Twitter Link</p>
                <img
                  src="/images/twitter.png"
                  className="w-12 h-12 object-cover"
                  alt="facebook"
                  srcset=""
                />
              </div>
              <table className="table-auto">
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Current Link : {data?.data?.twitter?.link ?? ""}
                  </p>
                  <input
                    onChange={(e) => setInput(e.target.value)}
                    className="py-3 px-4 bg-themeGray  w-4/5"
                    placeholder="Enter new Link"
                  />
                  <button
                    onClick={() => add_social_link("twitter")}
                    className="text-themeBlue py-1 px-10 border border-themeBlue rounded hover:bg-themeBlue hover:text-white   cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </table>
            </div>
            <div
              className="bg-white p-6 space-y-4 rounded-lg flex flex-col gap-3"
              style={{
                overflowY: "scroll",
              }}
            >
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold text-white bg-themeBlue p-1 rounded shadow-lg">Linkedin Link</p>
                <img
                  src="/images/linkedin.png"
                  className="w-12 h-12 object-cover"
                  alt="facebook"
                  srcset=""
                />
              </div>
              <table className="table-auto">
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Current Link : {data?.data?.linkedin?.link ?? ""}
                  </p>
                  <input
                    onChange={(e) => setInput(e.target.value)}
                    className="py-3 px-4 bg-themeGray  w-4/5"
                    placeholder="Enter new Link"
                  />
                  <button
                    onClick={() => add_social_link("linkedin")}
                    className="text-themeBlue py-1 px-10 border border-themeBlue rounded hover:bg-themeBlue hover:text-white   cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </table>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
