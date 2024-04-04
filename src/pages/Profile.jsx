// @ts-nocheck
import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import useFetch from '../ApiClient/GetApi';
import DefaultLayout from '../layout/DefaultLayout';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
export default function Profile() {
  const { data, reFetch } = useFetch('dashboard/v1/profileOverview');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, SetLoading] = useState(false);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
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

  const [menu, setMenu] = useState(false);
  const [canvas, setCanvas] = useState(false);
  const handleCanvas = () => {
    setCanvas(!canvas);
  };

  return (
    <DefaultLayout>
      <section className="space-y-5">
        {loading ? (
          <Loader2 />
        ) : (
          <>
            <h1 className="text-xl font-semibold">
              Profile Overview <hr className="border-t-2 my-5" />
            </h1>
            <div className="bg-white p-6 flex items-center">
              <div className="flex-1">
                <div className='flex justify-between'>
                <h3 className="text-lg text-black text-opacity-50 text-gray-500 font-semibold">
                  Name & Title
                </h3>
                               <button className="flex items-center gap-x-2">
                  <MdEdit />
                  Edit
                </button>
                </div>
                <hr className="my-2" />
                <div className="grid grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div>
                        <h3 className="text-lg text-gray-500 font-semibold">
                          Nick Name
                        </h3>
                        <h4 className="text-lg">{data?.data?.nickName}</h4>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <h3 className="text-lg text-gray-500 font-semibold">
                          Full Name
                        </h3>
                        <h4 className="text-lg">
                          {data?.data?.firstName} {data?.data?.lastName}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <img
                      className="w-16 h-16 sm:w-30 sm:h-30 md:w-34 md:h-34 lg:w-52 lg:h-52 rounded-full"
                      src={data?.data?.image}
                      alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Info */}
            <div className="bg-white p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg text-black text-opacity-50 text-gray-500 font-semibold">
                Contact Info
              </h3>
              <button className="flex items-center gap-x-2">
                <MdEdit />
                Edit
              </button>
              </div>
              <hr className="my-2" />
              <h3 className="text-lg text-gray-500 font-semibold ">Emails</h3>
              <div className="grid md:grid-cols-2 gap-x-5 gap-y-4">
                <div className="space-y-2">
                  <div>
                    <p className="text-lg text-black ">{data?.data?.email}</p>
                    <p className="text-lg text-black ">
                      {data?.data?.ISPemail}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg text-gray-500 font-semibold mt-5">
                Web and Social Media Sites
              </h3>
              <div className="grid md:grid-cols-2 gap-x-5 gap-y-4">
                <div className="space-y-2">
                  <div>
                    {data?.data?.links?.map((link, index) => (
                      <a
                        key={index}
                        className="text-lg text-black block"
                        href={link.linkValue}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.linkType} : {link.linkValue}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-lg text-gray-500 font-semibold mt-5">
                Phone Numbers
              </h3>
              <div className="grid md:grid-cols-2 gap-x-5 gap-y-4">
                <div className="space-y-2">
                  <div>
                    {data?.data?.phoneNumbers?.map((data, index) => (
                      <p key={index} className="text-lg text-black capitalize">
                        {data?.type} : {data?.countryCode}-{data?.phoneNum}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Personal Details */}
            <div className="bg-white p-6 space-y-8">
              <div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg text-black text-opacity-50 text-gray-500 font-semibold">
                  Personal Details
                </h3>
                <button className="flex items-center gap-x-2">
                  <MdEdit />
                  Edit
                </button>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between">
                  <p className="text-lg text-gray-500 font-semibold">BIO</p>
                </div>
                <div className="mt-4">
                  <p>{data?.data?.bio}</p>
                </div>
              </div>
              {/* Hobbies */}
              <div>
                <div className="flex justify-between mt-5">
                  <p className="text-lg text-gray-500 font-semibold">Hobbies</p>
                </div>
                <div className="mt-5 items-center">
                  {data?.data?.hobbies && data.data.hobbies.length > 0 ? (
                    data?.data?.hobbies.map((hobby, index) => (
                      <div
                        className="mt-4 flex flex-wrap items-center"
                        key={index}
                      >
                        <p className="text-lg mr-12 pr-6 capitalize">
                          {hobby?.hobbyType}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-black text-opacity-50 text-gray-500">
                      No hobbies to display
                    </p>
                  )}
                </div>
              </div>
              {/* Languages */}
              <div>
                <div className="flex justify-between">
                  <p className="text-lg text-gray-500 font-semibold">
                    Languages
                  </p>
                </div>
                <div className="mt-10 items-center">
                  {data?.data?.languages && data.data.languages.length > 0 ? (
                    <div className="mt-4 flex flex-wrap items-center justify-between">
                      <p className="font-semibold text-black text-opacity-50 text-gray-500 mr-12 pr-6">
                        Name
                      </p>
                      <p className="font-semibold text-black text-opacity-50 text-gray-500 mr-12 pr-6">
                        Proficiency
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
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
                    <p className="text-black text-opacity-50 text-gray-500">
                      No languages to display
                    </p>
                  )}
                </div>
              </div>
              {/* Educational Background */}
              <div>
                <div className="flex justify-between">
                  <p className="text-lg text-gray-500 font-semibold">
                    Educational Background
                  </p>
                </div>
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
                          {new Date(
                            education?.completedAt,
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-black text-opacity-50 text-gray-500">
                      No educational background to display
                    </p>
                  )}
                </div>
              </div>
              {/* Civic Activities */}
              <div>
                <div className="flex justify-between">
                  <p className="text-lg text-gray-500 font-semibold">
                    Civic Activities
                  </p>
                </div>
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
                    <p className="text-black text-opacity-50 text-gray-500">
                      No activities to display
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white p-6">
              {/* Professional Details */}
              <div>
                <div className="flex justify-between">
                  <p className="text-lg text-black text-opacity-50 text-gray-500 font-semibold">
                    Professional Details
                  </p>
                  <button className="flex items-center gap-x-2">
                  <MdEdit />
                  Edit
                </button>
                </div>
                <hr className="my-3" />
                <div className="mt-10 items-center">
                  {data?.data?.professionalDetail ? (
                    <div className="mt-4 flex flex-wrap items-center justify-between">
                      <p className="font-semibold text-black text-opacity-50 text-gray-500 mr-12 pr-6">
                        Biography
                      </p>
                      <p className="font-semibold text-black text-opacity-50 text-gray-500 mr-12 pr-6">
                        Experience
                      </p>
                      <p className="font-semibold text-black text-opacity-50 text-gray-500 mr-12 pr-6">
                        Specialization
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
                  {data?.data?.professionalDetail ? (
                    <div className="mt-4 flex flex-wrap items-center justify-between">
                      <p className="text-lg mr-12 pr-6">
                        {data?.data?.professionalDetail?.biography}
                      </p>
                      <p className="text-lg mr-12 pr-6">
                        {data?.data?.professionalDetail?.experience == 1
                          ? '1 year'
                          : `${data?.data?.professionalDetail?.experience} years`}
                      </p>
                      <p className="text-lg mr-12 pr-6">
                        {data?.data?.professionalDetail?.specialization}
                      </p>
                    </div>
                  ) : (
                    <p>No professional details to display</p>
                  )}
                </div>
              </div>
              {/* Awards */}
              <div className="mt-6">
                <div className="flex justify-between">
                  <p className="text-lg text-gray-500 font-semibold">Awards</p>
                </div>
                <div className="mt-4">
                  {data?.data?.Awards && data.data.Awards.length > 0 ? (
                    data?.data?.Awards.map((award, index) => (
                      <p className="text-lg" key={index}>
                        {award.awardName}
                      </p>
                    ))
                  ) : (
                    <p className="text-black text-opacity-50 text-gray-500">
                      No awards to display
                    </p>
                  )}
                </div>
              </div>
              {/* Specialties */}
              <div className="mt-6">
                <div className="flex justify-between">
                  <p className="text-lg text-gray-500 font-semibold">
                    Specialties
                  </p>
                </div>
                <div className="mt-4">
                  {data?.data?.specialties &&
                  data.data.specialties.length > 0 ? (
                    data?.data?.specialties.map((specialty, index) => (
                      <p className="text-lg" key={index}>
                        {specialty.name}
                      </p>
                    ))
                  ) : (
                    <p className="text-black text-opacity-50 text-gray-500">
                      No awards to display
                    </p>
                  )}
                </div>
              </div>
              {/*Designations */}
              <div className="mt-6">
                <div className="flex justify-between">
                  <p className="text-lg text-gray-500 font-semibold">
                    Designations
                  </p>
                </div>
                <div className="mt-4">
                  {data?.data?.designations &&
                  data.data.designations.length > 0 ? (
                    data?.data?.designations.map((designation, index) => (
                      <p className="text-lg" key={index}>
                        {designation.designationName}
                      </p>
                    ))
                  ) : (
                    <p className="text-black text-opacity-50 text-gray-500">
                      No designation to display
                    </p>
                  )}
                </div>
              </div>
              {/* Office Service Area */}
              <div>
                <div className="mt-6">
                  <div className="flex justify-between">
                    <p className="text-lg text-gray-500 font-semibold">
                      Office Service Area
                    </p>
                  </div>
                  <div className="mt-4">
                    {data?.data?.professionalDetail?.officeServiceArea ? (
                      <p className="text-lg">
                        {data?.data?.professionalDetail?.officeServiceArea}
                      </p>
                    ) : (
                      <p className="text-black text-opacity-50 text-gray-500">
                        No awards to display
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </DefaultLayout>
  );
}
