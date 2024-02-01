// @ts-nocheck
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { PostApi } from "../../ApiClient/PostApi";
import { error_toaster, success_toaster } from "../toaster/Toaster";
import { Loader2 } from "../loader/Loader";
import useFetch from "../../ApiClient/GetApi";

const Privacy = ({ placeholder }) => {
  const { data, reFetch } = useFetch("/get_privacy_policy");

  const [privacy, setPrivacy] = useState("");
  const [terms, setTerms] = useState("");
  const [theme, setTheme] = useState("snow");
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    setPrivacy(data?.data?.privacy?.value || "");
    setTerms(data?.data?.terms?.value || "");
  }, [data]);

  const privacy_policy = async (id) => {
    SetLoading(true);
    const res = await PostApi("privacy_policy", {
      value: privacy,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      setPrivacy("");
      reFetch();
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };

  const terms_condition = async (id) => {
    SetLoading(true);
    const res = await PostApi("terms_condition", {
      value: terms,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      setTerms("");
      reFetch();
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader2 />
      ) : (
        <div>
          <div className="space-y-24">
            <div style={{ height: "500px" }}>
              <h1 className="text-2xl font-semibold">Privacy & Policy</h1>

              <div>
                <ReactQuill
                  theme={theme}
                  onChange={setPrivacy}
                  value={privacy}
                  modules={Privacy.modules}
                  formats={Privacy.formats}
                  bounds=".app"
                  placeholder={placeholder}
                />
              </div>
            </div>
            <div className="flex justify-center ">
              <button
                onClick={privacy_policy}
                className="py-2 px-12 bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="space-y-24">
            <div style={{ height: "500px" }}>
              <h1 className="text-2xl font-semibold">Terms & Conditions</h1>
              <ReactQuill
                theme={theme}
                onChange={setTerms}
                value={terms}
                modules={Privacy.modules}
                formats={Privacy.formats}
                bounds=".app"
                placeholder={placeholder}
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={terms_condition}
                className="py-2 px-12 bg-themeBlue text-white rounded border border-themeBlue hover:text-themeBlue hover:bg-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Privacy.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false, // toggle to add extra line breaks when pasting HTML
  },
};

Privacy.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

Privacy.propTypes = {
  placeholder: PropTypes.string,
};

export default Privacy;
