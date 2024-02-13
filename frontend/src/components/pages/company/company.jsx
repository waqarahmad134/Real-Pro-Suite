// @ts-nocheck
import React, { useState } from "react";
import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";
import { error_toaster, success_toaster } from "../../toaster/Toaster";
import { PostApi } from "../../../ApiClient/PostApi";
import useFetch from "../../../ApiClient/GetApi";
import { Loader2 } from "../../loader/Loader";

import DataTable from "react-data-table-component";
import { FaEdit } from "react-icons/fa";
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
} from "@chakra-ui/react";

export default function Company() {
  const { data, reFetch } = useFetch("get_all_companies");

  const [loading, SetLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    link: "",
    startDay: "",
    endDay: "",
  });
  const [update, setUpdate] = useState(false);

  const {
    isOpen: DimensionOpen,
    onOpen: DimensionOnOpen,
    onClose: DimensionOnClose,
  } = useDisclosure();

  const block_role = async (id) => {
    SetLoading(true);
    const res = await PostApi("block_company", {
      companyId: id,
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
    const res = await PostApi("active_company", {
      companyId: id,
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
    setFormData({
      name: obj.name,
      id: obj.id,
      link: obj.link,
      startDay: obj.startDay,
      endDay: obj.endDay,
    });
    DimensionOnOpen();
  };

  const update_role_post = async () => {
    SetLoading(true);
    const res = await PostApi("update_company", {
      companyId: formData.id,
      name: formData.name,
      link: formData.link,
      startDay: formData.startDay,
      endDay: formData.endDay,
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
    if (formData.name === "") {
      error_toaster("Company name is required!");
      return false;
    }

    if (formData.startDay === "" || formData.startDay === undefined) {
      error_toaster("Start Day is required");
      return false;
    }
    if (formData.endDay === "" || formData.endDay === undefined) {
      error_toaster("End Day is required");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("add_company", {
      name: formData.name,
  
      startDay: formData.startDay,
      endDay: formData.endDay,
      link: formData.link,
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
      name: "Name",
      selector: (row) => row.name,
    },
    // {
    //     name: "Tax($)",
    //     selector: (row) => row.tax,
    // },
    {
      name: "From",
      selector: (row) => row.from,
    },
    {
      name: "link",
      selector: (row) => row.link,
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
      name: role.name,
      // tax: role?.tax??"0.0",
      from: `${role?.startDay ?? ""}-${role?.endDay ?? ""}`,
      link: role.link ?? "",

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
        <FaEdit
          className="text-themeBlue cursor-pointer"
          onClick={() => update_role(role)}
          size={32}
        />
      ),
    });
  });

  const empty_input_fields = () => {
    setFormData({ id: "", name: "", tax: "" });
  };

  const selectStyle =
    "w-[370px] bg-white px-4 py-3 rounded-md border-none font-normal text-base focus:outline-none cursor-pointer appearance-none";
  return (
    <>
      <Leftbar />
      <Topbar main="Companies Managment" extend={false} />

      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        <button
          onClick={() => add_role_open()}
          className="py-3 w-[200px] bg-themeBlue border border-themeBlue text-white rounded hover:text-themeBlue hover:bg-white hover:border-themeBlue"
        >
          Add New Company
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
      </section>
      <Modal
        size="xl"
        isOpen={DimensionOpen}
        onClose={DimensionOnClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Company Section</ModalHeader>

          <ModalCloseButton />
          {loading ? (
            <Loader2 />
          ) : (
            <>
              <ModalBody>
                <div className="flex flex-col gap-y-2">
                  <div>
                    <div>
                      <label>Company Name</label>
                    </div>
                    <input
                      onChange={OnChange}
                      className="bg-[#F4F7FF] py-3 rounded w-[500px] p-4 focus:outline-themeBlue"
                      placeholder="Name"
                      value={formData.name}
                      name="name"
                    />
                  </div>
                  {/* <div>
                                        <div>
                                            <label>Tax</label>
                                        </div>
                                        <input
                                        type="number"
                                            onChange={OnChange}
                                            className="bg-[#F4F7FF] py-3 rounded w-[500px] p-4 focus:outline-themeBlue"
                                            placeholder="Tax"
                                            value={formData.tax}
                                            name="tax"
                                        />
                                    </div> */}
                  <div>
                    <div>
                      <label>From (Day)</label>
                    </div>
                    <input
                      type="text"
                      onChange={OnChange}
                      className="bg-[#F4F7FF] py-3 rounded w-[500px] p-4 focus:outline-themeBlue"
                      placeholder="1-30"
                      value={formData.startDay}
                      name="startDay"
                    />
                  </div>
                  <div>
                    <div>
                      <label>To (Day)</label>
                    </div>
                    <input
                      type="text"
                      onChange={OnChange}
                      className="bg-[#F4F7FF] py-3 rounded w-[500px] p-4 focus:outline-themeBlue"
                      placeholder="1-30"
                      value={formData.endDay}
                      name="endDay"
                    />
                  </div>
                  <div>
                    <div>
                      <label>Company Link</label>
                    </div>
                    <input
                      type="text"
                      onChange={OnChange}
                      className="bg-[#F4F7FF] py-3 rounded w-[500px] p-4 focus:outline-themeBlue"
                      placeholder="www.company.com"
                      value={formData.link}
                      name="link"
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
