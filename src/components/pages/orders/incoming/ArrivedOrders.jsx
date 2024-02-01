// @ts-nocheck
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import customStyles from "../../../dataTable/CustomStyles";
import Leftbar from "../../layout/Leftbar";
import Topbar from "../../layout/Topbar";
import { Loader2 } from "../../../loader/Loader";
import useFetch from "../../../../ApiClient/GetApi";
import Moment from "react-moment";
import { CSVLink } from "react-csv";

export default function IncomingOrders() {
  const navigate = useNavigate();
  const { data, reFetch ,loadings} = useFetch("arrived_orders");

  const [query, setQuery] = useState("");
  const [loading, SetLoading] = useState(false);
  const order_detail = (id) => {
    navigate("/arrived_orders/details", { state: { bookingId: id } });
  };
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
      wrap: true,
      width: "150px",
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
      wrap:true
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];
  const monthly_data = [];
  const weekly_data = [];
  const today_data = [];
  const all = [];

  data?.data?.all?.map((order, index) => {
    if (query == "") {
      all.push({
        id: index + 1,
        order_id: order.id,
        name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
        price: "$" + order.totalPrice,
        date: <Moment format="D MMM , YYYY hh:mm a">{order.BookingStatuses[0].createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
            {order.bookingStatus}
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[80px] px-2 bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
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
       date: <Moment format="D MMM , YYYY hh:mm a">{order.BookingStatuses[0].createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
            {order.bookingStatus}
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Details
              </button>
              <button
                onClick={() => measure_order(order.id)}
                className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
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
       date: <Moment format="D MMM , YYYY hh:mm a">{order.BookingStatuses[0].createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
            {order.bookingStatus}
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Details
              </button>
              <button
                onClick={() => measure_order(order.id)}
                className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
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
       date: <Moment format="D MMM , YYYY hh:mm a">{order.BookingStatuses[0].createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
            {order.bookingStatus}
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Details
              </button>
              <button
                onClick={() => measure_order(order.id)}
                className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
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
       date: <Moment format="D MMM , YYYY hh:mm a">{order.BookingStatuses[0].createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
            {order.bookingStatus}
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Details
              </button>
              <button
                onClick={() => measure_order(order.id)}
                className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
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
       date: <Moment format="D MMM , YYYY hh:mm a">{order.BookingStatuses[0].createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
            {order.bookingStatus}
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Details
              </button>
              <button
                onClick={() => measure_order(order.id)}
                className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
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
       date: <Moment format="D MMM , YYYY hh:mm a">{order.BookingStatuses[0].createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
            {order.bookingStatus}
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Details
              </button>
              <button
                onClick={() => measure_order(order.id)}
                className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
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
       date: <Moment format="D MMM , YYYY hh:mm a">{order.BookingStatuses[0].createdAt}</Moment>,
        status: (
          <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
            {order.bookingStatus}
          </button>
        ),
        action: (
          <>
            <div className="flex gap-x-1">
              <button
                onClick={() => order_detail(order.id)}
                className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Details
              </button>
              <button
                onClick={() => measure_order(order.id)}
                className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Measure
              </button>
            </div>
          </>
        ),
      });
    }
  });

  function formatDate() {
    const now = Date.now();
    const date = new Date(now);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const generateCSVData = () => {
    const csvData = [];

    // Add headers to CSV data
    csvData.push([
      "S.No",
      "OrderID",
      "Price ($)",
      "Date and Time",
      "Status",
      "Customer",
      "Service Type",
    ]);

    // Add rows to CSV data
    data?.data?.all?.forEach((item, index) => {
      const formattedPrice = `$${item.totalPrice}`; // Format the price
      const formattedDateTime = new Date(item.startDate).toLocaleString(); // Convert to readable format

      csvData.push([
        index + 1,
        item.id,
        formattedPrice,
        formattedDateTime,
        item.bookingStatus,
        item?.User?.firstName + " " + item?.User?.lastName,
        item?.serviceType,
      ]);
    });

    return csvData;
  };
  const tabStyle1 =
    "font-medium text-sm text-themeBlue bg-transparent py-3 px-7";
  const tabStyle2 =
    "font-normal text-sm text-black text-opacity-60 bg-transparent py-3 px-7";
  const activeTabStyle1 =
    "font-medium text-sm text-white bg-themeBlue py-3 px-7 rounded-[60px]";
  const activeTabStyle2 =
    "font-normal text-sm text-white bg-themeBlue py-3 px-7 rounded-xl";
  const [incoming, setIncoming] = useState("waiting arrival");
  const [filter, setFilter] = useState("");
  return (
    <>
      <Leftbar />
      <Topbar main="Incoming Orders" extend={false} />
      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-x-3">
            <img
              src="/images/iconBlue1.webp"
              alt="icon"
              className="w-8"
            />
            <span className="font-bold text-2xl">Arrived at Warehouse</span>
          </h1>
          <div className="flex items-center">
            <input
              type="search"
              name="search"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ex: Search by ID"
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
              onClick={() => navigate("/incoming_orders")}
              className={tabStyle1}
            >
              Waiting Arrival
            </button>
            <button
              onClick={() => navigate("/arrived_orders")}
              className={activeTabStyle1}
            >
              Arrived at Warehouse
            </button>
            <button
              onClick={() => navigate("/delayed_orders")}
              className={tabStyle1}
            >
              Delayed
            </button>
            <button
              onClick={() => navigate("/cancelled_orders")}
              className={tabStyle1}
            >
              Cancelled
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
        <CSVLink
          className="py-2 px-6 bg-themeBlue rounded text-white border border-themeBlue hover:text-themeBlue hover:bg-white cursor-pointer"
          data={generateCSVData()}
          filename={`Arrived-Orders-${formatDate(Date.now())}.csv`}
        >
          Export to CSV
        </CSVLink>
        {loadings ? (
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
                    // selectableRows
                    pagination
                  />
                ) : filter === "weekly" ? (
                  <DataTable
                    theme="myTheme"
                    customStyles={customStyles}
                    columns={columns}
                    data={weekly_data}
                    // selectableRows
                    pagination
                  />
                ) : filter === "today" ? (
                  <DataTable
                    theme="myTheme"
                    customStyles={customStyles}
                    columns={columns}
                    data={today_data}
                    // selectableRows
                    pagination
                  />
                ) : filter === "" ? (
                  <DataTable
                    theme="myTheme"
                    customStyles={customStyles}
                    columns={columns}
                    data={all}
                    // selectableRows
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
