// @ts-nocheck
import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import Leftbar from "../../layout/Leftbar";
import Topbar from "../../layout/Topbar";
import { Loader2 } from "../../../loader/Loader";
import useFetch from "../../../../ApiClient/GetApi";
import Moment from "react-moment";
import { PostApi } from "../../../../ApiClient/PostApi";

import { success_toaster, error_toaster } from "../../../toaster/Toaster";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  Radio,
  Switch,
} from "@chakra-ui/react";
export default function MeasuredOrder() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, reFetch } = useFetch(`order_detail/${location.state.id}`);
  const hscodes = useFetch(`get_hscode_country`);
  const companies = useFetch(`get_active_companies/${location.state.id}`);
  const [consolidation, setConsolidation] = useState({
    length: "",
    width: "",
    height: "",
    weight: "",
    qty: "",
  });

  const [loading, SetLoading] = useState(false);
  const [edit, setEdit] = useState({
    length: "",
    width: "",
    height: "",
    weight: "",
    qty: "",
  });
  const [productData, setProductData] = useState({
    qty: "",
    HsCode: "",
    Country: "",
    weight: "",
    description: "",
  });

  const [repack, setRepack] = useState(false);

  useEffect(() => {
    if (data?.data?.booking?.repackingPrice !== null) {
      setRepack(true);
    } else {
      setRepack(false);
    }
  }, [data?.data?.booking?.repackingPrice]);
  const [company, setCompany] = useState("");

  const onChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };
  const ProductonChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const companyHandleChange = (event) => {
    var index = parseInt(event.target.value);
    setCompany(index);
  };

  const consolidationOnChange = (e) => {
    setConsolidation({ ...consolidation, [e.target.name]: e.target.value });
  };

  const update_order_company = async () => {
    if (company === "") {
      error_toaster("Please select a Company!");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("update_order_company", {
      companyId: company,
      orderId: data?.data?.booking?.id,
    });

    if (res.data.status === "1") {
      success_toaster(res.data.message);
      SetLoading(false);
      reFetch();
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };

  const add_product_dimension = async (id) => {
    if (productData.qty === "" || productData.qty === null) {
      error_toaster("Product Quantity is required!");
      return false;
    } else if (productData.weight === "" || productData.weight === null) {
      error_toaster("Product weight is required!");
      return false;
    } else if (
      productData.description === "" ||
      productData.description === null
    ) {
      error_toaster("Product description is required!");
      return false;
    } else {
      SetLoading(true);
      const res = await PostApi("add_product_dimension", {
        productId: id,
        weight: productData.weight,
        HsCode: productData.HsCode,
        Country: productData.Country,
        qty: productData.qty,
        description: productData.description,
      });
      if (res.data.status === "1") {
        SetLoading(false);
        success_toaster(res.data.message);
        reFetch();
      } else if (res.data.status === "2") {
        navigate("/login");
      } else {
        error_toaster(res.data.message);
        SetLoading(false);
      }
    }
  };

  // Add Consolidation Dimesions
  const addConsolidationDimensions = async (id) => {
    if (consolidation.length === "") {
      error_toaster("Consolidation length is required");
    } else if (consolidation.width === "") {
      error_toaster("Consolidation width is required");
    } else if (consolidation.height === "") {
      error_toaster("Consolidation height is required");
    } else if (consolidation.weight === "") {
      error_toaster("Consolidation weight is required");
    } else if (consolidation.qty === "") {
      error_toaster("Consolidation quantity is required");
    } else {
      SetLoading(true);
      const res = await PostApi("add_Consolidation", {
        bookingId: id,
        height: consolidation.height,
        weight: consolidation.weight,
        length: consolidation.length,
        width: consolidation.width,
        qty: consolidation.qty,
      });
      if (res?.data?.status === "1") {
        SetLoading(false);
        success_toaster(res?.data?.message);
      } else {
        SetLoading(false);
        error_toaster(res?.data?.message);
      }
    }
  };

  const add_dimension = async (id) => {
    if (edit.length === "") {
      error_toaster("Package length is required");
    } else if (edit.width === "") {
      error_toaster("Package width is required");
    } else if (edit.height === "") {
      error_toaster("Package height is required");
    } else if (edit.weight === "") {
      error_toaster("Package weight is required");
    } else if (edit.qty === "") {
      error_toaster("Package quantity is required");
    } else {
      SetLoading(true);
      const res = await PostApi("add_dimension", {
        packageId: id,
        length: edit.length,
        width: edit.width,
        height: edit.height,
        weight: edit.weight,
        qty: edit.qty,
      });

      if (res.data.status === "1") {
        SetLoading(false);
        success_toaster(res.data.message);
        reFetch();
      } else {
        error_toaster(res.data.message);
        SetLoading(false);
      }
    }
  };
  const repacking_price = async () => {
    SetLoading(true);
    const res = await PostApi("repacking_price", {
      repack: repack,
      bookingId: data?.data?.booking?.id,
    });
    if (res.data.status === "1") {
      success_toaster(res.data.message);
      SetLoading(false);
      reFetch();
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const send_invoice = async () => {
    if (data?.data?.booking?.confirmTotalPrice === null) {
      error_toaster("Please measure the dimensions first!");
      return false;
    }
    SetLoading(true);

    const res = await PostApi("send_invoice", {
      orderId: data?.data?.booking?.id,
      repack: repack,
      totalPrice: data?.data?.booking?.confirmTotalPrice,
      orderStatus: data?.data?.booking?.bookingStatus,
      expectedHubArrivalDate: data?.data?.booking?.expectedHubArrivalDate,
      packages: data?.data?.booking?.Packages,
      products: data?.data?.booking?.Products,
      DestinationDetail: data?.data?.booking?.DestinationDetail,
      SupplierDetail: data?.data?.booking?.SupplierDetail,
      ConsigneeDetail: data?.data?.booking?.ConsigneeDetail,
      company: data?.data?.booking?.Company,
    });
    // return false
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      reFetch();
      // window.location.reload()
    } else {
      SetLoading(false);
      error_toaster(res.data.message);
    }
  };

  const thStyle =
    "border border-black font-medium sm:text-base text-xs text-black uppercase p-2";
  const tdStyle =
    "border border-black font-normal sm:text-base text-xs text-black text-opacity-60 p-2";
  const tdStyle2 = "font-normal text-base text-black text-opacity-60 py-2";
  const tdStyle3 = "font-normal text-base text-black py-2 sm:pl-16 pl-6";
  const liStyle =
    "border border-black font-normal sm:text-base text-xs text-black py-2 sm:px-3 px-1 whitespace-nowrap";
  return (
    <>
      <Leftbar />
      <Topbar main="Measured Values" extend={false} />
      {loading ? (
        <div>
          <Loader2 />
        </div>
      ) : (
        <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px]  px-10 float-right space-y-8">
          <div className="flex justify-end">
            <button
              onClick={send_invoice}
              className="py-3 px-6 bg-themeGreen rounded text-green-700 border border-themeGreen hover:bg-white"
            >
              Generate Invoice
            </button>
          </div>
          <div className="flex justify-between">
            {/* <div className="flex justify-between border p-3 shadow-md rounded bg-themeBlue text-white hover:bg-white hover:text-themeBlue cursor-pointer"> */}
            <p className="text-lg font-semibold ">
              <span className="bg-themeBlue p-2 text-white rounded">
                Order ID
              </span>{" "}
              {data?.data?.booking?.id ?? ""}
            </p>
            <p className="text-lg font-semibold ">
              <span className="bg-themeBlue p-2 text-white rounded">
                Hub Arrival Date
              </span>{" "}
              <Moment format="D MMM , YYYY hh:mm a">
                {data?.data?.booking?.expectedHubArrivalDate}
              </Moment>
            </p>
            <p className="text-lg font-semibold ">
              <span className="bg-themeBlue p-2 text-white rounded">
                Est. Price
              </span>{" "}
              {data?.data?.booking?.totalPrice ?? ""}
            </p>
            <p className="text-lg font-semibold ">
              <span className="bg-themeBlue p-2 text-white rounded">
                Confirm Price
              </span>{" "}
              {data?.data?.booking?.confirmTotalPrice === null
                ? "0.00"
                : data?.data?.booking?.confirmTotalPrice}
            </p>
          </div>
          <div className="flex gap-x-4 justify-between border-2 p-3 rounded">
            <p className="text-lg font-semibold text-themeBlue">
              Service Type : {data?.data?.booking?.serviceType ?? ""}
            </p>
            <p className="text-lg font-semibold text-themeBlue">
              Company : {data?.data?.booking?.Company?.name ?? ""}
            </p>
            <p className="text-lg font-semibold text-themeBlue">
              Insurance : {data?.data?.booking?.insurance ? "Yes" : "No"}
            </p>
          </div>
          {/* {data?.data?.booking?.repackingPrice ? (
            <p className="text-lg font-semibold text-themeBlue">
              Repacking : Yes
            </p>
          ) : (
            <p className="text-lg font-semibold text-themeBlue">
              Repacking : No
            </p>
          )} */}

          <>
            <FormControl
              display="flex"
              alignItems="center"
              className="space-x-4"
            >
              <FormLabel htmlFor="email-alerts" mb="0">
                Do you want repacking and consolidation of your Shipment?
              </FormLabel>
              <Switch
                isChecked={repack}
                onChange={() =>
                  setRepack(
                    !(data?.data?.booking?.repackingPrice === null
                      ? false
                      : true)
                  )
                }
                id="email-alerts"
              />
              <button
                onClick={repacking_price}
                className="py-1 px-4 bg-themeBlue border border-themeBlue text-white rounded hover:text-themeBlue hover:bg-transparent"
              >
                Save
              </button>
            </FormControl>
          </>

          <div className="grid gap-x-4 gap-y-4 overflow-auto">
            {repack ? (
              <div className="bg-white py-6 px-5 rounded-lg space-y-4 overflow-auto">
                <div className="flex justify-between items-center gap-x-4">
                  <h1 className="font-medium sm:text-2xl text-xl text-themeBlue">
                    Consolidation Details
                  </h1>
                </div>
                <div className="block">
                  <table>
                    <tbody className="w-full">
                      <div className="border-2 rounded-lg p-2 my-4">
                        <tr>
                          <td className={tdStyle3}>DIMENSIONS</td>
                          <td className={tdStyle3}>Length (cm)</td>
                          <td className={tdStyle3}>Width (cm)</td>
                          <td className={tdStyle3}>Height (cm)</td>
                          <td className={tdStyle3}>Weight (kg)</td>
                          <td className={tdStyle3}>Quantity</td>
                        </tr>
                        <tr>
                          <td className={tdStyle3}>Measured</td>
                          <td className={tdStyle3}>
                            <input
                              name="length"
                              onChange={consolidationOnChange}
                              className="bg-themeGray py-2 px-3 focus:outline-themeGray2 w-[160px]"
                            />
                          </td>
                          <td className={tdStyle3}>
                            <input
                              name="width"
                              onChange={consolidationOnChange}
                              className="bg-themeGray py-2 px-3 focus:outline-themeGray2 w-[160px]"
                            />
                          </td>
                          <td className={tdStyle3}>
                            <input
                              name="height"
                              onChange={consolidationOnChange}
                              className="bg-themeGray py-2 px-3 focus:outline-themeGray2 w-[160px]"
                            />
                          </td>
                          <td className={tdStyle3}>
                            <input
                              name="weight"
                              onChange={consolidationOnChange}
                              className="bg-themeGray py-2 px-3 focus:outline-themeGray2 w-[160px]"
                            />
                          </td>
                          <td className={tdStyle3}>
                            <input
                              name="qty"
                              onChange={consolidationOnChange}
                              className="bg-themeGray py-2 px-3 focus:outline-themeGray2 w-[160px]"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className={tdStyle3}>
                            <button
                              onClick={() => {
                                addConsolidationDimensions(
                                  data?.data?.booking?.id
                                );
                              }}
                              className="py-1 px-8 bg-themeBlue border border-themeBlue text-white rounded hover:bg-white hover:text-themeBlue"
                            >
                              Submit
                            </button>
                          </td>
                        </tr>
                      </div>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-white py-6 px-5 rounded-lg space-y-4">
                <div className="flex justify-between items-center gap-x-4">
                  <h1 className="font-medium sm:text-2xl text-xl text-themeBlue">
                    Package Details
                  </h1>
                </div>
                <div className="block overflow-auto">
                  <table>
                    <tbody className="w-full">
                      {data?.data?.booking?.Packages?.map((pack) => (
                        <>
                          <h2 className="font-medium text-xl text-themeBlue">
                            Package ID {pack?.id}
                          </h2>
                          <div
                            className="border-2 rounded-lg p-2 my-4"
                            key={pack.id}
                          >
                            <tr>
                              <td className={tdStyle3}>DIMENSIONS</td>
                              <td className={tdStyle3}>Length (cm)</td>
                              <td className={tdStyle3}>Width (cm)</td>
                              <td className={tdStyle3}>Height (cm)</td>
                              <td className={tdStyle3}>Weight (kg)</td>
                              <td className={tdStyle3}>Quantity</td>
                            </tr>
                            <tr>
                              <td className={tdStyle3}>Captured</td>
                              <td className={tdStyle3}>
                                {pack.captureLength.toFixed(1)}
                              </td>
                              <td className={tdStyle3}>
                                {pack.captureWidth.toFixed(1)}
                              </td>
                              <td className={tdStyle3}>
                                {pack.captureHeight.toFixed(1)}
                              </td>
                              <td className={tdStyle3}>
                                {pack.captureWeight.toFixed(1)}
                              </td>
                              <td className={tdStyle3}>{pack.qty}</td>
                            </tr>
                            <tr>
                              <td className={tdStyle3}>Measured</td>
                              <td className={tdStyle3}>
                                <input
                                  name="length"
                                  placeholder={pack.measuredLength}
                                  onChange={onChange}
                                  className="bg-themeGray py-2 px-3 focus:outline-themeGray2 w-[160px]"
                                />
                              </td>
                              <td className={tdStyle3}>
                                <input
                                  name="width"
                                  placeholder={pack.measuredWidth}
                                  onChange={onChange}
                                  className="bg-themeGray py-2 px-3 focus:outline-themeGray2 w-[160px]"
                                />
                              </td>
                              <td className={tdStyle3}>
                                <input
                                  name="height"
                                  placeholder={pack.measuredHeight}
                                  onChange={onChange}
                                  className="bg-themeGray py-2 px-3 focus:outline-themeGray2 w-[160px]"
                                />
                              </td>
                              <td className={tdStyle3}>
                                <input
                                  name="weight"
                                  placeholder={pack.measuredWeight}
                                  onChange={onChange}
                                  className="bg-themeGray py-2 px-3 focus:outline-themeGray2 w-[160px]"
                                />
                              </td>
                              <td className={tdStyle3}>
                                <input
                                  name="qty"
                                  placeholder={pack.qty}
                                  onChange={onChange}
                                  className="bg-themeGray py-2 px-3 focus:outline-themeGray2 w-[160px]"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className={tdStyle3}>
                                <button
                                  onClick={() => add_dimension(pack.id)}
                                  className="py-1 px-8 bg-themeBlue border border-themeBlue text-white rounded hover:bg-white hover:text-themeBlue"
                                >
                                  Submit
                                </button>
                              </td>
                            </tr>
                          </div>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="bg-white py-6 px-5 rounded-lg space-y-4">
              <div className="flex justify-between items-center gap-x-4">
                <h1 className="font-medium sm:text-2xl text-xl text-themeBlue">
                  Product Details
                </h1>
              </div>
              <div className="block">
                <table>
                  <tbody>
                    {data?.data?.booking?.Products?.map((pack) => (
                      <>
                        <h2 className="font-medium text-xl text-themeBlue">
                          Product ID {pack?.id}
                        </h2>
                        <div
                          className="border-2 rounded-lg p-2 my-4"
                          key={pack.id}
                        >
                          <tr>
                            <td className={tdStyle3}>DIMENSIONS</td>
                            <td className={tdStyle3}>Quantity</td>
                            {/* <td className={tdStyle3}>HsCode</td>   */}

                            <td className={tdStyle3}>Weight (kg)</td>
                            <td className={tdStyle3}>Description</td>
                          </tr>
                          <tr>
                            <td className={tdStyle3}>Captured</td>
                            <td className={tdStyle3}>{pack.qty}</td>
                            {/* <td className={tdStyle3}>{pack.HsCode.HsCode}</td> */}
                            {/* <td className={tdStyle3}>{pack.Country.name}</td> */}
                            <td className={tdStyle3}>
                              {pack.weight.toFixed(1)}
                            </td>
                          </tr>
                          <tr>
                            <td className={tdStyle3}>Measured</td>
                            <td className={tdStyle3}>
                              <input
                                name="qty"
                                placeholder={pack.qty}
                                onChange={ProductonChange}
                                className="bg-themeGray py-2 px-3 focus:outline-themeGray2 w-[340px]"
                              />
                            </td>
                            <td className={tdStyle3}>
                              <input
                                name="weight"
                                placeholder={pack.weight}
                                onChange={ProductonChange}
                                className="bg-themeGray py-2 px-3 focus:outline-themeGray2 w-[340px]"
                              />
                            </td>
                            {/* <td></td>
                                                            <td></td> */}
                            {/* <td className={tdStyle3}><select name="HsCode" className="bg-themeGray py-3 rounded px-1" onChange={ProductonChange}>
                                                                <option>Select HsCode</option>
                                                                {
                                                                    hscodes?.data?.data?.hscodes?.map((code) => (
                                                                        <option value={code.id}>{code.HsCode}</option>
                                                                    ))
                                                                }
                                                            </select></td> */}
                            {/* <td className={tdStyle3}>

                                                                <select name="Country" onChange={ProductonChange} className="bg-themeGray py-3 rounded px-1">
                                                                    <option>Select Country</option>
                                                                    {
                                                                        hscodes?.data?.data?.countries?.map((country) => (
                                                                            <option value={country.id}>{country.name}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                            </td> */}
                            <td className={tdStyle3}>
                              <input
                                name="description"
                                placeholder={pack.description}
                                onChange={ProductonChange}
                                className="bg-themeGray py-2 px-3 focus:outline-themeGray2 w-[340px]"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className={tdStyle3}>
                              <button
                                onClick={() => add_product_dimension(pack.id)}
                                className="py-1 px-8 bg-themeBlue border border-themeBlue text-white rounded hover:bg-white hover:text-themeBlue"
                              >
                                Submit
                              </button>
                            </td>
                          </tr>
                        </div>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-medium sm:text-2xl text-xl text-themeBlue">
              Company Selection
            </h1>
            <p>
              Current Company :{" "}
              <span className="text-lg font-semibold">
                {data?.data?.booking?.Company?.name}
              </span>
            </p>
            <div className="flex gap-4 flex-wrap my-4">
              {companies?.data?.data?.map((com, index) => (
                <div className="px-4 w-[240px] py-6 rounded-lg bg-white border border-themeBlue">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="Company"
                      value={com.id}
                      checked={
                        com?.Company?.id === data?.data?.booking?.CompanyId
                      }
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }}
                    />
                    <label>{com?.Company?.name}</label>
                  </div>
                  <p className="text-sm text-themeRed text-center">
                    $ {com.tax} / Kg
                  </p>
                  <p className="text-sm text-themeRed text-center">
                    {`Duration : ${com.Company.startDay}-${com.Company.endDay} Day`}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                onClick={update_order_company}
                className="py-1 px-4 bg-themeBlue text-white border border-themeBlue rounded hover:bg-white hover:text-themeBlue"
              >
                Save
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            <div className="bg-white py-6 px-5 rounded-lg space-y-4">
              <div className="flex justify-between items-center gap-x-4">
                <h1 className="font-medium sm:text-2xl text-xl text-themeBlue">
                  Send Package to Below Address
                </h1>
              </div>
              <div className="block">
                <table>
                  <tbody>
                    <tr>
                      <td className={tdStyle2}>Company</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.DestinationDetail?.companyName}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Address</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.DestinationDetail?.address}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Country</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.DestinationDetail?.country}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Email</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.DestinationDetail?.email}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Phone</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.DestinationDetail?.phone}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white py-6 px-5 rounded-lg space-y-4">
              <div className="flex justify-between items-center gap-x-4">
                <h1 className="font-medium sm:text-2xl text-xl text-themeBlue">
                  Supplier Details
                </h1>
              </div>
              <div className="block">
                <table>
                  <tbody>
                    <tr>
                      <td className={tdStyle2}>Contact Name</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.SupplierDetail?.contactName}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Email</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.SupplierDetail?.email}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Phone</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.SupplierDetail?.phone}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Tracking No#</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.SupplierDetail?.trackingNo}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Tracking Link</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.SupplierDetail?.trackingLink}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white py-6 px-5 rounded-lg space-y-4">
              <div className="flex justify-between items-center gap-x-4">
                <h1 className="font-medium sm:text-2xl text-xl text-themeBlue">
                  Consignee Details
                </h1>
              </div>
              <div className="block">
                <table>
                  <tbody>
                    <tr>
                      <td className={tdStyle2}>Company</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.ConsigneeDetail?.companyName}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Address</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.ConsigneeDetail?.address}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Country</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.ConsigneeDetail?.country}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Email</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.ConsigneeDetail?.email}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Phone</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.ConsigneeDetail?.phone}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white py-6 px-5 rounded-lg space-y-4">
              <div className="flex justify-between items-center gap-x-4">
                <h1 className="font-medium sm:text-2xl text-xl text-themeBlue">
                  Destination Details
                </h1>
              </div>
              <div className="block">
                <table>
                  <tbody>
                    <tr>
                      <td className={tdStyle2}>Company</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.DestinationDetail?.companyName}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Address</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.DestinationDetail?.address}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Country</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.DestinationDetail?.country}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Email</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.DestinationDetail?.email}
                      </td>
                    </tr>
                    <tr>
                      <td className={tdStyle2}>Phone</td>
                      <td className={tdStyle3}>
                        {data?.data?.booking?.DestinationDetail?.phone}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
