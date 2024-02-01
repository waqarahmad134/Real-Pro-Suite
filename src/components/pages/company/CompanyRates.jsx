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
import { MdDeleteOutline } from "react-icons/md";
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


export default function CompanyRates() {
  const { data, reFetch } = useFetch("get_company_rates");
  const companies = useFetch("get_active_companies");
  const countries = useFetch("get_active_countries");

  const [loading, SetLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    companyId: "",
    originId: "",
    destinationId: "",
    tax: "",
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


  const OnChange = (e) => {
    if(e.target.name === "tax")
    {
      if (!Number(e.target.value)) {
        return;
      }
      if (e.target.value.length > 10) {
        return;
      }
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const update_role = (obj) => {
    setUpdate(true);
    setFormData({
      originId: obj?.originCountry?.id,
      id: obj.id,
      tax: obj.tax,
      destinationId: obj.destinationCountry?.id,
      companyId: obj.Company?.id,
    });
    DimensionOnOpen();
  };

  const update_company_rates = async () => {
    SetLoading(true);
    const res = await PostApi("update_company_rates", {
      id: formData.id,
      tax: formData.tax,
      companyId: formData.companyId,
      originId: formData.originId,
      destinationId: formData.destinationId,
    });
    if (res.data.status === "1") {
      success_toaster(res.data.message);
      SetLoading(false);
      reFetch();
      DimensionOnClose();
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

  const add_company_rates = async () => {
    if (formData.companyId === "") {
      error_toaster("Please select Company!");
      return false;
    }
    if (formData.originId === "") {
      error_toaster("Please select origin Country!");
      return false;
    }
    if (formData.destinationId === "") {
      error_toaster("Please select Destination Country");
      return false;
    }
    if (formData.tax === "") {
      error_toaster("Please enter tax!");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("add_company_rates", {
      tax: formData.tax,
      companyId: formData.companyId,
      originId: formData.originId,
      destinationId: formData.destinationId,
    });
    if (res.data.status === "1") {
      success_toaster(res.data.message);
      SetLoading(false);
      reFetch();
      DimensionOnClose();
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };

  const delete_company_rate = async (id) => {
    SetLoading(true);
    const response = await PostApi("delete_company_rate", { id: id });
    if (response.data.status === "1") {
      success_toaster(response.data.message);
      reFetch();
      SetLoading(false);
    } else {
      error_toaster(response.data.message);
      SetLoading(false);
    }
  };
  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
    },
    {
      name: "Company",
      selector: (row) => row.company,
    },
    {
      name: "Rates Per Kg($)",
      selector: (row) => row.tax,
    },
    {
      name: "Origin",
      selector: (row) => row.from,
    },
    {
      name: "Destination",
      selector: (row) => row.to,
    },
    // {
    //   name: "Status",
    //   selector: (row) => row.status,
    // },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];
  const datas = [];
  data?.data?.map((role, index) => {
    return datas.push({
      id: index + 1,
      company: role?.Company?.name,
      tax: role?.tax ?? "0.0",
      from: role?.originCountry?.name ?? "Null",
      to: role?.destinationCountry?.name ?? "Null",

      //   status:
      //     role.status === true ? (
      //       <button
      //         onClick={() => block_role(role.id)}
      //         className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md"
      //       >
      //         Active
      //       </button>
      //     ) : (
      //       <button
      //         onClick={() => active_role(role.id)}
      //         className="bg-themeRed2 text-themeRed font-medium text-xs px-8 py-1 rounded-md"
      //       >
      //         Block
      //       </button>
      //     ),
      action: (
        <div className="flex gap-x-1">
          <FaEdit
            className="text-themeBlue cursor-pointer"
            onClick={() => update_role(role)}
            size={32}
          />
          <MdDeleteOutline
            className="text-themeRed cursor-pointer"
            onClick={() => delete_company_rate(role.id)}
            size={32}
          />
        </div>
      ),
    });
  });

  const empty_input_fields = () => {
    setFormData({
      id: "",
      tax: "",
      companyId: "",
      destinationId: "",
      originId: "",
    });
  };

  const selectStyle =
    "w-full bg-themeGray px-4 py-3 rounded-md border-none font-normal text-base focus:outline-none cursor-pointer appearance-none";
  return (
    <>
      <Leftbar />
      <Topbar main="Companies Managment" extend={false} />

      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        <button
          onClick={() => add_role_open()}
          className="py-3 w-[300px] bg-themeBlue border border-themeBlue text-white rounded hover:text-themeBlue hover:bg-white hover:border-themeBlue"
        >
          Add New Company Rates
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
                    <select
                      value={formData.companyId}
                      name="companyId"
                      onChange={OnChange}
                      className={selectStyle}
                    >
                      <option>Select Company</option>
                      {companies?.data?.data?.map((company) => (
                        <option value={company.id}>{company.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <div>
                      <label>Origin Country</label>
                    </div>
                    <select
                      value={formData.originId}
                      name="originId"
                      onChange={OnChange}
                      className={selectStyle}
                    >
                      <option>Select Origin Country</option>
                      {countries?.data?.data?.map((company) => (
                        <option value={company.id}>{company.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <div>
                      <label>Destination Country</label>
                    </div>
                    <select
                      value={formData.destinationId}
                      name="destinationId"
                      onChange={OnChange}
                      className={selectStyle}
                    >
                      <option>Select Destination Country</option>
                      {countries?.data?.data?.map((company) => (
                        <option value={company.id}>{company.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <div>
                      <label>Charges($)</label>
                    </div>
                    <input
                      type="number"
                      maxLength={6}
                      onChange={OnChange}
                      className="bg-[#F4F7FF] py-3 rounded w-[500px] p-4 focus:outline-themeBlue"
                      placeholder="0"
                      value={formData.tax}
                      name="tax"
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
                      onClick={update_company_rates}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                      onClick={add_company_rates}
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
