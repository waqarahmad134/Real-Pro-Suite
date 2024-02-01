// @ts-nocheck
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { BsBoxSeam, BsExclamationOctagon, BsSearch } from "react-icons/bs";
import { RiShip2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import customStyles from "../../../dataTable/CustomStyles";
import Leftbar from "../../layout/Leftbar";
import Topbar from "../../layout/Topbar";
import Moment from "react-moment";

import useFetch from "../../../../ApiClient/GetApi";
import { PostApi } from "../../../../ApiClient/PostApi";
import { error_toaster, success_toaster } from "../../../toaster/Toaster";
import { Loader2 } from "../../../loader/Loader";

export default function InProcessOrders() {
  const navigate = useNavigate();
  const { data } = useFetch("pending_verification");
  const [loading, SetLoading] = useState(false);




  const measure_order = (id) => {
    navigate("/measured", { state: { id: id } });
  };
  const columns = [
    {
      name: "Sr #",
      selector: (row) => row.id,
      wrap: true,
      width: "100px",
    },
    {
      name: "Order ID",
      selector: (row) => row.order_id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      wrap: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      wrap: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];
  const monthly_data = [];
  const weekly_data = [];
  const today_data = [];
  const [query, setQuery] = useState("");
  const order_detail = (id) => {
    navigate("/arrived_orders/details", { state: { bookingId: id } });
  };
  const all = [];

  data?.data?.all?.map((order, index) => {
    if (query == "") {
      all.push({
        id: index + 1,
        order_id: order.id,
        name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
        price: "$" + order.totalPrice,
        date: <Moment format="D MMM , YYYY hh:mm a">{order.createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-4 py-1 rounded-md">
            Pending Verification
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[100px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Details
              </button>
              <button
                onClick={() => measure_order(order.id)}
                className="py-1 w-[80px] px-2 bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Measure
              </button>
            </div>
          </>
        ),
      });
    } else if (order?.id.toString().toLowerCase().match(query.toLowerCase())) {
      all.push({
        id: index + 1,
        order_id: order.id,
        name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
        price: "$" + order.totalPrice,
        date: <Moment format="D MMM , YYYY hh:mm a">{order.createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-4 py-1 rounded-md">
            {order.bookingStatus === "Arrived" ? "Pending Verification" : ""}
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[100px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Details
              </button>
              <button
                onClick={() => measure_order(order.id)}
                className="py-1 w-[80px] px-2 bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Measure
              </button>
            </div>
          </>
        ),
      });
    }
  });
  data?.data?.monthly?.map((order, index) => {
    if (query == "") {
      monthly_data.push({
        id: index + 1,
        order_id: order.id,
        name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
        price: "$" + order.totalPrice,
        date: <Moment format="D MMM , YYYY hh:mm a">{order.createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-4 py-1 rounded-md">
            {order.bookingStatus === "Arrived" ? "Pending Verification" : ""}
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[100px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Details
              </button>
              <button
                onClick={() => measure_order(order.id)}
                className="py-1 w-[80px] px-2 bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Measure
              </button>
            </div>
          </>
        ),
      });
    } else if (order?.id.toString().toLowerCase().match(query.toLowerCase())) {
      monthly_data.push({
        id: index + 1,
        order_id: order.id,
        name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
        price: "$" + order.totalPrice,
        date: <Moment format="D MMM , YYYY hh:mm a">{order.createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-4 py-1 rounded-md">
            {order.bookingStatus === "Arrived" ? "Pending Verification" : ""}
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[100px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Details
              </button>
              <button
                onClick={() => measure_order(order.id)}
                className="py-1 w-[80px] px-2 bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Measure
              </button>
            </div>
          </>
        ),
      });
    }
  });

  data?.data?.today?.map((order, index) => {
    if (query == "") {
      today_data.push({
        id: index + 1,
        order_id: order.id,
        name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
        price: "$" + order.totalPrice,
        date: <Moment format="D MMM , YYYY hh:mm a">{order.createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-4 py-1 rounded-md">
            {order.bookingStatus === "Arrived" ? "Pending Verification" : ""}
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[100px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Details
              </button>
              <button
                onClick={() => measure_order(order.id)}
                className="py-1 w-[80px] px-2 bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Measure
              </button>
            </div>
          </>
        ),
      });
    } else if (order?.id.toString().toLowerCase().match(query.toLowerCase())) {
      today_data.push({
        id: index + 1,
        order_id: order.id,
        name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
        price: "$" + order.totalPrice,
        date: <Moment format="D MMM , YYYY hh:mm a">{order.createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-4 py-1 rounded-md">
            {order.bookingStatus === "Arrived" ? "Pending Verification" : ""}
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[100px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Details
              </button>
              <button
                onClick={() => measure_order(order.id)}
                className="py-1 w-[80px] px-2 bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Measure
              </button>
            </div>
          </>
        ),
      });
    }
  });
  data?.data?.weekly?.map((order, index) => {
    if (query == "") {
      weekly_data.push({
        id: index + 1,
        order_id: order.id,
        name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
        price: "$" + order.totalPrice,
        date: <Moment format="D MMM , YYYY hh:mm a">{order.createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-4 py-1 rounded-md">
            {order.bookingStatus === "Arrived" ? "Pending Verification" : ""}
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[100px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Details
              </button>
              <button
                onClick={() => measure_order(order.id)}
                className="py-1 w-[80px] px-2 bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Measure
              </button>
            </div>
          </>
        ),
      });
    } else if (order?.id.toString().toLowerCase().match(query.toLowerCase())) {
      weekly_data.push({
        id: index + 1,
        order_id: order.id,
        name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
        price: "$" + order.totalPrice,
        date: <Moment format="D MMM , YYYY hh:mm a">{order.createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-4 py-1 rounded-md">
            {order.bookingStatus === "Arrived" ? "Pending Verification" : ""}
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[100px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Details
              </button>
              <button
                onClick={() => measure_order(order.id)}
                className="py-1 w-[80px] px-2 bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Measure
              </button>
            </div>
          </>
        ),
      });
    }
  });
  const tabStyle1 =
    "font-medium text-sm text-themeBlue bg-transparent py-3 px-7";
  const tabStyle2 =
    "font-normal text-sm text-black text-opacity-60 bg-transparent py-3 px-7";
  const activeTabStyle1 =
    "font-medium text-sm text-white bg-themeBlue py-3 px-7 rounded-[60px]";
  const activeTabStyle2 =
    "font-normal text-sm text-white bg-themeBlue py-3 px-7 rounded-xl";
  const [process, setProcess] = useState("verification");
  const [filter, setFilter] = useState("");
  return (
    <>
      <Leftbar />
      <Topbar main="In Process Orders" extend={false} />

      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-x-3">
            {process === "verification" ? (
              <img
                className="bg-themeBlue rounded-full p-2 w-12 h-12"
                src="/images/icon4.webp"
                alt="icon"
              /> //<BsExclamationOctagon size={30} className="text-themeBlue" />
            ) : process === "payment" ? (
              <BsBoxSeam size={30} />
            ) : (
              <RiShip2Line size={30} className="text-themeBlue" />
            )}
            <span className="font-bold text-2xl">Pending Verification</span>
          </h1>
          <div className="flex items-center">
            <input
              type="search"
              name="search"
              placeholder="Ex: Search by ID"
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent border border-black border-opacity-40 rounded-md py-3 pl-4 pr-14 font-normal text-xl w-80 focus:outline-none"
            />
            <button className="bg-themeBlue flex justify-center items-center py-3 px-3 border border-black border-opacity-40 rounded-md absolute right-10">
              <BsSearch size={28} className="text-white" />
            </button>
          </div>
        </div>
        <div className="pb-10 2xl:flex justify-between items-center">
          <div className="w-fit bg-white rounded-[60px] border border-themeBlue">
            <button
              className={activeTabStyle1}
              onClick={() => navigate("/inprocess_orders")}
            >
              Pending Verification
            </button>
            <button
              className={tabStyle1}
              onClick={() => navigate("/pending_payment")}
            >
              Pending Payment
            </button>
            <button
              className={tabStyle1}
              onClick={() => navigate("/ready_to_ship")}
            >
              Ready to Ship
            </button>
          </div>
          <div className="float-right w-fit bg-white rounded-xl 2xl:mt-0 mt-3">
            <button
              className={filter === "" ? activeTabStyle2 : tabStyle2}
              onClick={() => {
                setFilter("");
              }}
            >
              All
            </button>
            <button
              className={filter === "monthly" ? activeTabStyle2 : tabStyle2}
              onClick={() => {
                setFilter("monthly");
              }}
            >
              Monthly
            </button>
            <button
              className={filter === "weekly" ? activeTabStyle2 : tabStyle2}
              onClick={() => {
                setFilter("weekly");
              }}
            >
              Weekly
            </button>
            <button
              className={filter === "today" ? activeTabStyle2 : tabStyle2}
              onClick={() => {
                setFilter("today");
              }}
            >
              Today
            </button>
          </div>
        </div>
        {data.length === 0 ? (
         <div className="flex justify-center items-center"> <Loader2 /></div>
        ) : (
          <>
            {loading ? (
              <div className="flex justify-center items-center"> <Loader2 /></div>
            ) : (
              <>
                {filter === "monthly" ? (
                  <DataTable
                    theme="myTheme"
                    customStyles={customStyles}
                    columns={columns}
                    data={monthly_data}
                    pagination
                  />
                ) : filter === "weekly" ? (
                  <DataTable
                    theme="myTheme"
                    customStyles={customStyles}
                    columns={columns}
                    data={weekly_data}
                    pagination
                  />
                ) : filter === "today" ? (
                  <DataTable
                    theme="myTheme"
                    customStyles={customStyles}
                    columns={columns}
                    data={today_data}
                    pagination
                  />
                ) : filter === "" ? (
                  <DataTable
                    theme="myTheme"
                    customStyles={customStyles}
                    columns={columns}
                    data={all}
                    pagination
                  />
                ) : (
                  ""
                )}
              </>
            )}
          </>
        )}
      </section>
    </>
  );
}
