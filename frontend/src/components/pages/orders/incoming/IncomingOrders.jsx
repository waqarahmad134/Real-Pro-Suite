// @ts-nocheck
import React, { useState,useRef } from "react";
import DataTable from "react-data-table-component";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import customStyles from "../../../dataTable/CustomStyles";
import Leftbar from "../../layout/Leftbar";
import Topbar from "../../layout/Topbar";
import Moment from 'react-moment';
import useFetch from "../../../../ApiClient/GetApi";
import { PostApi } from "../../../../ApiClient/PostApi";
import { error_toaster, success_toaster } from "../../../toaster/Toaster";
import { Loader2 } from "../../../loader/Loader";
import { CSVLink } from 'react-csv';


export default function IncomingOrders() {
  const [query, setQuery] = useState("");
  const dataTableRef = useRef(null);
  const navigate = useNavigate();
  const { data, reFetch } = useFetch("waiting_arrival");
  const [loading, SetLoading] = useState(false);
  const order_detail = (id) => {
    navigate('/incoming_order_details', { state: { bookingId: id } })
  }

  const arrived_order = async (id) => {
    SetLoading(true)
    const res = await PostApi("arrived_order", {
      bookingId: id
    });
    if (res.data.status === "1") {
      SetLoading(false)
      success_toaster(res.data.message);
      reFetch();
    }
    else {
      SetLoading(false)
      error_toaster(res.data.message);
    }
  }
  const columns = [
    {
      name: "Sr #",
      selector: (row) => row.id,
      wrap:true,
      width:"100px"
     
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
      name: "Created At",
      selector: (row) => row.date,
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
    if (query === "") {
      all.push(
        {
          id:index+1,
          order_id: order.id,
          name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
          price: "$" + order.totalPrice,
          date: <Moment format="D MMM , YYYY hh:mm a">
            {order.createdAt}
          </Moment>,
          status: (
            <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
              Waiting Arrival
            </button>
          ),
          action: (

            <div className="flex gap-x-1 w-56">
              <p onClick={() => arrived_order(order.id)} className="bg-themeBlue text-white py-1 px-2 rounded text-center cursor-pointer">Arrived</p>
              <button onClick={() => order_detail(order.id)} className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white">Details</button>
            </div>
          ),
        }
      )
    }
    else {
      if (order?.id.toString().toLowerCase().match(query.toLowerCase())) {
        all.push({

          id:index+1,
          order_id: order.id,
          name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
          price: "$" + order.totalPrice,
          date: <Moment format="D MMM , YYYY hh:mm a">
            {order.createdAt}
          </Moment>,
          status: (
            <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
              Waiting Arrival
            </button>
          ),
          action: (
           <div className="flex gap-x-1 w-56">
              <p onClick={() => arrived_order(order.id)} className="bg-themeBlue text-white py-1 px-2 rounded text-center cursor-pointer">Arrived</p>
              <button onClick={() => order_detail(order.id)} className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white">Details</button>
            </div>
          ),
        })
      }
    }

  })
  data?.data?.monthly?.map((order, index) => {
    if (query === "") {
      monthly_data.push(
        {
          id:index+1,
          order_id: order.id,
          name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
          price: "$" + order.totalPrice,
          date: <Moment format="D MMM , YYYY hh:mm a">
            {order.createdAt}
          </Moment>,
          status: (
            <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
              Waiting Arrival
            </button>
          ),
          action: (
           <div className="flex gap-x-1 w-56">
              <p onClick={() => arrived_order(order.id)} className="bg-themeBlue text-white py-1 px-2 rounded text-center cursor-pointer">Arrived</p>
              <button onClick={() => order_detail(order.id)} className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white">Details</button>
            </div>
          ),
        }
      )
    }
    else {
      if (order?.id.toString().toLowerCase().match(query.toLowerCase())) {
        monthly_data.push({
          id:index+1,
          order_id: order.id,
          name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
          price: "$" + order.totalPrice,
          date: <Moment format="D MMM , YYYY hh:mm a">
            {order.createdAt}
          </Moment>,
          status: (
            <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
              Waiting Arrival
            </button>
          ),
          action: (
           <div className="flex gap-x-1 w-56">
              <p onClick={() => arrived_order(order.id)} className="bg-themeBlue text-white py-1 px-2 rounded text-center cursor-pointer">Arrived</p>
              <button onClick={() => order_detail(order.id)} className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white">Details</button>
            </div>
          ),
        })
      }
    }

  })

  data?.data?.today?.map((order, index) => {
    if (query === "") {
      today_data.push(
        {
          id:index+1,
          order_id: order.id,
          name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
          price: "$" + order.totalPrice,
          date: <Moment format="D MMM , YYYY hh:mm a">
            {order.createdAt}
          </Moment>,
          status: (
            <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
              Waiting Arrival
            </button>
          ),
          action: (
           <div className="flex gap-x-1 w-56">
              <p onClick={() => arrived_order(order.id)} className="bg-themeBlue text-white py-1 px-2 rounded text-center cursor-pointer">Arrived</p>
              <button onClick={() => order_detail(order.id)} className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white">Details</button>
            </div>
          ),
        }
      )
    }
    else {
      if (order?.id.toString().toLowerCase().match(query.toLowerCase())) {
        today_data.push({
          id:index+1,
          order_id: order.id,
          name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
          price: "$" + order.totalPrice,
          date: <Moment format="D MMM , YYYY hh:mm a">
            {order.createdAt}
          </Moment>,
          status: (
            <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
              Waiting Arrival
            </button>
          ),
          action: (
           <div className="flex gap-x-1 w-56">
              <p onClick={() => arrived_order(order.id)} className="bg-themeBlue text-white py-1 px-2 rounded text-center cursor-pointer">Arrived</p>
              <button onClick={() => order_detail(order.id)} className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white">Details</button>
            </div>
          ),
        })
      }
    }
  })
  data?.data?.weekly?.map((order, index) => {
    if (query === "") {
      weekly_data.push(
        {
          id:index+1,
          order_id: order.id,
          name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
          price: "$" + order.totalPrice,
          date: <Moment format="D MMM , YYYY hh:mm a">
            {order.createdAt}
          </Moment>,
          status: (
            <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
              Waiting Arrival
            </button>
          ),
          action: (
           <div className="flex gap-x-1 w-56">
              <p onClick={() => arrived_order(order.id)} className="bg-themeBlue text-white py-1 px-2 rounded text-center cursor-pointer">Arrived</p>
              <button onClick={() => order_detail(order.id)} className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white">Details</button>
            </div>
          ),
        }
      )
    }
    else {
      if (order?.id.toString().toLowerCase().match(query.toLowerCase())) {
        weekly_data.push({
          id:index+1,
          order_id: order.id,
          name: order?.User?.firstName + " " + order?.User?.lastName ?? "",
          price: "$" + order.totalPrice,
          date: <Moment format="D MMM , YYYY hh:mm a">
            {order.createdAt}
          </Moment>,
          status: (
            <button className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
              Waiting Arrival
            </button>
          ),
          action: (
           <div className="flex gap-x-1 w-56">
              <p onClick={() => arrived_order(order.id)} className="bg-themeBlue text-white py-1 px-2 rounded text-center cursor-pointer">Arrived</p>
              <button onClick={() => order_detail(order.id)} className="py-1 w-[80px] bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white">Details</button>
            </div>
          ),
        })
      }
    }
  })
  function formatDate(str_date) {
  
    const date = new Date(str_date);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();


    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const generateCSVData = () => {
    const csvData = [];
  
    // Add headers to CSV data
    csvData.push(['S.No', 'OrderID', 'Price ($)', 'Date and Time', 'Status', 'Customer', 'Service Type']);
  
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
        item?.User?.firstName + ' ' + item?.User?.lastName,
        item?.serviceType
      ]);
    });
  
    return csvData;
  };
  
  // In the modified code, the toLocaleString() method is used to convert the item.startDate value to a localized string representing the date and time. This will ensure that the date and time are displayed in a format that is more easily readable. By using this approach, the date and time column in the generated CSV file should show the full content without being hidden.
  
  
  
  
  
  
  

  const tabStyle1 =
    "font-medium text-sm text-themeBlue bg-transparent py-3 px-4";
  const tabStyle2 =
    "font-normal text-sm text-black text-opacity-60 bg-transparent py-3 px-7";
  const activeTabStyle1 =
    "font-medium text-sm text-white bg-themeBlue py-3 px-4 rounded-[60px]";
  const activeTabStyle2 =
    "font-normal text-sm text-white bg-themeBlue py-3 px-7 rounded-xl";

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
            <span className="font-bold text-2xl">
              Waiting Arrival
            </span>
          </h1>
          <div className="flex items-center">
            <input
              type="text"
              name="search"
              onChange={event => setQuery(event.target.value)}
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
            <button className={activeTabStyle1}>Waiting Arrival</button>
            <button onClick={() => navigate('/arrived_orders')} className={tabStyle1}>Arrived at Warehouse</button>
            <button onClick={() => navigate('/delayed_orders')} className={tabStyle1}>Delayed</button>
            <button onClick={() => navigate('/cancelled_orders')} className={tabStyle1}>Cancelled</button>
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
        <CSVLink className='py-2 px-6 bg-themeBlue rounded text-white border border-themeBlue hover:text-themeBlue hover:bg-white cursor-pointer' data={generateCSVData()} filename={`Incoming-Orders-${formatDate(Date.now())}.csv`}>
            Export to CSV
          </CSVLink>
        {
          data.length === 0 ? <div className="flex justify-center items-center"> <Loader2 /></div> : <>
            {
              loading ? <div className="flex justify-center items-center"> <Loader2 /></div> : <>
                {
                  filter === "monthly" ? <DataTable
                    theme="myTheme"
                    customStyles={customStyles}
                    columns={columns}
                    data={monthly_data}
                    ref={dataTableRef}
                   
                    
                    pagination
                  /> : filter === "weekly" ? <DataTable
                    theme="myTheme"
                    customStyles={customStyles}
                    columns={columns}
                    data={weekly_data}
                    ref={dataTableRef}
                    
                    pagination
                  /> : filter === "today" ? <DataTable
                    theme="myTheme"
                    customStyles={customStyles}
                    columns={columns}
                    data={today_data}
                    ref={dataTableRef}
                    
                    pagination
                  /> : filter === "" ?
              
                     <DataTable
                      theme="myTheme"
                      customStyles={customStyles}
                      columns={columns}
                      data={all}
                      ref={dataTableRef}
                     
                      pagination
                    />
                    : ""
                }

               
              </>
            }
            
          </>
        }
       
      </section>
    </>
  );
}
