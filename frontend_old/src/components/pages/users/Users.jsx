// @ts-nocheck
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { BsSearch } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import useFetch from "../../../ApiClient/GetApi";
import { PostApi } from "../../../ApiClient/PostApi";
import customStyles from "../../dataTable/CustomStyles";
import { Loader2 } from "../../loader/Loader";
import { error_toaster, success_toaster } from "../../toaster/Toaster";
import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
export default function Users() {
  const navigate = useNavigate();
  const { data, reFetch } = useFetch("all_users");
  const [loading, setLoading] = useState(false);
  // const [dropdownShow, setDropdownShow] = useState(false);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState({ userId: "", firstName: "", lastName: "", email: "", phone: "" });

  const onChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value })
  }


  const block_user = async (id) => {
    setLoading(true)
    const res = await PostApi("block_user", {
      userId: id
    });
    if (res.data.status === "1") {
      setLoading(false);
      error_toaster(res.data.message);
      reFetch();
    }
    else {
      error_toaster(res.data.message);
      setLoading(false);
    }
  }
  const activate_user = async (id) => {
    setLoading(true)
    const res = await PostApi("activate_user", {
      userId: id
    });
    if (res.data.status === "1") {
      setLoading(false);
      success_toaster(res.data.message);
      reFetch();
    }
    else {
      error_toaster(res.data.message);
      setLoading(false);
    }
  }
  const save_user = async () => {
    setLoading(true)
    const res = await PostApi("update_user", {
      userId: edit.userId,
      firstName: edit.firstName,
      lastName: edit.lastName,
      email: edit.email,
      phone: edit.phone,
    });
    if (res.data.status === "1") {
      setLoading(false);
      success_toaster(res.data.message);
      reFetch();
      setModal(false);
    }
    else {
      error_toaster(res.data.message);
      setLoading(false);
    }
  }

  const user_detail = (id) => {
    navigate('/users/user_details', { state: { userId: id } });
  }
  const columns = [
    {
      name: "S.No",
      selector: (row) => row.id,
     
    },
   
    {
      name: "User ID",
      selector: (row) => row.user_id,
    },

    {
      name: "Name",
      selector: (row) => row.name,
      wrap:true,
      width:"250px"
    },
    {
      name: "Email",
      selector: (row) => row.email,
      wrap:true,
      width:"300px"
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      wrap:true,
      width:"250px"
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
  const [query, setQuery] = useState('');
  const datas = [];
  data?.data?.map((user, index) => {
    if (query == '') {
      return datas.push({
        id: index + 1,
        user_id: user.id,
        name: user.firstname + " " + user.lastName,
        email: user.email,
        phone: user.phone,
        status: user.status === true ? <button onClick={() => block_user(user.id)} className="bg-themeBlue3 text-themeBlue font-medium text-xs px-4 py-1 rounded-md">
          Active
        </button> : <button onClick={() => activate_user(user.id)} className="bg-themeRed2 text-themeRed font-medium text-xs px-4 py-1 rounded-md">
          Block
        </button>,
        action: (
          <>
            <button size={36} className="py-1 px-2 bg-themeBlue text-white rounded border border-themeBlue hover:bg-white hover:text-themeBlue hover:cursor-pointer" onClick={() => user_detail(user.id)}>Details</button>
          </>
        ),
      })
    }
    else if (user.id.toString().toLowerCase().match(query.toString().toLowerCase())) {
      return datas.push({
        id: index + 1,
        user_id: user.id,
        name: user.firstname + " " + user.lastName,
        email: user.email,
        phone: user.phone,
        status: user.status === true ? <button onClick={() => block_user(user.id)} className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
          Active
        </button> : <button onClick={() => activate_user(user.id)} className="bg-themeRed2 text-themeRed font-medium text-xs px-8 py-1 rounded-md">
          Block
        </button>,
        action: (
          <>
            <FaEdit size={36} className=" text-themeBlue cursor-pointer" onClick={() => user_detail(user.id)} />
          </>
        ),
      })
    }

  })
  const closeModal = () => {
    setModal(false);
  };
  const labelStyle = "font-normal text-sm text-black text-opacity-60";
  const inputStyle =
    "w-full bg-themeGray px-4 py-3 rounded-md border-none font-normal text-base focus:outline-none";
  return (
    <>
      <Leftbar />
      <Topbar main="User Management" extend={false} />
      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-x-3">
            <HiUsers size={40} className="text-themeBlue" />
            <span className="font-bold text-2xl">All Users</span>
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
        {
          loading ? <Loader2 /> : <DataTable
            theme="myTheme"
            customStyles={customStyles}
            columns={columns}
            data={datas}

            pagination
          />
        }

      </section>

      <Modal onClose={closeModal} isOpen={modal} size="3xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          {
            loading ? <Loader2 /> : <ModalBody className="bg-white rounded-lg">
              <div className="py-6 px-3">
                <h1 className="font-medium text-2xl">Update User</h1>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 py-5">
                  <div className="space-y-2">
                    <label htmlFor="order_id" className={labelStyle}>
                      First Name
                    </label>
                    <input
                      type="text"
                      onChange={onChange}
                      value={edit.firstName}
                      name="firstName"
                      id="BookingId"
                      placeholder="First Name"
                      className={inputStyle}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="transaction_id" className={labelStyle}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      onChange={onChange}
                      value={edit.lastName}
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      className={inputStyle}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="transaction_id" className={labelStyle}>
                      Email
                    </label>
                    <input
                      type="text"
                      onChange={onChange}
                      value={edit.email}
                      name="email"
                      id="email"
                      placeholder="Email"
                      className={inputStyle}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="transaction_id" className={labelStyle}>
                      Phone
                    </label>
                    <input
                      type="text"
                      onChange={onChange}
                      value={edit.phone}
                      name="phone"
                      id="transaction_id"
                      placeholder="Phone No"
                      className={inputStyle}
                    />
                  </div>


                </div>
                <div className="flex items-center justify-end gap-x-3 py-3">
                  <button
                    onClick={closeModal}
                    className="font-normal text-xl text-themeBlue bg-transparent border border-themeBlue py-1 px-4 rounded-md hover:bg-themeBlue hover:text-white"
                  >
                    Cancel
                  </button>
                  <button onClick={save_user} className="font-normal text-xl text-white bg-themeBlue border border-themeBlue py-1 px-4 rounded-md hover:bg-transparent hover:text-themeBlue">
                    Update
                  </button>
                </div>
              </div>
            </ModalBody>
          }

        </ModalContent>
      </Modal>
    </>
  );
}
