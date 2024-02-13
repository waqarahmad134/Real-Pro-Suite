import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { BsSearch } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import useFetch from "../../../ApiClient/GetApi";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import customStyles from "../../dataTable/CustomStyles";
import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";
import Moment from "react-moment";
export default function OtpData() {
  const { data } = useFetch("all_otps");
  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
    },
    {
      name: "OTP",
      selector: (row) => row.otp,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Request At",
      selector: (row) => row.requestAt,
    },

  ];
  const [query, setQuery] = useState('');
  const datas = [];
  data?.data?.map((user, index) => {
    if (query == '') {
      datas.push({
        id: index + 1,
        otp: <p className="bg-green-400 px-4 py-1 rounded text-white">{user.otp}</p>,
        email: user.email,
        requestAt: <Moment format="D MMM , YYYY hh:mm a">
          {user.requestAt}
        </Moment>,
      })
    }
    
    else if (user.email.toLowerCase().match(query.toLowerCase()) || user.otp.toLowerCase().match(query.toLowerCase())) {
      datas.push({
        id: index + 1,
        otp: <p className="bg-themeGreen px-4 py-1 rounded text-white">{user.otp}</p>,
        email: user.email,
        requestAt: <Moment format="D MMM , YYYY hh:mm a">
          {user.requestAt}
        </Moment>,
      })
    }

  })

  return (
    <>
      <Leftbar />
      <Topbar main="User Management" extend={false} />
      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-x-3">
            <HiUsers size={40} className="text-themeBlue" />
            <span className="font-bold text-2xl">All OTPs</span>
          </h1>
          <div className="flex items-center">
            <input
              type="search"
              name="search"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ex: Search"
              className="bg-transparent border border-black border-opacity-40 rounded-md py-3 pl-4 pr-14 font-normal text-xl w-80 focus:outline-none"
            />
            <button className="bg-themeBlue flex justify-center items-center py-3 px-3 border border-black border-opacity-40 rounded-md absolute right-10">
              <BsSearch size={28} className="text-white" />
            </button>
          </div>
        </div>
        {
          data.length === 0 ? <Skeleton count={20} /> : <>
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
        }


      </section>
    </>
  );
}
