// @ts-nocheck
import React, { useState } from "react";
import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";
import { error_toaster, success_toaster } from "../../toaster/Toaster";
import { PostApi } from "../../../ApiClient/PostApi";
import useFetch from "../../../ApiClient/GetApi";
import { Loader2 } from "../../loader/Loader";

export default function AddEmployee() {
  const { data } = useFetch("get_all_roles");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    roleId: "",
    confirmPassword: "",
  });
  const [loading, SetLoading] = useState(false);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  const add_employee = async () => {
    if (formData.firstName === "") {
      error_toaster("First Name is required!");
      return false;
    }
    if (formData.lastName === "") {
      error_toaster("Last Name is required!");
      return false;
    }
    if (formData.phone === "") {
      error_toaster("Phone No. is required!");
      return false;
    }
    if (formData.email === "") {
      error_toaster("Email is required!");
      return false;
    }
    if(!validateEmail(formData.email))
    {
      error_toaster("Please enter a valid email!");
      return false;
    }
    if (formData.password === "") {
      error_toaster("Password is required!");
      return false;
    }
    if (formData.confirmPassword === "") {
      error_toaster("Confirm Password is required!");
      return false;
    }
    if (formData.roleId === "") {
      error_toaster("Role is required!");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("add_employee", {
      firstName: formData.firstName,
      email: formData.email,
      phone: formData.phone,
      lastName: formData.lastName,
      password: formData.password,
      confirm_password: formData.confirmPassword,
      roleId: formData.roleId,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      empty_input_fields();
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const empty_input_fields = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      roleId: "",
      confirmPassword: "",
    });
  };
  const selectStyle =
    "w-full bg-themeGray px-4 py-3 rounded-md border-none font-normal text-base focus:outline-none cursor-pointer appearance-none";
  return (
    <>
      <Leftbar />
      <Topbar main="Add New Employee" extend={false} />
      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        {loading ? (
          <Loader2 />
        ) : (
          <div className="bg-white p-10 space-y-6">
            <p className="text-lg text-gray-500 font-semibold">General Information</p>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              <div className="space-y-2">
                <div>
                  <label>First Name</label>
                </div>
                <input
                  onChange={onChange}
                  name="firstName"
                  value={formData.firstName}
                  className="py-3 px-8 bg-themeGray3 focus:outline-gray-200 w-full"
                  placeholder="First Name"
                />
              </div>
              <div className="space-y-2">
                <div>
                  <label>Last name</label>
                </div>

                <input
                  onChange={onChange}
                  name="lastName"
                  value={formData.lastName}
                  className="py-3 px-8 bg-themeGray3 focus:outline-gray-200 w-full"
                  placeholder="Last name"
                />
              </div>
              <div className="space-y-2">
                <div>
                  <label>Role</label>
                </div>
                <select
                  name="roleId"
                  id="from"
                  onChange={onChange}
                  value={formData.roleId}
                  className={selectStyle}
                >
                  <option>Select Role</option>
                  {data?.data?.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <div>
                  <label>Phone no</label>
                </div>

                <input
                  onChange={onChange}
                  value={formData.phone}
                  name="phone"
                  className="py-3 px-8 bg-themeGray3 focus:outline-gray-200 w-full"
                  placeholder="3547568709"
                />
              </div>
              <p className="text-lg text-gray-500 font-semibold col-span-2 mt-3">
                Account Information
              </p>
              <div className="space-y-2">
                <div>
                  <label>Email</label>
                </div>
                <input
                  onChange={onChange}
                  name="email"
                  value={formData.email}
                  type="email"
                  className="py-3 px-8 bg-themeGray3 focus:outline-gray-200 w-full border-none focus:outline-none focus:ring-0"
                  placeholder="Example@gmail.com"
                />
              </div>
              <div className="space-y-2">
                <div>
                  <label>Password</label>
                </div>
                <input
                  onChange={onChange}
                  name="password"
                  value={formData.password}
                  type="password"
                  className="py-3 px-8 bg-themeGray3 focus:outline-gray-200 w-full border-none focus:outline-none focus:ring-0"
                  placeholder="******"
                />
              </div>
              <div className="space-y-2">
                <div>
                  <label>Confirm Password</label>
                </div>
                <input
                  onChange={onChange}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  type="password"
                  className="py-3 px-8 bg-themeGray3 focus:outline-gray-200 w-full border-none focus:outline-none focus:ring-0"
                  placeholder="*******"
                />
              </div>
            </div>
            <div className="flex gap-x-2 justify-end">
              <div>
                <button
                  onClick={empty_input_fields}
                  className="text-themeBlue rounded border border-themeBlue py-1 px-8 hover:text-white hover:bg-themeBlue"
                >
                  Reset
                </button>
              </div>
              <div>
                <button
                  onClick={add_employee}
                  className="bg-themeBlue text-white rounded py-1 px-8 border border-themeBlue hover:text-themeBlue hover:bg-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
