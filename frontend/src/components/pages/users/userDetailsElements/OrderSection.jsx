import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSection(props) {
  const navigate = useNavigate();
  const order_detail = (id) => {
    navigate('/arrived_orders/details', { state: { bookingId: id } })
  }
  return (
    <div className="bg-white rounded-lg py-5 px-6 space-y-3 mt-4 shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-2xl text-themeRed">Order ID : {props.orderId}</h3>
        {/* <button className="font-normal text-xl text-themeGreen2">
          {props.action}
        </button> */}
        <button onClick={()=>order_detail(props.orderId)} className="py-1 px-10 bg-themeBlue border font-semibold  text-white hover:text-themeBlue rounded hover:bg-white hover:border-themeBlue">Detail</button>
      </div>
       
      <h3 className="font-medium text-2xl">Order Status : <span className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">{props.steps}</span></h3>
      <p className="font-normal text-base text-black text-opacity-60">
        Created At : {props.time}
      </p>
    </div>
  );
}
