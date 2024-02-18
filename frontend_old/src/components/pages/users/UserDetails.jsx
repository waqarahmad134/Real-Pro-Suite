import React from "react";
import Moment from "react-moment";
import { useLocation } from "react-router-dom";
import useFetch from "../../../ApiClient/GetApi";
import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";
import OrderSection from "./userDetailsElements/OrderSection";

export default function UserDetails() {
  const location = useLocation();
  const { data } = useFetch(`user_detail/${location.state.userId}`);
  console.log(data.data)
  const thStyle = "font-normal text-base text-start py-2";
  const tdStyle = "font-medium text-base text-black text-opacity-40 pl-8 py-2";
  return (
    <>
      <Leftbar />
      <Topbar
        main="User Management"
        extend={true}
        sub={`User ID : ${location.state.userId}`}
      />
      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right grid grid-cols-12 gap-x-8 gap-y-5">
        <div className="2xl:col-span-8 xl:col-span-6 col-span-12">
          <div className="flex items-center gap-x-3 mb-8">
            <img
              src="/images/iconBlue1.webp"
              alt="icon"
              className="w-10"
            />
            <h1 className="font-bold text-2xl">Recent Orders</h1>
          </div>
          {data?.data?.orders.length === 0 ? (
            <p className="px-10 py-3 bg-white text-themeBlue text-center font-semibold text-xl">
              No Orders yet!
            </p>
          ) : (
            <>
              {data?.data?.orders?.map((order) => (
                <OrderSection
               
                  orderId={order.id}
                  action={`Order#${order.id}`}
                  steps={order.bookingStatus}
                  time={
                    <Moment format="D MMM , YYYY hh:mm a">
                      {order.createdAt}
                    </Moment>
                  }
                />
              ))}
            </>
          )}
        </div>
        <div className="2xl:col-span-4 xl:col-span-6 col-span-12 bg-white rounded-lg py-5 px-8">
          <div className="flex items-center gap-x-3 mb-8">
            <img
              src="/images/iconBlue2.webp"
              alt="icon"
              className="w-10"
            />
            <h1 className="font-bold text-2xl">User Details</h1>
          </div>
          <table>
            <tbody>
              <tr>
                <th className={thStyle}>Name</th>
                <td className={tdStyle}>
                  {data?.data?.user?.firstName +
                    " " +
                    data?.data?.user?.lastName}
                </td>
              </tr>
              <tr>
                <th className={thStyle}>Email</th>
                <td className={tdStyle}>{data?.data?.user?.email ?? ""}</td>
              </tr>
              <tr>
                <th className={thStyle}>Phone No</th>
                <td className={tdStyle}>{data?.data?.user?.phone ?? ""}</td>
              </tr>
              <tr>
                <th className={thStyle}>Company</th>
                <td className={tdStyle}>{data?.data?.user?.company ?? ""}</td>
              </tr>
              <tr>
                <th className={thStyle}>Country</th>
                <td className={tdStyle}>{data?.data?.user?.country ?? ""}</td>
              </tr>
              <tr>
                <th className={thStyle}>Province</th>
                <td className={tdStyle}>{data?.data?.user?.province ?? ""}</td>
              </tr>
              <tr>
                <th className={thStyle}>City</th>
                <td className={tdStyle}>{data?.data?.user?.city ?? ""}</td>
              </tr>
              <tr>
                <th className={thStyle}>Postal Code</th>
                <td className={tdStyle}>
                  {data?.data?.user?.postalCode ?? ""}
                </td>
              </tr>
              <tr>
                <th className={thStyle}>Custom Code</th>
                <td className={tdStyle}>
                  {data?.data?.user?.customCode ?? ""}
                </td>
              </tr>
              <tr>
                <th className={thStyle}>Address</th>
                <td className={tdStyle}>{data?.data?.user?.address ?? ""}</td>
              </tr>
              <tr>
                <th className={thStyle}>Shipping Schedule</th>
                <td className={tdStyle}>{data?.data?.user?.schedule?.title ?? ""}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
