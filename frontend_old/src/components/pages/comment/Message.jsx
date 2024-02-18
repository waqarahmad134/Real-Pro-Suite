// @ts-nocheck
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { HiUsers } from "react-icons/hi";
import useFetch from "../../../ApiClient/GetApi";
import "react-loading-skeleton/dist/skeleton.css";
import customStyles from "../../dataTable/CustomStyles";
import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";
import { FaEdit } from "react-icons/fa";
import { BsFillReplyAllFill } from "react-icons/bs";
import Moment from "react-moment";
import { Loader2 } from "../../loader/Loader";
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
export default function Message() {
  const { data } = useFetch("all_contact_messages");
  const [detail,setDetal] = useState({name:"",email:"",date:"",message:""});

  const {
    isOpen: HsCodeOpen,
    onOpen: HsCodeOnOpen,
    onClose: HsCodeOnClose,
  } = useDisclosure();
  const modal_open = (detail) => {
    setDetal({name:`${detail.firstName+' '+detail.lastName}`,email:detail.email,date:detail.createdAt,message:detail.message})
    HsCodeOnOpen();
  };
  const columns = [
    {
        name: "S.No",
        selector: (row) => row.id,
        wrap:true,
        width:"100px"
    },
    {
      name: "Message",
      selector: (row) => row.comment,
    },
    {
      name: "By",
      selector: (row) => row.by,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Date&Time",
      selector: (row) => row.date,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];
  const [query, setQuery] = useState("");
  const datas = [];
  data?.data?.map((comment, index) => {
    datas.push({
      id: index + 1,
      comment: <div className="w-96">{comment.message}</div>,
      by: comment.firstName + " " + comment.lastName,
      email: comment.email,
      date: <Moment format="D MMM YYYY hh:mm A">{comment.createdAt}</Moment>,
      action: <div className="flex gap-x-2">
      <FaEdit size={32} onClick={()=>modal_open(comment)} className="text-themeBlue cursor-pointer" />
     <a href={`mailto:${comment.email}`}><BsFillReplyAllFill size={32} className="text-themeBlue cursor-pointer" /></a>
      </div>,
    });
  });
  return (
    <>
      <Leftbar />
      <Topbar main="Messages" extend={false} />
      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center gap-x-3">
            <HiUsers size={40} className="text-themeBlue" />
            <span className="font-bold text-2xl">All Messages</span>
          </h1>
        </div>
        {data.length === 0 ? (
          <Loader2 />
        ) : (
          <>
            {
              <DataTable
                theme="myTheme"
                customStyles={customStyles}
                columns={columns}
                data={datas}
                pagination
              />
            }
          </>
        )}
      </section>

      <Modal size="3xl" isOpen={HsCodeOpen} onClose={HsCodeOnClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><p className="bg-themeBlue text-white px-2 py-1 rounded my-4">Message Details</p></ModalHeader>      
          <ModalBody>
            <div>
                <div>
                    <p>Send By : {detail.name}</p>
                    <p>Email : {detail.email}</p>
                    <p>Date : <Moment format="D MMM YYYY hh:mm A">{detail.date}</Moment></p>
                    <p className="font-semibold">Message</p>
                    <div className="my-3">
                    <textarea className="w-full h-32 rounded p-2" readOnly>{detail.message}</textarea>
                    </div>
                   
                </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="space-x-2">
              <button
                className="py-1 w-[100px] border border-themeBlue text-themeBlue rounded hover:bg-themeBlue hover:text-white"
                onClick={HsCodeOnClose}
              >
                Close
              </button>
              <a href={`mailto:${detail.email}`}>
              <button
                className="py-1 w-[100px] border border-themeBlue text-white rounded bg-themeBlue hover:bg-white hover:text-themeBlue"
                onClick={HsCodeOnClose}
              >
                Reply
              </button>
              </a>
              
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
