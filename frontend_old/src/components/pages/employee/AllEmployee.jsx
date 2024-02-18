// @ts-nocheck
import React, { useState } from "react";
import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";
import { error_toaster, success_toaster } from "../../toaster/Toaster";
import { PostApi } from "../../../ApiClient/PostApi";
import useFetch from "../../../ApiClient/GetApi";
import { Loader2 } from "../../loader/Loader";

import DataTable from "react-data-table-component";
import { BsThreeDots } from "react-icons/bs";
import customStyles from "../../dataTable/CustomStyles";

import { Link } from "react-router-dom";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function AllEmployee() {
  const { data, reFetch } = useFetch("get_all_employees");
  const [loading, SetLoading] = useState(false);
  const [dropdownShow, setDropdownShow] = useState(false);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [id, setId] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const roles = useFetch("get_all_active_roles");
  const update_user = async (user) => {
    setModal(true);
    setEdit({
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
    });
  };
  const save_user = async () => {
    SetLoading(true);
    const res = await PostApi("update_employee", {
      employeeId: edit.userId,
      firstName: edit.firstName,
      lastName: edit.lastName,
      email: edit.email,
      phone: edit.phone,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      reFetch();
      setModal(false);
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const onChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };
  const block_user = async (id) => {
    SetLoading(true);
    const res = await PostApi("block_employee", {
      employeeId: id,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      error_toaster(res.data.message);
      reFetch();
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const activate_user = async (id) => {
    SetLoading(true);
    const res = await PostApi("activate_employee", {
      employeeId: id,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      reFetch();
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const closeModal = () => {
    setModal(false);
  };
  const showDropdown = () => {
    setDropdownShow(!dropdownShow);
  };

  const assign_role_to_employee = async () => {
    if (id === "") {
      error_toaster("Please select a Role!");
      return false;
    }
    if (employeeId === "") {
      error_toaster("Please select an Employee!");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("assign_role_to_employee", {
      roleId: id,
      employeeId: employeeId,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      empty_input_fields();
      success_toaster(res.data.message);
      reFetch();
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };

  const empty_input_fields = () => {
    setId("");
    setEmployeeId("");
    setEdit({ userId: "", firstName: "", lastName: "", email: "", phone: "" });
  };
  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
    },
    {
      name: "User ID",
      selector: (row) => row.user_id,
    },

    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Role",
      selector: (row) => row.role,
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
  const datas = [];
  data?.data?.map((order, index) => {
    return datas.push({
      id: index + 1,
      user_id: order.id,
      name: order?.firstName + " " + order?.lastName ?? "",
      email: order.email,
      phone: order.phone,
      role: order.Role?.title ?? "Not Assigned",
      status:
        order.status === true ? (
          <button
            onClick={() => block_user(order.id)}
            className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md"
          >
            Active
          </button>
        ) : (
          <button
            onClick={() => activate_user(order.id)}
            className="bg-themeRed2 text-themeRed font-medium text-xs px-8 py-1 rounded-md"
          >
            Block
          </button>
        ),
      action: (
        <Link onClick={() => update_user(order)}>
          <BsThreeDots onClick={showDropdown} size={32} />
        </Link>
      ),
    });
  });
  const labelStyle = "font-normal text-sm text-black text-opacity-60";
  const inputStyle =
    "w-full bg-themeGray px-4 py-3 rounded-md border-none font-normal text-base focus:outline-none";
  const selectStyle =
    "w-full bg-white px-4 py-3 rounded-md border-none font-normal text-base focus:outline-none cursor-pointer appearance-none";
  return (
    <>
      <Leftbar />
      <Topbar main="All Employee" extend={false} />
      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        {loading ? (
          <Loader2 />
        ) : (
          <DataTable
            theme="myTheme"
            customStyles={customStyles}
            columns={columns}
            data={datas}
            pagination
          />
        )}

        <p className="text-lg font-semibold">Assign Role to Employee</p>
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-2">
            <label>Roles</label>
            <select
              onChange={(e) => setId(e.target.value)}
              value={id}
              className={selectStyle}
            >
              <option>Select Role</option>
              {roles?.data?.data?.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.title}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label>Employees</label>
            <select
              onChange={(e) => setEmployeeId(e.target.value)}
              value={employeeId}
              className={selectStyle}
            >
              <option>Select Employee</option>
              {data?.data?.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.firstName + " " + role.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-2 flex justify-end">
            <button
              onClick={assign_role_to_employee}
              className="py-3 px-5 bg-themeBlue text-white rounded hover:bg-white hover:text-themeBlue border border-themeBlue"
            >
              Assign Role
            </button>
          </div>
        </div>
      </section>

      <Modal onClose={closeModal} isOpen={modal} size="3xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          {loading ? (
            <Loader2 />
          ) : (
            <ModalBody className="bg-white rounded-lg">
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
                  <button
                    onClick={save_user}
                    className="font-normal text-xl text-white bg-themeBlue border border-themeBlue py-1 px-4 rounded-md hover:bg-transparent hover:text-themeBlue"
                  >
                    Update
                  </button>
                </div>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
