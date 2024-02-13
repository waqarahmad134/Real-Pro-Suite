// @ts-nocheck
import React, { useState } from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../../../ApiClient/GetApi";
import Leftbar from "../../layout/Leftbar";
import Topbar from "../../layout/Topbar";
import { Loader2 } from "../../../loader/Loader"
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
import { BASE_URL, IMAGE_URL } from "../../../../Utils/urls";
import { PostApi } from "../../../../ApiClient/PostApi";

export default function IncompleteOrderDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const { data, reFetch } = useFetch(`order_detail/${location.state.bookingId}`);


    const [loading, SetLoading] = useState(false);
    const [review, setReview] = useState("");
    const [note, setNote] = useState("");
    const {
        isOpen: DimensionOpen,
        onOpen: DimensionOnOpen,
        onClose: DimensionOnClose,
    } = useDisclosure();

    const [dropdown1, setDropdown1] = useState(true);
    const [dropdown2, setDropdown2] = useState(true);
    const [dropdown3, setDropdown3] = useState(true);
    const [dropdown4, setDropdown4] = useState(true);
    const [dropdown5, setDropdown5] = useState(true);

    const add_note = async () => {
        if (note === "") {
            error_toaster("Please enter something...");
            return false;
        }
        SetLoading(true)
        let res = await PostApi("add_note", {
            note: note,
            BookingId: data?.data?.booking?.id,
        });
        if (res.data.status === "1") {
            SetLoading(false)
            success_toaster(res.data.message);
            DimensionOnClose();
            reFetch()
        } else {
            error_toaster(res.data.message);
            SetLoading(false)
        }

    }


    return (
        <>
            <Leftbar />
            <Topbar main="Incomplete Orders" extend={true} sub="Order Details" />
            <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
                <div className="flex justify-between">
                    <div className="flex items-center gap-x-3">
                        <img
                            src="/images/carton.webp"
                            alt="carton"
                            className="w-20"
                        />
                        <h1 className="font-bold text-2xl">
                            <span className="text-black text-opacity-60">Order ID#</span>
                            <br />
                            <span>{data?.data?.booking?.id}</span>
                        </h1>
                    </div>
                    <div className="space-y-2">
                        <p className="text-lg font-semibold text-themeRed">Steps Remaining : {data?.data?.booking?.location === "/company_details" ? "5" : data?.data?.booking?.location === "/supplier_details" ? "4" : data?.data?.booking?.location === "/consignee_details" ? "3" : data?.data?.booking?.location === "destination_details" ? "2" : data?.data?.booking?.location === "/order_summary" ? "1" : ""}</p>
                        <div>
                            <button onClick={DimensionOnOpen} className="py-1 w-[200px] border font-semibold text-themeBlue border-themeBlue rounded-lg hover:bg-themeBlue hover:text-white">Add Note</button>
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
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
                                        onClick={() => {
                                            setDropdown1(!dropdown1);
                                        }}
                                    />
                                ) : (
                                    <FaChevronDown
                                        size={20}
                                        className="cursor-pointer"
                                        onClick={() => {
                                            setDropdown1(!dropdown1);
                                        }}
                                    />
                                )}
                            </div>
                            {dropdown1 && (
                                <>
                                    <div className="flex justify-between items-center mt-6  pb-2">
                                        <div className="flex items-center gap-x-4">
                                            <h6 className="font-normal text-base">Weight</h6>
                                            <p className="font-medium text-base text-black text-opacity-40">
                                                {data?.data?.package?.package_weight ?? "0.0"}kg
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-x-4">
                                            <h6 className="font-normal text-base">Volume</h6>
                                            <p className="font-medium text-base text-black text-opacity-40">
                                                {data?.data?.package?.package_volume ?? "0.0"}
                                            </p>
                                        </div>



                                        <div className="flex items-center gap-x-4">
                                            <h6 className="font-normal text-base">Quantity</h6>
                                            <p className="font-medium text-base text-black text-opacity-40">
                                                {data?.data?.package?.qty ?? "0.0"}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-x-4">
                                            <h6 className="font-normal text-base">No. of Packages</h6>
                                            <p className="font-medium text-base text-black text-opacity-40">
                                                {data?.data?.booking?.Packages?.length ?? "0.0"}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-lg">Packages</p>
                                    {
                                        data?.data?.booking?.Packages?.map((pack, index) => (
                                            <div className="flex justify-between items-center mt-6 border-b-2 pb-2">
                                                <div className="flex items-center gap-x-4">
                                                    <h6 className="font-normal text-base">S.No</h6>
                                                    <p className="font-medium text-base text-black text-opacity-40">
                                                        {index + 1}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-x-4">
                                                    <h6 className="font-normal text-base">Weight</h6>
                                                    <p className="font-medium text-base text-black text-opacity-40">
                                                        {pack.captureBillableWeight ?? "0.0"} kg
                                                    </p>
                                                </div>

                                                <div className="flex items-center gap-x-4">
                                                    <h6 className="font-normal text-base">Volume</h6>
                                                    <p className="font-medium text-base text-black text-opacity-40">
                                                        {pack.captureVolumetricWeight} cm
                                                    </p>
                                                </div>

                                                <div className="flex items-center gap-x-4">
                                                    <h6 className="font-normal text-base">Quantity</h6>
                                                    <p className="font-medium text-base text-black text-opacity-40">
                                                        {pack.qty ?? "0.00"} Packages
                                                    </p>
                                                </div>
                                            </div>
                                        ))

                                    }


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
                                {dropdown1 ? (
                                    <FaChevronUp
                                        size={20}
                                        className="cursor-pointer"
                                        onClick={() => {
                                            setDropdown1(!dropdown1);
                                        }}
                                    />
                                ) : (
                                    <FaChevronDown
                                        size={20}
                                        className="cursor-pointer"
                                        onClick={() => {
                                            setDropdown1(!dropdown1);
                                        }}
                                    />
                                )}
                            </div>
                            {dropdown1 && (
                                <div className="flex justify-between items-center mt-6">
                                    <div className="flex items-center gap-x-4">
                                        <h6 className="font-normal text-base">Insurance</h6>
                                        <p className="font-medium text-base text-black text-opacity-40">
                                            {data?.data?.booking?.insurance ? "Yes" : "No"}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-x-4">
                                        <h6 className="font-normal text-base">Repacking</h6>
                                        <p className="font-medium text-base text-black text-opacity-40">
                                            {data?.data?.booking?.repackingPrice ? "Yes" : "No"}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-x-4">
                                        <h6 className="font-normal text-base">Company</h6>
                                        <p className="font-medium text-base text-black text-opacity-40">
                                            {data?.data?.booking?.Company?.name ?? ""}
                                        </p>
                                    </div>
                                </div>
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
                                    <div className="flex justify-between items-center mt-6 pb-2">
                                        <div className="flex items-center gap-x-4">
                                            <h6 className="font-normal text-base">Weight</h6>
                                            <p className="font-medium text-base text-black text-opacity-40">
                                                {data?.data?.product?.product_weight ?? "0.00"}kg
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-x-4">
                                            <h6 className="font-normal text-base">Product Volume</h6>
                                            <p className="font-medium text-base text-black text-opacity-40">
                                                {data?.data?.product?.product_volume ?? "0.0"}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-x-4">
                                            <h6 className="font-normal text-base">Quantity</h6>
                                            <p className="font-medium text-base text-black text-opacity-40">
                                                {data?.data?.product?.qty ?? "0.0"}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-lg">Products</p>
                                    {
                                        data?.data?.booking?.Products?.map((product, index) => (
                                            <div className="flex justify-between items-center mt-6 border-b-2 pb-2">
                                                <div className="flex items-center gap-x-4">
                                                    <h6 className="font-normal text-base">S.No</h6>
                                                    <p className="font-medium text-base text-black text-opacity-40">
                                                        {index + 1}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-x-4">
                                                    <h6 className="font-normal text-base">Weight</h6>
                                                    <p className="font-medium text-base text-black text-opacity-40">
                                                        {product.volumetricWeight ?? "0.00"} kg
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-x-4">
                                                    <h6 className="font-normal text-base">Quantity</h6>
                                                    <p className="font-medium text-base text-black text-opacity-40">
                                                        {product?.qty ?? "0.00"} Products
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-x-4">
                                                    <h6 className="font-normal text-base">Price(R)</h6>
                                                    <p className="font-medium text-base text-black text-opacity-40">
                                                        {product?.price?.toFixed(1) ?? "0.00"}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    }
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
                                    <div>
                                        <div className="flex gap-x-12 items-center mt-6">
                                            <div className="flex items-center gap-x-4">
                                                <h6 className="font-normal text-base">Name</h6>
                                                <p className="font-medium text-base text-black text-opacity-40">
                                                    {data?.data?.booking?.SupplierDetail?.contactName ?? ""}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-x-4">
                                                <h6 className="font-normal text-base">Email </h6>
                                                <p className="font-medium text-base text-black text-opacity-40">
                                                    {data?.data?.booking?.SupplierDetail?.email ?? ""}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-12 items-center mt-6">
                                            <div className="flex items-center gap-x-4">
                                                <h6 className="font-normal text-base">Phone</h6>
                                                <p className="font-medium text-base text-black text-opacity-40">
                                                    {data?.data?.booking?.SupplierDetail?.phone ?? ""}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-x-4">
                                                <h6 className="font-normal text-base">Tracking No </h6>
                                                <p className="font-medium text-base text-black text-opacity-40">
                                                    {data?.data?.booking?.SupplierDetail?.trackingNo ?? ""}
                                                </p>
                                            </div>
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
                                    <div className="flex gap-x-12 items-center mt-6">
                                        <div className="flex items-center gap-x-4">
                                            <h6 className="font-normal text-base">First Name</h6>
                                            <p className="font-medium text-base text-black text-opacity-40">
                                                {data?.data?.booking?.User?.firstName ?? ""} 
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-x-4">
                                            <h6 className="font-normal text-base">Last Name </h6>
                                            <p className="font-medium text-base text-black text-opacity-40">
                                            {data?.data?.booking?.User?.lastName ?? ""}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-12 items-center mt-6">
                                        <div className="flex items-center gap-x-4">
                                            <h6 className="font-normal text-base">Phone</h6>
                                            <p className="font-medium text-base text-black text-opacity-40">
                                                {data?.data?.booking?.User?.phone ?? ""}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-x-4">
                                            <h6 className="font-normal text-base">Email </h6>
                                            <p className="font-medium text-base text-black text-opacity-40">
                                                {data?.data?.booking?.User?.email ?? ""}
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
                                            <li>Freight ({data?.data?.kg} Kg * ${data?.data?.companyTax})</li>
                                            <li>Import VAT</li>
                                            <li>Import Duties</li>
                                            <li>Customs Clearance Fee</li>
                                            <li>Insurance</li>
                                            <li>Repacking Fee</li>
                                        </ul>
                                        <ul className="font-normal text-base space-y-4">
                                            <li>$ {Number(data?.data?.booking?.freightPrice) ?? "0.00"}</li>
                                            <li>$ {data?.data?.vatTax ?? "0.00"}</li>
                                            <li>$ {data?.data?.importDuty ?? "0.00"}</li>
                                            <li>$ {data?.data?.customerClearanceFee ?? "0.00"}</li>
                                            <li>$ {data?.data?.insurance ?? "0.00"}</li>
                                            <li>$ {data?.data?.booking?.repackingPrice === null ? "0.00" : data?.data?.booking?.repackingPrice}</li>
                                        </ul>
                                    </div>
                                    <h1 className="font-medium text-4xl text-end">$ {data?.data?.booking?.totalPrice ?? "0.00"}</h1>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
                <div>
                    <h1 className="font-medium text-2xl text-black text-opacity-60 my-6">
                        Parcel Pictures
                    </h1>
                    {
                        data?.data?.booking?.BookingImages?.length > 0 ? <>

                            <div className="flex gap-x-8 gap-y-2 flex-wrap">
                                {
                                    data?.data?.booking?.BookingImages?.map((booking) => (
                                        <div key={booking.image}><img className="h-28 w-28 object-cover rounded-xl" src={IMAGE_URL + booking.image} alt="booking Image" /></div>
                                    ))
                                }
                                <div>
                                </div>
                            </div>
                        </> : <>
                            <p>Sorry! This order has no pictures</p>
                        </>
                    }

                </div>
                <div>
                    <h1 className="font-medium text-2xl text-black text-opacity-60 my-6">
                        Parcel Notes
                    </h1>
                    {
                        data?.data?.booking?.note !== null ? <p className="bg-white p-2">{data?.data?.booking?.note}</p> : <p>No notes added yet</p>
                    }

                </div>
            </section>


            <Modal
                size="xl"
                isOpen={DimensionOpen}
                onClose={DimensionOnClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add a Note</ModalHeader>

                    <ModalCloseButton />
                    {
                        loading ? <Loader2 /> : <>
                            <ModalBody>


                                <div>

                                    <textarea onChange={(e) => setNote(e.target.value)} placeholder="Write a note" className="w-full h-36 rounded p-4"></textarea>
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
                                        onClick={add_note}
                                    >
                                        Save
                                    </button>


                                </div>
                            </ModalFooter>
                        </>
                    }

                </ModalContent>
            </Modal>
        </>
    );
}
