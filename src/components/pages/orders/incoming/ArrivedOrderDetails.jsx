// @ts-nocheck
import React, { useState } from "react";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../../../ApiClient/GetApi";
import Leftbar from "../../layout/Leftbar";
import Topbar from "../../layout/Topbar";
import { Loader2 } from "../../../loader/Loader";
import { useDisclosure } from "@chakra-ui/react";
import { success_toaster, error_toaster } from "../../../toaster/Toaster";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react";
import { IMAGE_URL } from "../../../../Utils/urls";
import { PostApi } from "../../../../ApiClient/PostApi";
import Moment from "react-moment";
import { DeleteApi } from "../../../../ApiClient/DeleteApi";

export default function ArrivedOrderDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, reFetch } = useFetch(
    `order_detail/${location.state.bookingId}`
  );


  const [loading, SetLoading] = useState(false);
  const [review, setReview] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const {
    isOpen: DimensionOpen,
    onOpen: DimensionOnOpen,
    onClose: DimensionOnClose,
  } = useDisclosure();
  const {
    isOpen: ReviewOpen,
    onOpen: ReviewOnOpen,
    onClose: ReviewOnClose,
  } = useDisclosure();
  const [dropdown1, setDropdown1] = useState(true);
  const [dropdown2, setDropdown2] = useState(true);
  const [dropdown3, setDropdown3] = useState(true);
  const [dropdown4, setDropdown4] = useState(true);
  const [dropdown5, setDropdown5] = useState(true);
  const [dropdown6, setDropdown6] = useState(true);
  const [dropdown7, setDropdown7] = useState(true);

  const add_image_to_booking = async () => {
    if (selectedImage === "") {
      error_toaster("Please select an Image");
      return false;
    }
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("bookingId", data?.data?.booking?.id);
    const res = await PostApi("add_image_to_booking", formData);
    SetLoading(true);
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      DimensionOnClose();
      reFetch();
      setSelectedImage("");
      SetLoading(false);
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };

  const delete_image = async (id) => {
    const res = await PostApi("delete_image", {
      id: id,
    });

    if (res.data.status === "1") {
      success_toaster(res.data.message);
      reFetch();
    } else {
      error_toaster(res.data.message);
    }
  };

  const review_order = (id) => {
    navigate("/reviews", { state: { bookingId: id } });
  };
  const measure_order = (id) => {
    navigate("/measured", { state: { id: id } });
  };
  return (
    <>
      <Leftbar />
      <Topbar
        main="Order Details"
        extend={true}
        sub={`Order Details > ${data?.data?.booking?.bookingStatus}`}
      />
      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-3">
            <img src="/images/carton.webp" alt="carton" className="w-20" />
            <h1 className="font-bold text-2xl">
              <span className="text-black text-opacity-60">Order ID#</span>
              <br />
              <span>{data?.data?.booking?.id}</span>
            </h1>
          </div>
          <div className="space-y-2">
            {/* <div>
              <button
                onClick={() => measure_order(data?.data?.booking?.id)}
                className="py-1 w-[300px] border font-semibold text-themeBlue border-themeBlue rounded-lg hover:bg-themeBlue hover:text-white"
              >
                Measure
              </button>
            </div> */}
            <div>
              <button
                onClick={DimensionOnOpen}
                className="py-1 w-[300px] border font-semibold text-themeBlue border-themeBlue rounded-lg hover:bg-themeBlue hover:text-white"
              >
                Attach Picture
              </button>
            </div>
            <div>
              <button
                onClick={() => review_order(data?.data?.booking?.id)}
                className="py-1 w-[300px] border font-semibold text-themeBlue border-themeBlue rounded-lg hover:bg-themeBlue hover:text-white"
              >
                Add a Review
              </button>
            </div>
          </div>
        </div>
        <div className="grid 2xl:grid-cols-2 gap-x-8 gap-y-10">
          <div>
            <div className="bg-white py-4 px-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                  <img
                    src="/images/iconBlue3.webp"
                    alt="carton"
                    className="w-10"
                  />
                  <h1 className="font-medium text-2xl text-black text-opacity-60">
                    Parcel Detail
                  </h1>
                </div>
                {dropdown1 ? (
                  <FaChevronUp
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setDropdown1(!dropdown1)}
                  />
                ) : (
                  <FaChevronDown
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setDropdown1(!dropdown1)}
                  />
                )}
              </div>
              {dropdown1 && (
                <>
                  <div className="grid gap-4">
                    <div className="bg-white shadow-lg rounded-lg px-5 py-6 flex flex-wrap gap-x-6">
                      <h2 className="text-lg font-semibold mb-2">
                        Total Packages
                      </h2>
                      <p>{data?.data?.booking?.Packages?.length ?? ""}</p>
                      <h2 className="text-lg font-semibold mb-2">Weight(kg)</h2>
                      <p>{data?.data?.package?.package_weight ?? ""}</p>
                      <h2 className="text-lg font-semibold mb-2">
                        Volume(cm³)
                      </h2>
                      <p>{data?.data?.package?.package_volume ?? ""}</p>
                      <h2 className="text-lg font-semibold mb-2">Quantity</h2>
                      <p>{data?.data?.package?.qty ?? ""}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {data?.data?.booking?.Packages?.map((pack, index) => (
                        <div
                          key={index}
                          className="bg-white shadow-lg rounded-lg p-5"
                        >
                          <h2 className="text-lg font-semibold mb-2">
                            Package ID {pack.id}
                          </h2>
                          <p>
                            Billable Weight: {pack.captureBillableWeight ?? ""}{" "}
                            kg
                          </p>
                          <p>
                            Volumetric Weight: {pack.captureVolumetricWeight}kg
                          </p>
                          <p>Quantity: {pack.qty ?? ""} Packages</p>
                          <p>
                            Volume:{" "}
                            {pack.captureHeight *
                              pack.captureLength *
                              pack.captureWidth}{" "}
                            cm³
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            <div className="bg-white py-4 px-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                  <img
                    src="/images/iconBlue1.webp"
                    alt="carton"
                    className="w-10"
                  />
                  <h1 className="font-medium text-2xl text-black text-opacity-60">
                    Product Info
                  </h1>
                </div>
                {dropdown2 ? (
                  <FaChevronUp
                    size={20}
                    className="cursor-pointer"
                    onClick={() => {
                      setDropdown2(!dropdown2);
                    }}
                  />
                ) : (
                  <FaChevronDown
                    size={20}
                    className="cursor-pointer"
                    onClick={() => {
                      setDropdown2(!dropdown2);
                    }}
                  />
                )}
              </div>
              {dropdown2 && (
                <>
                  <div className="grid gap-4">
                    <div className="bg-white shadow-lg rounded-lg px-5 py-6 flex flex-wrap gap-x-8">
                      <h2 className="text-lg font-semibold mb-2">
                        Total Products
                      </h2>
                      <p>{data?.data?.booking?.Products?.length ?? ""}</p>
                      <h2 className="text-lg font-semibold mb-2">Weight(kg)</h2>
                      <p>{data?.data?.product?.product_weight ?? ""}</p>
                      <h2 className="text-lg font-semibold mb-2">Quantity</h2>
                      <p>{data?.data?.product?.qty ?? ""}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {data?.data?.booking?.Products?.map((product, index) => (
                        <div
                          key={index}
                          className="bg-white shadow-lg rounded-lg p-5"
                        >
                          <h2 className="text-lg font-semibold mb-2">
                            Product ID {index + 1}
                          </h2>
                          <p>Weight: {product.billableWeight ?? ""} kg</p>
                          <p>Quantity: {product?.qty ?? ""} Products</p>
                          <p>Price($): {product?.price ?? ""}</p>
                          <p>HsCode: {product?.HsCode?.HsCode ?? ""}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div>
            <div className="bg-white py-4 px-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                  <img
                    src="/images/iconBlue4.webp"
                    alt="carton"
                    className="w-10"
                  />
                  <h1 className="font-medium text-2xl text-black text-opacity-60">
                    Supplier Details
                  </h1>
                </div>
                {dropdown3 ? (
                  <FaChevronUp
                    size={20}
                    className="cursor-pointer"
                    onClick={() => {
                      setDropdown3(!dropdown3);
                    }}
                  />
                ) : (
                  <FaChevronDown
                    size={20}
                    className="cursor-pointer"
                    onClick={() => {
                      setDropdown3(!dropdown3);
                    }}
                  />
                )}
              </div>
              {dropdown3 && (
                <>
                  <div className="flex justify-between items-start my-4">
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Name
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.SupplierDetail?.contactName ?? ""}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pl-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Email
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.SupplierDetail?.email ?? ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start my-4">
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Phone
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.SupplierDetail?.phone ?? ""}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pl-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Tracking No
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.SupplierDetail?.trackingNo ?? ""}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div>
            <div className="bg-white py-4 px-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                  <img
                    src="/images/iconBlue2.webp"
                    alt="carton"
                    className="w-10"
                  />
                  <h1 className="font-medium text-2xl text-black text-opacity-60">
                    Customer Details
                  </h1>
                </div>
                {dropdown5 ? (
                  <FaChevronUp
                    size={20}
                    className="cursor-pointer"
                    onClick={() => {
                      setDropdown5(!dropdown5);
                    }}
                  />
                ) : (
                  <FaChevronDown
                    size={20}
                    className="cursor-pointer"
                    onClick={() => {
                      setDropdown5(!dropdown5);
                    }}
                  />
                )}
              </div>
              {dropdown5 && (
                <>
                  <div className="flex justify-between items-start my-4">
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Name
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data.data?.booking?.User?.firstName ?? ""}{" "}
                        {data.data?.booking?.User?.lastName ?? ""}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pl-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Email
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data.data?.booking?.User?.email ?? ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start my-4">
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Phone
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.User?.phone ?? ""}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pl-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Status
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.User?.status ? "Active" : "Block"}
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex justify-between items-start my-4">
               <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                 <h6 className="font-normal text-base whitespace-nowrap">Schedule Type</h6>
                 <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                   {data?.data?.booking?.User?.ShippingScheduleId ?? ""}
                 </p>
               </div>
             </div> */}
                </>
              )}
            </div>
          </div>
          <div>
            <div className="bg-white py-4 px-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                  <img
                    src="/images/iconBlue3.webp"
                    alt="carton"
                    className="w-10"
                  />
                  <h1 className="font-medium text-2xl text-black text-opacity-60">
                    Miscellaneous
                  </h1>
                </div>
                {dropdown7 ? (
                  <FaChevronUp
                    size={20}
                    className="cursor-pointer"
                    onClick={() => {
                      setDropdown7(!dropdown7);
                    }}
                  />
                ) : (
                  <FaChevronDown
                    size={20}
                    className="cursor-pointer"
                    onClick={() => {
                      setDropdown7(!dropdown7);
                    }}
                  />
                )}
              </div>
              {dropdown7 && (
                <>
                  <div className="flex justify-between items-start my-4">
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Insurance
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.insurance ? "Yes" : "No"}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pl-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Repacking
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.repackingPrice ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start my-4">
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Company
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.Company?.name ?? ""}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pl-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Service Type
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.serviceType ?? ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start my-4">
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Order Status
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.bookingStatus ?? ""}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pl-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Delivery Date&Time
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.deliveredDateTime
                          ? data?.data?.booking?.deliveredDateTime
                          : "N/A"}  
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            <div className="bg-white py-4 px-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                  <img
                    src="/images/iconBlue2.webp"
                    alt="carton"
                    className="w-10"
                  />
                  <h1 className="font-medium text-2xl text-black text-opacity-60">
                    Destination Details
                  </h1>
                </div>
                {dropdown6 ? (
                  <FaChevronUp
                    size={20}
                    className="cursor-pointer"
                    onClick={() => {
                      setDropdown6(!dropdown6);
                    }}
                  />
                ) : (
                  <FaChevronDown
                    size={20}
                    className="cursor-pointer"
                    onClick={() => {
                      setDropdown6(!dropdown6);
                    }}
                  />
                )}
              </div>
              {dropdown6 && (
                <>
                  <div className="flex justify-between items-start my-4">
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Company Name
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data.data?.booking?.DestinationDetail?.companyName ??
                          ""}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pl-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Contact Name
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data.data?.booking?.DestinationDetail?.contactName ??
                          ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start my-4">
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Phone
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.DestinationDetail?.phone ?? ""}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pl-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Email
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.DestinationDetail?.email ?? ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start my-4">
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        License
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.DestinationDetail?.license ?? ""}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pl-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        VAT No.
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.DestinationDetail?.vatNo ?? ""}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            <div className="bg-white py-4 px-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                  <img
                    src="/images/iconBlue2.webp"
                    alt="carton"
                    className="w-10"
                  />
                  <h1 className="font-medium text-2xl text-black text-opacity-60">
                    Consignee Details
                  </h1>
                </div>
                {dropdown6 ? (
                  <FaChevronUp
                    size={20}
                    className="cursor-pointer"
                    onClick={() => {
                      setDropdown7(!dropdown7);
                    }}
                  />
                ) : (
                  <FaChevronDown
                    size={20}
                    className="cursor-pointer"
                    onClick={() => {
                      setDropdown7(!dropdown7);
                    }}
                  />
                )}
              </div>
              {dropdown7 && (
                <>
                  <div className="flex justify-between items-start my-4">
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Company Name
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data.data?.booking?.ConsigneeDetail?.companyName ?? ""}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pl-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Contact Name
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data.data?.booking?.ConsigneeDetail?.contactName ?? ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start my-4">
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Phone
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.ConsigneeDetail?.phone ?? ""}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pl-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Email
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.ConsigneeDetail?.email ?? ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start my-4">
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        City
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.ConsigneeDetail?.city ?? ""}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pl-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Province
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.ConsigneeDetail?.province ?? ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start my-4">
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Origin Country
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.CompanyCountry?.originCountry
                          ?.name ?? ""}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pl-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Destination Country
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.CompanyCountry?.destinationCountry
                          ?.name ?? ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start my-4">
                    <div className="flex flex-col items-start gap-y-1 w-1/2 pr-2 min-w-0">
                      <h6 className="font-normal text-base whitespace-nowrap">
                        Country
                      </h6>
                      <p className="font-medium text-base text-black text-opacity-40 w-full text-left truncate">
                        {data?.data?.booking?.ConsigneeDetail?.country ?? ""}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="row-span-2">
            <div className="bg-white py-4 px-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                  <img
                    src="/images/iconBlue5.webp"
                    alt="carton"
                    className="w-10"
                  />
                  <h1 className="font-medium text-2xl text-black text-opacity-60">
                    Invoice Details
                  </h1>
                </div>
                {dropdown4 ? (
                  <FaChevronUp
                    size={20}
                    className="cursor-pointer"
                    onClick={() => {
                      setDropdown4(!dropdown4);
                    }}
                  />
                ) : (
                  <FaChevronDown
                    size={20}
                    className="cursor-pointer"
                    onClick={() => {
                      setDropdown4(!dropdown4);
                    }}
                  />
                )}
              </div>
              {dropdown4 && (
                <div className="mt-5 space-y-5">
                  <div className="flex items-center justify-end gap-x-8">
                    <ul className="font-medium text-base text-black text-opacity-40 text-end space-y-4">
                      <li>
                        Freight ({data?.data?.kg} Kg * ${data?.data?.companyTax}
                        )
                      </li>
                      <li>Import VAT</li>
                      <li>Import Duties</li>
                      <li>Customs Clearance Fee</li>
                      <li>Insurance</li>
                      <li>Repacking Fee</li>
                    </ul>
                    <ul className="font-normal text-base space-y-4">
                      <li>
                        $ {Number(data?.data?.booking?.freightPrice) ?? "0.00"}
                      </li>
                      <li>$ {data?.data?.vatTax ?? "0.00"}</li>
                      <li>$ {data?.data?.importDuty ?? "0.00"}</li>
                      <li>$ {data?.data?.customerClearanceFee ?? "0.00"}</li>
                      <li>$ {data?.data?.insurance ?? "0.00"}</li>

                      <li>
                        ${" "}
                        {data?.data?.booking?.repackingPrice == null
                          ? "0.00"
                          : data?.data?.booking?.repackingPrice}
                      </li>
                    </ul>
                  </div>
                  <h1 className="font-medium text-4xl text-end">
                    Est. Price : ${data?.data?.booking?.totalPrice ?? "0.00"}
                  </h1>
                  <h1 className="font-medium text-4xl text-end">
                    Confirm Price : $
                    {data?.data?.booking?.confirmTotalPrice ?? "0.00"}
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-medium text-2xl text-black text-opacity-60 my-6">
            Parcel Pictures
          </h1>
          {data?.data?.booking?.BookingImages?.length > 0 ? (
            <>
              <div className="flex gap-x-8 gap-y-2 flex-wrap ">
                {data?.data?.booking?.BookingImages?.map((booking) => (
                  <div key={booking.image} className="relative">
                    <img
                      className="h-28 w-28 object-cover rounded-xl"
                      src={IMAGE_URL + booking.image}
                      alt="booking Image"
                    />

                    <TiDelete
                      size={32}
                      className="absolute right-0 top-0 text-white cursor-pointer"
                      onClick={() => delete_image(booking.id)}
                    />
                  </div>
                ))}
                <div></div>
              </div>
            </>
          ) : (
            <>
              <p>Sorry! This order has no pictures</p>
            </>
          )}
        </div>
      </section>

      <Modal size="xl" isOpen={ReviewOpen} onClose={ReviewOnClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a Review</ModalHeader>

          <ModalCloseButton />
          {loading ? (
            <div className="flex justify-center items-center">
              {" "}
              <Loader2 />
            </div>
          ) : (
            <>
              <ModalBody>
                <div className="flex gap-x-2 gap-y-2 flex-wrap">
                  <div>
                    <input
                      className="bg-themeGray py-3 px-6 w-[500px] focus:outline-none"
                      type="text"
                      name="text"
                      onChange={(event) => {
                        setReview(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <div className="space-x-2">
                  <button
                    className="py-1 w-[100px] border border-themeBlue text-themeBlue rounded-lg"
                    onClick={ReviewOnClose}
                  >
                    Cancel
                  </button>

                  <button
                    className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                    onClick={() => review_order(data?.data?.booking?.id)}
                  >
                    Add
                  </button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        size="xl"
        isOpen={DimensionOpen}
        onClose={DimensionOnClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a Picture</ModalHeader>

          <ModalCloseButton />
          {loading ? (
            <div className="flex justify-center items-center">
              {" "}
              <Loader2 />
            </div>
          ) : (
            <>
              <ModalBody>
                <div className="flex gap-x-2 gap-y-2 flex-wrap">
                  <div>
                    {selectedImage && (
                      <div>
                        <img
                          className="h-28 w-28 object-cover rounded-xl"
                          alt="New Image"
                          src={URL.createObjectURL(selectedImage)}
                        />
                        <br />
                        <button
                          className="mt-2  btn btn-danger btn-sm button-border"
                          onClick={() => setSelectedImage(null)}
                        >
                          Remove
                        </button>
                      </div>
                    )}
                    <input
                      type="file"
                      name="myImage"
                      onChange={(event) => {
                        setSelectedImage(event.target.files[0]);
                      }}
                    />
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <div className="space-x-2">
                  <button
                    className="py-1 w-[100px] border border-themeBlue text-themeBlue rounded-lg"
                    onClick={DimensionOnClose}
                  >
                    Cancel
                  </button>

                  <button
                    className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                    onClick={add_image_to_booking}
                  >
                    Save
                  </button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
