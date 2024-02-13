// @ts-nocheck
import React, { useState } from "react";
import { Calendar } from "react-calendar";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../ApiClient/GetApi";
import { PostApi } from "../../../ApiClient/PostApi";
import { Loader2 } from "../../loader/Loader";
import { error_toaster } from "../../toaster/Toaster";
import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";
import SaleCard from "./walletElements/SaleCard";

export default function Wallet() {
  const navigate = useNavigate();
  const { data } = useFetch("my_wallet");
  const [loading, SetLoading] = useState(false);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const filter = async () => {
    if (start === "") {
      error_toaster("Start Date is required!");
      return false;
    }
    if (end === "") {
      error_toaster("End Date is required!");
      return false;
    }
    let res = await PostApi("filter_waller", {
      start: start,
      end: end,
    });
    if (res.data.status === "1") {
      navigate("/filter_wallet", { state: { data: res.data.data } });
    }
  };
  const liStyle = "font-normal text-base text-black text-opacity-60";
  const li2Style = "font-bold text-base";
  return (
    <>
      <Leftbar />
      <Topbar main="My Wallet" extend={false} />
      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        {data.length === 0 ? (
          <Loader2 />
        ) : (
          <>
            {" "}
            <div className="flex gap-x-2">
              <div className="flex flex-col">
                <label>From</label>
                <input
                  onChange={(e) => setStart(e.target.value)}
                  className="py-3 px-6"
                  type="date"
                />
              </div>
              <div className="flex flex-col">
                <label>To</label>
                <input
                  onChange={(e) => setEnd(e.target.value)}
                  className="py-3 px-6"
                  type="date"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={filter}
                  className="bg-themeBlue text-white py-3 px-12 rounded -lg border border-themeBlue hover:bg-white hover:text-themeBlue"
                >
                  Filter
                </button>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-7">
              <div className="2xl:col-span-4 xl:col-span-6 col-span-12 xl:row-span-2 bg-white py-8 px-7 space-y-6 rounded-lg">
                <h1 className="font-bold text-2xl">Earning in Month</h1>
                <div>
                  <img
                    src="/images/earning.webp"
                    alt="earning"
                    className="w-52 block mx-auto"
                  />
                </div>
                <hr className="h-[1px] bg-black bg-opacity-40 border-none" />
                <div className="grid grid-cols-2">
                  <ul className="space-y-3">
                    <li className={liStyle}>Earning in this Month :</li>
                  </ul>
                  <ul className="space-y-3">
                    <li className={li2Style}>
                      ${data?.data?.total_earning.toFixed(1) ?? "0.00"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="2xl:col-span-4 xl:col-span-6 col-span-12 bg-white pt-8 px-7 space-y-6 rounded-lg">
                <SaleCard
                  title="Monthly Sale"
                  quantity={data?.data?.monthly_total.toFixed(1)}
                  sub="Monthly Income"
                  Icon={FaArrowDown}
                  bgColor="bg-themeOrange"
                  textColor="text-themeOrange"
                  percent={65}
                />
              </div>
              <div className="2xl:col-span-4 xl:col-span-6 col-span-12 bg-white py-8 px-7 space-y-6 rounded-lg">
                <SaleCard
                  title="Weekly Sale"
                  quantity={data?.data?.weekly_total.toFixed(1)}
                  sub="Weekly Income"
                  Icon={FaArrowUp}
                  bgColor="bg-themeGreen2"
                  textColor="text-themeGreen2"
                  percent={75}
                />
              </div>
              <div className="2xl:col-span-4 xl:col-span-6 col-span-12 bg-white py-8 px-7 space-y-6 rounded-lg">
                <SaleCard
                  title="Today Sale"
                  quantity={data?.data?.today_total.toFixed(1)}
                  sub="Today Income"
                  Icon={FaArrowUp}
                  bgColor="bg-themeGreen2"
                  textColor="text-themeGreen2"
                  percent={75}
                />
              </div>
              <div className="2xl:col-span-4 xl:col-span-6 col-span-12 bg-white pt-8 px-7 space-y-6 rounded-lg">
                <SaleCard
                  title="Total Sale"
                  quantity={data?.data?.total_earning.toFixed(1)}
                  sub="Total Income"
                  Icon={FaArrowDown}
                  bgColor="bg-themeOrange"
                  textColor="text-themeOrange"
                  percent={65}
                />
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
