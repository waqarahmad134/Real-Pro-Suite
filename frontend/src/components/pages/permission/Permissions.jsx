// @ts-nocheck
import React, { useState } from "react";
import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";
import { error_toaster, success_toaster } from "../../toaster/Toaster";
import { PostApi } from "../../../ApiClient/PostApi";
import useFetch from "../../../ApiClient/GetApi";
import { Loader2 } from "../../loader/Loader"

import DataTable from "react-data-table-component";
import { BsThreeDots } from "react-icons/bs";
import customStyles from "../../dataTable/CustomStyles";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
} from "@chakra-ui/react";

export default function Permissions() {
    const { data, reFetch } = useFetch("get_all_permissions");

    const [loading, SetLoading] = useState(false);
    const [formData, setFormData] = useState({ id: "", title: "",value:"" });
    const [update, setUpdate] = useState(false);
    const {
        isOpen: DimensionOpen,
        onOpen: DimensionOnOpen,
        onClose: DimensionOnClose,
    } = useDisclosure();



    const block_role = async (id) => {
        SetLoading(true)
        const res = await PostApi("block_permission", {
            permissionId: id
        });
        if (res.data.status === "1") {
            SetLoading(false);
            error_toaster(res.data.message);
            reFetch();
        }
        else {
            error_toaster(res.data.message);
            SetLoading(false);
        }
    }
    const active_role = async (id) => {

        SetLoading(true)
        const res = await PostApi("active_permission", {
            permissionId: id
        });
        if (res.data.status === "1") {
            SetLoading(false);
            success_toaster(res.data.message);
            reFetch();
        }
        else {
            error_toaster(res.data.message);
            SetLoading(false);
        }
    }

    const OnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const update_permssion = (obj) => {
        setUpdate(true);
        setFormData({ title: obj.title, id: obj.id,value:obj.value });
        DimensionOnOpen();
    }

    const update_permssion_post = async () => {
        SetLoading(true)
        const res = await PostApi("update_permission",
            {
                permissionId: formData.id,
                title: formData.title,
                value:formData.value
            });
        if (res.data.status === "1") {
            SetLoading(false);
            success_toaster(res.data.message);
            empty_input_fields()
            DimensionOnClose();
            reFetch();
        }
        else {
            error_toaster(res.data.message);
            SetLoading(false);
        }
    }

    const add_role_open = () => {
        setUpdate(false);
        empty_input_fields()
        DimensionOnOpen();
    }

    const add_permission = async () => {
        SetLoading(true)
        const res = await PostApi("add_permission",
            {
                title: formData.title,
                value:formData.value
            });
        if (res.data.status === "1") {
            SetLoading(false);
            success_toaster(res.data.message);
            DimensionOnClose();
            reFetch();
            empty_input_fields()
        }
        else {
            error_toaster(res.data.message);
            SetLoading(false);
        }
    }
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
            name: "value",
            selector: (row) => row.value,
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
        return datas.push(
            {
                id: index + 1,
                title: role.title,
                value: role.value,

                status: role.status === true ? <button onClick={() => block_role(role.id)} className="bg-themeBlue3 text-themeBlue font-medium text-xs px-8 py-1 rounded-md">
                    Active
                </button> : <button onClick={() => active_role(role.id)} className="bg-themeRed2 text-themeRed font-medium text-xs px-8 py-1 rounded-md">
                    Block
                </button>,
                action: (
                    <Link >
                        <BsThreeDots onClick={() => update_permssion(role)} size={32} />

                    </Link>
                ),
            }
        )
    })

    const empty_input_fields = () => {
        setFormData({ id: "", title: "",value:"" })
    }
    return (
        <>
            <Leftbar />
            <Topbar main="Module Managment" extend={false} />

            <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
                <button onClick={() => add_role_open()} className="py-3 w-[200px] bg-themeBlue border border-themeBlue text-white rounded hover:text-themeBlue hover:bg-white hover:border-themeBlue">Add New Module</button>
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
            <Modal
                size="xl"
                isOpen={DimensionOpen}
                onClose={DimensionOnClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Module Section</ModalHeader>

                    <ModalCloseButton />
                    {
                        loading ? <Loader2 /> : <>
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
                                <div className="flex gap-x-2">
                                    <div>
                                        <div>
                                            <label>Value</label>
                                        </div>
                                        <input
                                            onChange={OnChange}
                                            className="bg-[#F4F7FF] py-3 rounded w-[500px] p-4 focus:outline-themeBlue"
                                            placeholder="Value"
                                            value={formData.value}
                                            name="value"
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
                                    {
                                        update ? <button
                                            className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                                            onClick={update_permssion_post}

                                        >
                                            Update
                                        </button> :
                                            <button
                                                className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                                                onClick={add_permission}
                                            >
                                                Save
                                            </button>
                                    }

                                </div>
                            </ModalFooter>
                        </>
                    }

                </ModalContent>
            </Modal>
        </>
    )
}
