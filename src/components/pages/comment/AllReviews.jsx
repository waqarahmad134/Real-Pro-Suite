// @ts-nocheck
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { BsSearch } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";

import useFetch from "../../../ApiClient/GetApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import customStyles from "../../dataTable/CustomStyles";

import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";
import Moment from "react-moment";
import { PostApi } from "../../../ApiClient/PostApi";
import { error_toaster, success_toaster } from "../../toaster/Toaster";
import { useNavigate } from "react-router-dom";
export default function AllReviews() {
  const { data, reFetch } = useFetch("all_reviews");

  const [loading, SetLoading] = useState(false);
  const navigate = useNavigate();
  const block_comment = async (id) => {
    SetLoading(true);
    const res = await PostApi("block_comment", {
      id: id,
    });
    if (res?.data?.status === "1") {
      error_toaster(res?.data?.message);
      SetLoading(false);
      reFetch();
    } else {
      error_toaster(res?.data?.message);
      SetLoading(false);
    }
  };
  const active_comment = async (id) => {
    SetLoading(true);
    const res = await PostApi("active_comment", {
      id: id,
    });
    if (res?.data?.status === "1") {
      success_toaster(res?.data?.message);
      SetLoading(false);
      reFetch();
    } else {
      error_toaster(res?.data?.message);
      SetLoading(false);
    }
  };

  const order_details = (id) => {
    navigate("/incoming_order_details", { state: { bookingId: id } });
  };

  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
    },
    {
      name: "Comment",
      selector: (row) => row.comment,
    },
    {
      name: "Customer",
      selector: (row) => row.by,
    },
    {
      name: "Date&Time",
      selector: (row) => row.date,
    },
    {
      name: "Order ID",
      selector: (row) => row.orderId,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  const [query, setQuery] = useState("");
  const datas = [];
  data?.data?.map((comment) => {
    if (query == "") {
      datas?.push({
        id: comment?.id,
        comment: <div className="w-96">{comment?.comment}</div>,
        by: comment?.User?.firstName + " " + comment?.User?.lastName,
        orderId: comment?.BookingId,
        date: <Moment format="D MMM YYYY hh:mm A">{comment?.createdAt}</Moment>,
        action: (
          <div className="flex gap-x-2">
            {comment?.status === true ? (
              <button
                onClick={() => block_comment(comment?.id)}
                className="py-1 w-[60px] rounded bg-themeBlue2 text-themeGreen3"
              >
                Active
              </button>
            ) : (
              <button
                onClick={() => active_comment(comment?.id)}
                className="py-1 w-[60px] rounded bg-themePink2 text-themeRed"
              >
                Block
              </button>
            )}

            <button
              onClick={() => order_details(comment?.BookingId)}
              className="py-1 px-4 bg-themeBlue text-white rounded"
            >
              Details
            </button>
          </div>
        ),
      });
    } else if (query == comment?.BookingId) {
      datas?.push({
        id: comment?.id,
        comment: (
          <div className="w-96 whitespace-normal">{comment?.comment}</div>
        ),

        by: comment?.User?.firstName + " " + comment?.User?.lastName,
        date: <Moment format="D MMM , YYYY">{comment?.createdAt}</Moment>,
        orderId: comment?.BookingId,
        action: (
          <div className="flex gap-x-2">
            {comment?.status === true ? (
              <button
                onClick={() => block_comment(comment?.id)}
                className="py-1 w-[60px] rounded bg-themeBlue2 text-themeGreen3"
              >
                Active
              </button>
            ) : (
              <button
                onClick={() => active_comment(comment?.id)}
                className="py-1 w-[60px] rounded bg-themePink2 text-themeRed"
              >
                Block
              </button>
            )}

            <button
              onClick={() => order_details(comment?.BookingId)}
              className="py-1 px-4 bg-themeBlue text-white rounded"
            >
              Details
            </button>
          </div>
        ),
      });
    }
  });
  return (
    <>
      <Leftbar />
      <Topbar main="Reviews Managment" extend={false} />
      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-x-3">
            <HiUsers size={40} className="text-themeBlue" />
            <span className="font-bold text-2xl">All Reviews</span>
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
        {loading ? (
          <Skeleton count={20} />
        ) : (
          <>
            {data?.length === 0 ? (
              <Skeleton count={20} />
            ) : (
              <>
                {
                  <DataTable
                    theme="myTheme"
                    customStyles={customStyles}
                    columns={columns}
                    data={datas}
                    pagination
                  />
                }
              </>
            )}
          </>
        )}
      </section>
    </>
  );
}
