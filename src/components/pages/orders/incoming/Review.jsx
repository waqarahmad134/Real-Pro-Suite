// @ts-nocheck
import React, { useState } from "react";
import { FaReply, FaUserAlt } from "react-icons/fa";
import Moment from "react-moment";
import { useLocation } from "react-router-dom";
import useFetch from "../../../../ApiClient/GetApi";
import Leftbar from "../../layout/Leftbar";
import Topbar from "../../layout/Topbar";
import { Loader2 } from "../../../loader/Loader";
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

export default function Review() {
  const location = useLocation();

  const { data, reFetch } = useFetch(
    `booking_reviews/${location.state.bookingId}`
  );

  const [replies, setReplies] = useState({});
  const [reply, setReply] = useState("");
  const [newcomment, setNewComment] = useState("");
  const [loading, SetLoading] = useState(false);

  const {
    isOpen: CommentOpen,
    onOpen: CommentOnOpen,
    onClose: CommentOnClose,
  } = useDisclosure();
  const cancel_review = () => {
    setReply("");
  };
  // const add_reply = async (id) => {
  //   if (reply === "") {
  //     error_toaster("Please enter your comment!");
  //     return false;
  //   }
  //   SetLoading(true);
  //   const res = await PostApi("add_new_comment", {
  //     BookingId: data?.data?.booking?.id,
  //     CommentId: id,
  //     comment: reply,
  //   });
  //   if (res.data.status === "1") {
  //     reFetch();
  //     SetLoading(false);
  //     setReply("");
  //     success_toaster(res.data.message);
  //   } else {
  //     SetLoading(false);
  //     error_toaster(res.data.message);
  //   }
  // };

  const add_reply = async (id) => {
    if (!replies[id] || replies[id].trim() === "") {
      error_toaster("Please enter your comment!");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("add_new_comment", {
      BookingId: data?.data?.booking?.id,
      CommentId: id,
      comment: replies[id],
    });
    if (res.data.status === "1") {
      reFetch();
      SetLoading(false);
      setReplies({ ...replies, [id]: "" });
      success_toaster(res.data.message);
    } else {
      SetLoading(false);
      error_toaster(res.data.message);
    }
  };

  const modal_open = () => {
    CommentOnOpen();
  };

  const add_comment = async () => {
    if (newcomment === "") {
      error_toaster("Please enter your comment!");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("add_new_comment", {
      BookingId: location.state.bookingId,
      comment: newcomment,
    });

    if (res.data.status === "1") {
      reFetch();
      SetLoading(false);
      setNewComment("");
      CommentOnClose();
      setReply("");
      success_toaster(res.data.message);
    } else {
      SetLoading(false);
      error_toaster(res.data.message);
    }
  };

  const remove_comment = async (id) => {
    SetLoading(true);
    const res = await PostApi("delete_comment", {
      CommentId: id,
    });
    if (res.data.status === "1") {
      reFetch();
      SetLoading(false);
      success_toaster(res.data.message);
    } else {
      SetLoading(false);
      error_toaster(res.data.message);
    }
  };
  const textareaStyle =
    "w-full border border-black border-opacity-20 rounded-xl px-4 py-3 font-normal text-base bg-transparent w-full placeholder:text-black placeholder:text-opacity-40  focus:bg-white resize-none";
  return (
    <>
      <Leftbar />
      <Topbar main="Reviews" />
      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        <section
          className="w-full bg-white mx-auto  my-2 sm:py-10 py-6 sm:px-8 px-4 
            rounded-lg space-y-8"
        >
          {data.length === 0 ? (
            <Loader2 />
          ) : (
            <div className="grid lg:grid-cols-12 gap-x-10 gap-y-12">
              <div className="lg:col-span-8 space-y-12">
                <div className="flex items-center gap-x-5">
                  <div className="bg-white p-3 w-fit rounded-fullest">
                    <img
                      src="/images/box.webp"
                      alt="box"
                      className="max-w-[28px]"
                    />
                  </div>
                  <div>
                    <h1 className="font-medium text-2xl text-themeBlue">
                      Order#{data?.data?.booking.id ?? ""}
                    </h1>
                    <h6 className="font-medium text-base text-black text-opacity-40">
                      Service : {data?.data?.booking.serviceType ?? ""}
                    </h6>
                  </div>
                </div>
                <div>
                  {data?.data?.comments?.map((comment) => (
                    <div>
                      <div className="flex sm:flex-row flex-col items-start gap-x-5 gap-y-4 w-full">
                        <div className="space-y-8 w-full">
                          <div className="space-y-1">
                            <div className="flex items-center gap-x-4">
                              <div className="bg-white p-3 w-fit rounded-fullest">
                                <FaUserAlt size={32} />
                              </div>
                              <h3 className="font-medium text-base">
                                {comment.User.firstName +
                                  " " +
                                  comment.User.lastName}
                              </h3>
                              {/* <div><button onClick={() => remove_comment(comment.id)} className="py-1 px-6 bg-themePink rounded-lg text-themeRed">Delete</button></div> */}
                            </div>
                            <h6 className="font-small text-sm text-black text-opacity-40">
                              <Moment format="D MMM YYYY , hh:mm A">
                                {comment.createdAt ?? ""}
                              </Moment>
                            </h6>
                            <p className="font-normal text-md">
                              {comment.comment}
                            </p>
                            <span className=" text-black text-opacity-40 text-xs">
                              By : {comment.User.firstName}{" "}
                              {comment.User.lastName}
                            </span>
                          </div>
                          <div className="space-y-6 pl-10">
                            {data?.data?.replies?.map((reply) =>
                              reply.CommentId === comment.id ? (
                                <>
                                  <div>
                                    <div className="space-y-1 ">
                                      <div className="flex justify-between">
                                        <h3 className="font-medium text-base"></h3>
                                        <div>
                                          <button
                                            onClick={() =>
                                              remove_comment(reply.id)
                                            }
                                            className="text-xs px-4 bg-themePink rounded-lg text-themeRed"
                                          >
                                            Delete
                                          </button>
                                        </div>
                                      </div>

                                      <h6 className="font-small text-sm text-black text-opacity-40">
                                        <Moment format="D MMM YYYY , hh:mm A">
                                          {reply.createdAt ?? ""}
                                        </Moment>
                                      </h6>
                                      <p className="font-normal text-md">
                                        {reply.comment}
                                      </p>
                                      <span className=" text-black text-opacity-40 text-xs">
                                        By : {reply.User.firstName}{" "}
                                        {reply.User.lastName}
                                      </span>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                ""
                              )
                            )}

                           
                            <input
                              id="textarea"
                              name="comment"
                              value={replies[comment.id] || ""}
                              placeholder="Enter comments.."
                              className={textareaStyle}
                              onChange={(e) =>
                                setReplies({
                                  ...replies,
                                  [comment.id]: e.target.value,
                                })
                              }
                              rows="5"
                            />
                            <div className="flex justify-end items-center gap-x-3">
                              <button
                                onClick={() =>
                                  setReplies({ ...replies, [comment.id]: "" })
                                }
                                className="font-normal text-xl text-themeBlue bg-transparent border 
    border-themeBlue px-4 py-2 rounded-lg hover:bg-themeBlue hover:text-white"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => add_reply(comment.id)}
                                className="font-normal text-xl text-white bg-themeBlue border 
    border-themeBlue px-4 py-2 rounded-lg hover:bg-transparent hover:text-themeBlue"
                              >
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => modal_open()}
                    className="py-3 px-16 bg-themeBlue border border-themeBlue rounded-lg text-white hover:bg-white hover:text-themeBlue"
                  >
                    Add Comment
                  </button>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="lg:float-right space-y-4">
                  <h3 className="font-medium text-2xl text-themeBlue">
                    More Info
                  </h3>
                  <div className="flex items-center gap-x-12">
                    <ul className="space-y-3">
                      <li>ID</li>
                      <li>Status</li>
                      <li>Created At</li>
                      <li>Created By</li>
                    </ul>
                    <ul className="space-y-3">
                      <li>#{data?.data?.booking?.id ?? ""}</li>
                      <li>{data?.data?.booking?.bookingStatus ?? ""}</li>
                      <li>
                        <Moment format="D MMM YYYY , hh:mm A">
                          {data?.data?.booking?.createdAt ?? ""}
                        </Moment>
                      </li>
                      <li>
                        {data?.data?.booking.User.firstName ?? ""}{" "}
                        {data?.data?.booking.User.lastName ?? ""}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <Modal
          size="xl"
          isOpen={CommentOpen}
          onClose={CommentOnClose}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Comment</ModalHeader>

            <ModalCloseButton />
            {loading ? (
              <Loader2 />
            ) : (
              <>
                <ModalBody>
                  <div className="flex gap-x-2 w-full">
                    <div className="w-full">
                      <textarea
                        name="comment"
                        placeholder="Enter comments.."
                        className={textareaStyle}
                        onChange={(e) => setNewComment(e.target.value)}
                        value={newcomment}
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                </ModalBody>

                <ModalFooter>
                  <div className="space-x-2">
                    <button
                      className="py-1 w-[100px] border border-themeBlue text-themeBlue rounded-lg"
                      onClick={CommentOnClose}
                    >
                      Cancel
                    </button>

                    <button
                      className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                      onClick={add_comment}
                    >
                      Add
                    </button>
                  </div>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </section>
    </>
  );
}
