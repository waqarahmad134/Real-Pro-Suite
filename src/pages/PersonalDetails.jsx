import React, { useState } from 'react';
import useFetch from '../ApiClient/GetApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { PostApi } from '../ApiClient/PostApi';
import { success_toaster } from '../components/toaster/Toaster';
import DefaultLayout from '../layout/DefaultLayout';
import { Loader2 } from '../components/loader/Loader';
import { MdEdit } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

export default function PersonalDetails() {
  const get = [];
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { data, reFetch } = useFetch('dashboard/v1/getPersonalDetails');
  const [loading, SetLoading] = useState(false);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const logoutAdmin = async () => {
    SetLoading(true);
    const res = await PostApi('logout', {
      accessToken: localStorage.getItem('accessToken'),
    });
    if (res.data.status === '1') {
      success_toaster(res.data.message);
      SetLoading(false);
      localStorage.removeItem('loginstatus');
      localStorage.removeItem('accessToken');
      navigate('/login');
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };

  const update_profile = async () => {
    // if(formData.firstName === "" || formData.firstName === null)
    // {
    //   error_toaster("First Name is required");
    //   return false;
    // }
    // if(formData.lastName === "" || formData.lastName === null)
    // {
    //   error_toaster("Last Name is required");
    //   return false;
    // }
    // if(formData.phone === "" || formData.phone === null)
    // {
    //   error_toaster("PHone No. is required");
    //   return false;
    // }
    // if(formData.email === "" || formData.email === null)
    // {
    //   error_toaster("Email is required");
    //   return false;
    // }
    // if(formData.password === "" || formData.password === null)
    // {
    //   error_toaster("Password is required");
    //   return false;
    // }
    // if(formData.confirmPassword === "" || formData.confirmPassword === null)
    // {
    //   error_toaster("Confirmed Password is required");
    //   return false;
    // }
    SetLoading(true);
    const res = await PostApi('update_profile', {
      firstName:
        formData.firstName === '' ? data?.data?.firstName : formData.firstName,
      lastName:
        formData.lastName === '' ? data?.data?.lastName : formData.lastName,
      phone: formData.phone === '' ? data?.data?.phone : formData.phone,
      email: formData.email === '' ? data?.data?.email : formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    });

    if (res.data.status === '1') {
      success_toaster('Profile Update Sucessfully');
      SetLoading(false);
      empty_input_fields();
      reFetch();
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const empty_input_fields = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <DefaultLayout>
      <section className="">
        {loading ? (
          <Loader2 />
        ) : (
          <div className="bg-white p-10 space-y-8">
            <div>
              <div className="flex justify-between">
                <p className="text-lg text-gray-500 font-semibold">
                  Personal BIO
                </p>
                <button className="flex items-center gap-x-2">
                  <MdEdit />
                  Edit
                </button>
              </div>
              <hr className="my-3" />
              <div className="mt-4">
                <p>{data?.data?.bio}</p>
              </div>
            </div>
            {/* Educational Background */}
            <div>
              <div className="flex justify-between">
                <p className="text-lg text-gray-500 font-semibold">
                  Educational Background
                </p>
              </div>
              <hr className="my-3" />
              <div className="mt-10 items-center">
                {data?.data?.civicActivities &&
                data.data.civicActivities.length > 0 ? (
                  <div className="mt-4 flex flex-wrap items-center justify-between">
                    <p className="font-semibold text-black text-opacity-50 text-gray-500 mr-12 pr-6">
                      Degree
                    </p>
                    <p className="font-semibold text-black text-opacity-50 text-gray-500 mr-12 pr-6">
                      Institution
                    </p>
                    <p className="font-semibold text-black text-opacity-50 text-gray-500 mr-12 pr-6">
                      Start Date
                    </p>
                    <p className="font-semibold text-black text-opacity-50 text-gray-500 mr-12 pr-6">
                      Completion Date
                    </p>
                  </div>
                ) : (
                  ''
                )}
                {data?.data?.education && data.data.education.length > 0 ? (
                  data.data.education.map((education, index) => (
                    <div
                      className="mt-4 flex flex-wrap items-center justify-between"
                      key={index}
                    >
                      <p className="text-lg mr-12 pr-6 capitalize">
                        {education?.degree}
                      </p>
                      <p className="text-lg mr-12 pr-6 capitalize">
                        {education?.institution}
                      </p>
                      <p className="text-lg mr-12 pr-6 capitalize">
                        {new Date(education?.startedAt).toLocaleDateString()}
                      </p>
                      <p className="text-lg mr-12 pr-6 capitalize">
                        {new Date(education?.completedAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No educational background to display</p>
                )}
                <div className="flex items-center gap-x-2 my-4 text-themeGray2">
                  <FaPlus />
                  <button>Add</button>
                </div>
              </div>
            </div>
            {/* CivicActivities */}
            <div>
              <div className="flex justify-between">
                <p className="text-lg text-gray-500 font-semibold">
                  Civic Activities
                </p>
              </div>
              <hr className="my-3" />
              <div className="mt-10 items-center">
                {data?.data?.civicActivities &&
                data.data.civicActivities.length > 0 ? (
                  <div className="mt-4 flex flex-wrap items-center justify-between">
                    <p className="text-lg text-black text-opacity-50 text-gray-500 mr-12 pr-6">
                      Activity Type
                    </p>
                    <p className="text-lg text-black text-opacity-50 text-gray-500 mr-12 pr-6">
                      Organization
                    </p>
                    <p className="text-lg text-black text-opacity-50 text-gray-500 mr-12 pr-6">
                      Role
                    </p>
                    <p className="text-lg text-black text-opacity-50 text-gray-500 mr-12 pr-6">
                      Start Date
                    </p>
                    <p className="text-lg text-black text-opacity-50 text-gray-500 mr-12 pr-6">
                      End Date
                    </p>
                  </div>
                ) : (
                  ''
                )}
                {data?.data?.civicActivities &&
                data.data.civicActivities.length > 0 ? (
                  data?.data?.civicActivities.map((activity, index) => (
                    <div
                      className="mt-4 flex flex-wrap items-center justify-between"
                      key={index}
                    >
                      <p className="text-lg mr-12 pr-6">
                        {activity?.activityType}
                      </p>
                      <p className="text-lg mr-12 pr-6">
                        {activity?.organization}
                      </p>
                      <p className="text-lg mr-12 pr-6">{activity?.role}</p>
                      <p className="text-lg mr-12 pr-6">
                        {new Date(activity?.startDate).toLocaleDateString()}
                      </p>
                      <p className="text-lg mr-8 pr-8">
                        {new Date(activity?.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No activities to display</p>
                )}
                <div className="flex items-center gap-x-2 my-4 text-themeGray2">
                  <FaPlus />
                  <button>Add</button>
                </div>
              </div>
            </div>
            {/* Hobbies */}
            <div>
              <div className="flex justify-between">
                <p className="text-lg text-gray-500 font-semibold">Hoobies</p>
              </div>
              <hr className="my-3" />
              <div className="mt-4">
                {data?.data?.hobbies && data.data.hobbies.length > 0 ? (
                  data.data.hobbies.map((hobbie, index) => (
                    <p className="capitalize" key={index}>
                      {hobbie?.hobbyType}
                    </p>
                  ))
                ) : (
                  <p>No hobbies activities to display</p>
                )}

                <div className="flex items-center gap-x-2 my-4 text-themeGray2">
                  <FaPlus />
                  <button>Add</button>
                </div>
              </div>
            </div>
            {/* Languages */}
            <div>                
              <div className="flex justify-between">
                <p className="text-lg text-gray-500 font-semibold">Languages</p>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between items-center mt-4">
              {data?.data?.languages && data.data.languages.length > 0 ? (
                    data?.data?.languages.map((language, index) => (
                      <div
                        className="mt-4 flex flex-wrap items-center justify-between"
                        key={index}
                      >
                        <p className="text-lg mr-12 pr-6 capitalize">
                          {language?.languageName}
                        </p>
                        <p className="text-lg mr-12 pr-6 capitalize">
                          {language?.proficiency}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>No languages to display</p>
                  )}
                <button className="flex items-center gap-x-2">
                  <MdEdit />
                  Edit
                </button>
              </div>
              <hr className="my-2" />
              <div className="flex items-center gap-x-2 my-4 text-themeGray2">
                <FaPlus />
                <button>Add</button>
              </div>
            </div>
 
          </div>
        )}
      </section>
    </DefaultLayout>
  );
}
