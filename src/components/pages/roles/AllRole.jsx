// @ts-nocheck
import React, { useState } from "react";
import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";
import { error_toaster, success_toaster } from "../../toaster/Toaster";
import { PostApi } from "../../../ApiClient/PostApi";
import useFetch from "../../../ApiClient/GetApi";
import { Loader2 } from "../../loader/Loader";

import DataTable from "react-data-table-component";

import { BiEdit } from "react-icons/bi";
import customStyles from "../../dataTable/CustomStyles";
import { useDisclosure } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Checkbox,
} from "@chakra-ui/react";

export default function AllRole() {
  const { data, reFetch } = useFetch("get_all_roles");
  const permissions = useFetch("get_all_active_permissions");
  const [loading, SetLoading] = useState(false);
  const [formData, setFormData] = useState({ id: "", title: "" });
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState("");
  const {
    isOpen: DimensionOpen,
    onOpen: DimensionOnOpen,
    onClose: DimensionOnClose,
  } = useDisclosure();

  const checkbox_list = [];
  const checkBox_values = (value) => {
    if (checkbox_list.includes(value)) {
      const index = checkbox_list.indexOf(value);
      if (index > -1) {
        checkbox_list.splice(index, 1);
      }
    } else {
      checkbox_list.push(value);
    }
  };

  const block_role = async (id) => {
    SetLoading(true);
    const res = await PostApi("block_role", {
      roleId: id,
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
  const active_role = async (id) => {
    SetLoading(true);
    const res = await PostApi("active_role", {
      roleId: id,
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

  const OnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const update_role = (obj) => {
    setUpdate(true);
    setFormData({ title: obj.title, id: obj.id });
    DimensionOnOpen();
  };

  const update_role_post = async () => {
    SetLoading(true);
    const res = await PostApi("update_role", {
      roleId: formData.id,
      title: formData.title,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      empty_input_fields();
      DimensionOnClose();
      reFetch();
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };

  const add_role_open = () => {
    setUpdate(false);
    empty_input_fields();
    DimensionOnOpen();
  };

  const add_role = async () => {
    if(formData.title==="")
    {
      error_toaster("Title is required!");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("add_role", {
      title: formData.title,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      DimensionOnClose();
      reFetch();
      empty_input_fields();
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
    },
    {
      name: "Title",
      selector: (row) => row.title,
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
  data?.data?.map((role, index) => {
    return datas.push({
      id: index + 1,
      title: role.title,

      status:
        role.status === true ? (
          <button
            onClick={() => block_role(role.id)}
            className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md"
          >
            Active
          </button>
        ) : (
          <button
            onClick={() => active_role(role.id)}
            className="bg-themeRed2 text-themeRed font-medium text-xs px-8 py-1 rounded-md"
          >
            Block
          </button>
        ),
      action: (
        <BiEdit
          className="text-themeBlue cursor-pointer"
          onClick={() => update_role(role)}
          size={32}
        />
      ),
    });
  });

  const empty_input_fields = () => {
    setFormData({ id: "", title: "" });
  };

  const assign_permission_to_role = async () => {
    if (id === "") {
      error_toaster("Please select a Role");
      return false;
    }
    if (checkbox_list.length === "0") {
      error_toaster("Please check atleast one module!");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("assign_permission_to_role", {
      roleId: id,
      permissions: checkbox_list,
    });

    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      DimensionOnClose();
      reFetch();
      empty_input_fields();
      // window.location.reload();
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const selectOnChange = (value) => {
    // data?.data?.map((role) => {
    //     if (role.id == value) {
    //         role.RolePermissions.map((permission) => {
    //             permission_list.push(permission.PermissionId.toString());
    //         })
    //     }
    // })
    setId(value);
  };
  const selectStyle =
    "w-[370px] bg-white border-0 px-4 py-3 rounded-md border-none font-normal text-base focus:outline-none cursor-pointer appearance-none";
  return (
    <>
      <Leftbar />
      <Topbar main="Role Managment" extend={false} />

      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        <button
          onClick={() => add_role_open()}
          className="py-3 w-[200px] bg-themeBlue border border-themeBlue text-white rounded hover:text-themeBlue hover:bg-white hover:border-themeBlue"
        >
          Add New Role
        </button>
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
        <p className="text-lg font-semibold">Assign Modules to Role</p>
        <select
          onChange={(e) => selectOnChange(e.target.value)}
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
        <p className="font-semibold text-gray-500">System module selection</p>
        <div className="flex flex-wrap gap-x-6 gap-y-4">
          {permissions?.data?.data?.map((permission) => (
            <div className="bg-white py-3 px-10 rounded">
              <Checkbox
                name={permission.id}
                value={permission.id}
                onChange={(e) => checkBox_values(e.target.value)}
              >
                {permission.title}
              </Checkbox>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={assign_permission_to_role}
            className="bg-themeBlue text-white py-3 w-[250px] rounded hover:text-themeBlue hover:bg-white"
          >
            Assign Modules
          </button>
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
          <ModalHeader>Role Section</ModalHeader>

          <ModalCloseButton />
          {loading ? (
            <Loader2 />
          ) : (
            <>
              <ModalBody>
                <div className="flex gap-x-2">
                  <div>
                    <div>
                      <label>Title</label>
                    </div>
                    <input
                      onChange={OnChange}
                      className="bg-[#F4F7FF] py-3 rounded w-[500px] p-4 focus:outline-themeBlue"
                      placeholder="Title"
                      value={formData.title}
                      name="title"
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
                  {update ? (
                    <button
                      className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                      onClick={update_role_post}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                      onClick={add_role}
                    >
                      Save
                    </button>
                  )}
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
