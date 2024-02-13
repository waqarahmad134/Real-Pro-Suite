// @ts-nocheck
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { BsArrowLeftRight, BsSearch, BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useFetch from "../../../ApiClient/GetApi";
import customStyles from "../../dataTable/CustomStyles";
import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Moment from "react-moment";
import { error_toaster, success_toaster } from "../../toaster/Toaster";
import { PostApi } from "../../../ApiClient/PostApi";
import { Loader2 } from "../../loader/Loader";
import { CSVLink } from "react-csv";
import { TbListDetails } from "react-icons/tb";
export default function TransactionHistory() {
  const { data, reFetch } = useFetch("transaction_history");
  console.log("🚀 ~ file: TransactionHistory.jsx:28 ~ TransactionHistory ~ data:", data)

  const users = useFetch("all_users");
  const [submitData, setSubmitData] = useState({
    transactionId: "",
    amount: "",
    bank: "",
    BookingId: "",
    UserId: "",
    paymentStatus: "",
  });
  const [loading, SetLoading] = useState(false);
  const [date, setDate] = useState("");

  function formatDate() {
    const now = Date.now();
    const date = new Date(now);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  const onChange = (e) => {
    setSubmitData({ ...submitData, [e.target.name]: e.target.value });
  };

  const add_transaction = async () => {
    if (submitData.transactionId === "") {
      error_toaster("Transaction ID is required!");
      return false;
    } else if (submitData.amount === "") {
      error_toaster("Amount is required!");
      return false;
    } else if (submitData.bank === "") {
      error_toaster("Please select Bank!");
      return false;
    } else if (submitData.BookingId === "") {
      error_toaster("Order ID is required!");
      return false;
    } else if (submitData.UserId === "") {
      error_toaster("Please select User!");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("add_transaction", {
      transactionId: submitData?.transactionId,
      amount: submitData?.amount,
      bank: submitData?.bank,
      BookingId: submitData?.BookingId,
      UserId: submitData?.UserId,
      paymentStatus: "successfull",
    });
    if (res?.data?.status === "1") {
      SetLoading(false);
      success_toaster(res?.data?.message);
      reFetch();
      setSubmitData({
        transactionId: "",
        amount: "",
        bank: "",
        BookingId: "",
        UserId: "",
        paymentStatus: "",
      });
      setModal(false);
    } else {
      SetLoading(false);
      error_toaster(res?.data?.message);
    }
  };
  const detailModalClose = (obj) => {
    setdetailModal(!detailModal);

    setDate(obj.date);
    setSubmitData({
      transactionId: obj?.transactionId,
      amount: obj?.amount,
      bank: obj?.bank,
      BookingId: obj?.BookingId,
      UserId: obj?.User?.firstName,
      paymentStatus: obj?.paymentStatus,
    });
  };

  const mystyle = {
    whiteSpace: "nowrap",
    overFlow: "hidden",
    textOverflow: "ellipsis",
  };
  const columns = [
    {
      name: "S.No",
      selector: (row) => row.sno,
      wrap: true,
      width: "100px",
    },
    {
      name: "Transaction ID",
      selector: (row) => row.id,
      wrap: true,
      width: "300px",
    },
    {
      name: "Sender",
      selector: (row) => row.sender,
      wrap: true,
      width: "200px",
    },
    {
      name: "Date",
      selector: (row) => row.date,
      wrap: true,
      width: "250px",
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: "Bank",
      selector: (row) => row.bank,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      width: "200px",
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
  const [query, setQuery] = useState("");
  data?.data?.all?.map((history, index) => {
    if (query === "") {
      all.push({
        sno: index + 1,
        id: history?.transactionId,
        sender: history?.User?.firstName + " " + history?.User?.lastName,
        date: <Moment format="D MMM , YYYY hh:mm a">{history?.date}</Moment>,
        amount: (
          <p className="bg-themeGreen text-green-900 px-4 py-1 rounded-md">
            {"$" + history?.amount}
          </p>
        ),
        bank: history?.bank ?? "",
        status: (
          <button className="bg-themePink2 text-themeRed font-medium text-xs px-2 py-1 rounded-md">
            {history?.paymentStatus}
          </button>
        ),
        action: (
          <TbListDetails
            onClick={() => detailModalClose(history)}
            size={32}
            className="cursor-pointer text-themeBlue"
          />
        ),
      });
    } else if (query === history?.transactionId) {
      all?.push({
        sno: index + 1,
        id: history?.transactionId,
        sender: history?.User?.firstName + " " + history?.User?.lastName,
        date: <Moment format="D MMM , YYYY hh:mm a">{history?.date}</Moment>,
        amount: "$" + history?.amount,
        bank: history?.bank ?? "",
        status: (
          <button className="bg-themePink2 text-themeRed font-medium text-xs px-8 py-1 rounded-md">
            {history?.paymentStatus}
          </button>
        ),
        action: (
          <Link to={"/transaction_history"}>
            <BsThreeDots size={32} />
          </Link>
        ),
      });
    }
  });
  data?.data?.monthly?.map((history, index) => {
    if (query === "") {
      monthly_data.push({
        sno: index + 1,
        id: history?.transactionId,
        sender: history?.User?.firstName + " " + history?.User?.lastName,
        date: <Moment format="D MMM , YYYY hh:mm a">{history?.date}</Moment>,
        amount: "$" + history?.amount,
        bank: history?.bank ?? "",
        status: (
          <button className="bg-themePink2 text-themeRed font-medium text-xs px-8 py-1 rounded-md">
            {history?.paymentStatus}
          </button>
        ),
        action: (
          <Link to={"/transaction_history"}>
            <BsThreeDots size={32} />
          </Link>
        ),
      });
    } else if (history?.transactionId === query) {
      monthly_data.push({
        sno: index + 1,
        id: history?.transactionId,
        sender: history?.User?.firstName + " " + history?.User?.lastName,
        date: <Moment format="D MMM , YYYY hh:mm a">{history?.date}</Moment>,
        amount: "$" + history?.amount,
        bank: history?.bank ?? "",
        status: (
          <button className="bg-themePink2 text-themeRed font-medium text-xs px-8 py-1 rounded-md">
            {history?.paymentStatus}
          </button>
        ),
        action: (
          <Link to={"/transaction_history"}>
            <BsThreeDots size={32} />
          </Link>
        ),
      });
    }
  });
  data?.data?.weekly?.map((history, index) => {
    if (query === "") {
      weekly_data.push({
        sno: index + 1,
        id: history?.transactionId,
        sender: history?.User?.firstName + " " + history?.User?.lastName,
        date: <Moment format="D MMM , YYYY hh:mm a">{history?.date}</Moment>,
        amount: "$" + history?.amount,
        bank: history?.bank ?? "",
        status: (
          <button className="bg-themePink2 text-themeRed font-medium text-xs px-8 py-1 rounded-md">
            {history?.paymentStatus}
          </button>
        ),
        action: (
          <Link to={"/transaction_history"}>
            <BsThreeDots size={32} />
          </Link>
        ),
      });
    } else if (history?.transactionId === query) {
      weekly_data.push({
        sno: index + 1,
        id: history?.transactionId,
        sender: history?.User?.firstName + " " + history?.User?.lastName,
        date: <Moment format="D MMM , YYYY hh:mm a">{history?.date}</Moment>,
        amount: "$" + history?.amount,
        bank: history?.bank ?? "",
        status: (
          <button className="bg-themePink2 text-themeRed font-medium text-xs px-8 py-1 rounded-md">
            {history?.paymentStatus}
          </button>
        ),
        action: (
          <Link to={"/transaction_history"}>
            <BsThreeDots size={32} />
          </Link>
        ),
      });
    }
  });
  data?.data?.today?.map((history, index) => {
    if (query === "") {
      today_data.push({
        sno: index + 1,
        id: history?.transactionId,
        sender: history?.User?.firstName + " " + history?.User?.lastName,
        date: <Moment format="D MMM , YYYY hh:mm a">{history?.date}</Moment>,
        amount: "$" + history?.amount,
        bank: history?.bank ?? "",
        status: (
          <button className="bg-themePink2 text-themeRed font-medium text-xs px-8 py-1 rounded-md">
            {history?.paymentStatus}
          </button>
        ),
        action: (
          <Link to={"/transaction_history"}>
            <BsThreeDots size={32} />
          </Link>
        ),
      });
    } else if (history?.transactionId === query) {
      today_data.push({
        sno: index + 1,
        id: history?.transactionId,
        sender: history?.User?.firstName + " " + history?.User?.lastName,
        date: <Moment format="D MMM , YYYY hh:mm a">{history?.date}</Moment>,
        amount: "$" + history?.amount,
        bank: history?.bank ?? "",
        status: (
          <button className="bg-themePink2 text-themeRed font-medium text-xs px-8 py-1 rounded-md">
            {history?.paymentStatus}
          </button>
        ),
        action: (
          <Link to={"/transaction_history"}>
            <BsThreeDots size={32} />
          </Link>
        ),
      });
    }
  });

  const generateCSVData = () => {
    const csvData = [];

    // Add headers to CSV data
    csvData.push(["Transaction ID", "Sender", "Date", "Amount", "Bank"]);

    // Add rows to CSV data
    data?.data?.all?.forEach((item) => {
      csvData.push([
        item.transactionId,
        item?.User?.firstName + " " + item?.User?.lastName,
        item?.date,
        item?.amount,
        item?.bank,
      ]);
    });

    return csvData;
  };
  const tabStyle =
    "font-normal text-base text-black text-opacity-60 bg-transparent py-3 px-7";
  const activeTabStyle =
    "font-normal text-base text-white bg-themeBlue py-3 px-7 rounded-xl";
  const labelStyle = "font-normal text-sm text-black text-opacity-60";
  const inputStyle =
    "w-full bg-themeGray px-4 py-3 rounded-md border-none font-normal text-base focus:outline-none";
  const selectStyle =
    "w-full bg-themeGray px-4 py-3 rounded-md border-none font-normal text-base focus:outline-none cursor-pointer appearance-none";
  const [filter, setFilter] = useState("");
  const [modal, setModal] = useState(false);
  const [detailModal, setdetailModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <Modal
        onClose={detailModalClose}
        isOpen={detailModal}
        size="3xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          {loading ? (
            <div className="h-[468px]">
              <Loader2 />
            </div>
          ) : (
            <ModalBody className="bg-white rounded-lg">
              <div className="py-6 px-3">
                <div className="flex justify-between">
                  <h1 className="font-medium text-2xl">Transaction Details</h1>
                  <button
                    onClick={detailModalClose}
                    className="py-1 px-4 bg-themeBlue text-white hover:bg-white hover:text-themeBlue border border-themeBlue"
                  >
                    Close
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-4 py-5">
                  <div className="space-y-2">
                    <label htmlFor="order_id" className={labelStyle}>
                      Order ID
                    </label>
                    <input
                      type="text"
                      value={submitData?.BookingId}
                      readOnly
                      className={inputStyle}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="transaction_id" className={labelStyle}>
                      Transaction ID
                    </label>
                    <input
                      type="text"
                      value={submitData?.transactionId}
                      readOnly
                      className={inputStyle}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="transaction_id" className={labelStyle}>
                      Amount ($)
                    </label>
                    <input
                      type="text"
                      value={submitData?.amount}
                      readOnly
                      className={inputStyle}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="from" className={labelStyle}>
                      Bank
                    </label>
                    <input
                      type="text"
                      value={submitData?.bank}
                      readOnly
                      className={inputStyle}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="to" className={labelStyle}>
                      User
                    </label>
                    <input
                      type="text"
                      value={submitData?.UserId}
                      readOnly
                      className={inputStyle}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="to" className={labelStyle}>
                      Date
                    </label>
                    <div className="py-3 rounded bg-themeGray px-4">
                      <Moment format="D MMM , YYYY hh:mm a">{date}</Moment>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end"></div>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
      <Modal onClose={closeModal} isOpen={modal} size="3xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          {loading ? (
            <div className="h-[468px]">
              <Loader2 />
            </div>
          ) : (
            <ModalBody className="bg-white rounded-lg">
              <div className="py-6 px-3">
                <h1 className="font-medium text-2xl">Add a Transaction</h1>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 py-5">
                  <div className="space-y-2">
                    <label htmlFor="order_id" className={labelStyle}>
                      Order ID
                    </label>
                    <input
                      type="text"
                      onChange={onChange}
                      value={submitData?.BookingId}
                      name="BookingId"
                      id="BookingId"
                      placeholder="1234567"
                      className={inputStyle}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="transaction_id" className={labelStyle}>
                      Transaction ID
                    </label>
                    <input
                      type="text"
                      onChange={onChange}
                      value={submitData?.transactionId}
                      name="transactionId"
                      id="transaction_id"
                      placeholder="CSW-3455325"
                      className={inputStyle}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="transaction_id" className={labelStyle}>
                      Amount
                    </label>
                    <input
                      type="text"
                      onChange={onChange}
                      value={submitData?.amount}
                      name="amount"
                      id="transaction_id"
                      placeholder="$100"
                      className={inputStyle}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="from" className={labelStyle}>
                      Bank
                    </label>
                    <select
                      onChange={onChange}
                      name="bank"
                      id="from"
                      className={selectStyle}
                    >
                      <option>Select Bank</option>
                      <option value="PayPal">PayPal</option>
                      <option value="Paystack">Paystack</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="to" className={labelStyle}>
                      User
                    </label>
                    <select
                      onChange={onChange}
                      name="UserId"
                      id="to"
                      className={selectStyle}
                    >
                      <option>Select Customer</option>
                      {users?.data?.data?.map((user, index) => (
                        <option key={user?.id} value={user?.id}>
                          {user?.firstname + " " + user?.lastName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-x-3 py-3">
                  <button
                    onClick={closeModal}
                    className="font-normal text-xl text-themeBlue bg-transparent border border-themeBlue py-1 px-4 rounded-md hover:bg-themeBlue hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={add_transaction}
                    className="font-normal text-xl text-white bg-themeBlue border border-themeBlue py-1 px-4 rounded-md hover:bg-transparent hover:text-themeBlue"
                  >
                    Save
                  </button>
                </div>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
      <Leftbar />
      <Topbar main="Transactions" extend={false} />
      <section className="relative w-[calc(100%-280px)] top-[148px] py-5 px-10 float-right space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-x-3">
            <BsArrowLeftRight size={30} className="text-themeBlue" />
            <span className="font-bold text-3xl">Transaction History</span>
          </h1>
          <CSVLink
            className="py-2 px-6 bg-themeBlue rounded text-white border border-themeBlue hover:text-themeBlue hover:bg-white cursor-pointer"
            data={generateCSVData()}
            filename={`TransactionHistory-${formatDate()}.csv`}
          >
            Export to CSV
          </CSVLink>
          <div className="flex items-center">
            <input
              type="search"
              name="search"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ex: Search by Trans. ID"
              className="bg-transparent border border-black border-opacity-40 rounded-md py-3 pl-4 pr-14 font-normal text-xl w-96 focus:outline-none"
            />
            <button className="bg-themeBlue flex justify-center items-center py-3 px-3 border border-black border-opacity-40 rounded-md absolute right-10">
              <BsSearch size={28} className="text-white" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-8 pb-10">
          <button
            onClick={() => {
              setModal(true);
            }}
            className="bg-transparent text-themeBlue border border-themeBlue rounded-md py-3 px-4 flex items-center gap-x-2 hover:bg-themeBlue hover:text-white"
          >
            <FaPlus size={18} />
            <span>Add Transaction</span>
          </button>
          <div className="float-right w-fit bg-white rounded-xl">
            <button
              className={filter === "" ? activeTabStyle : tabStyle}
              onClick={() => {
                setFilter("");
              }}
            >
              All
            </button>
            <button
              className={filter === "monthly" ? activeTabStyle : tabStyle}
              onClick={() => {
                setFilter("monthly");
              }}
            >
              Monthly
            </button>
            <button
              className={filter === "weekly" ? activeTabStyle : tabStyle}
              onClick={() => {
                setFilter("weekly");
              }}
            >
              Weekly
            </button>
            <button
              className={filter === "today" ? activeTabStyle : tabStyle}
              onClick={() => {
                setFilter("today");
              }}
            >
              Today
            </button>
          </div>
        </div>

        {data.length === 0 ? (
          <Skeleton count={20} />
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
      </section>
    </>
  );
}
