import React, { useState } from 'react';
import useFetch from '../ApiClient/GetApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { PostApi } from '../ApiClient/PostApi';
import { success_toaster } from '../components/toaster/Toaster';
import DefaultLayout from '../layout/DefaultLayout';
import { Loader2 } from '../components/loader/Loader';

export default function ContactInfo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { data, reFetch } = useFetch('dashboard/v1/getContactInfo');
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
          <>
            <div className="bg-white p-10">
              <h3 className="text-lg text-gray-500 font-semibold">Emails</h3>
              <hr className="my-2" />
              <div className="grid md:grid-cols-2 gap-x-5 gap-y-4">
                <div className="space-y-2">
                  <div>
                    <p className="text-lg text-black text-opacity-50">
                      {data?.data?.email}
                    </p>
                    <p className="text-lg text-black text-opacity-50">
                      {data?.data?.ISPemail}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg text-gray-500 font-semibold mt-5">
                Web and Social Media Sites
              </h3>
              <hr className="my-2" />
              <div className="grid md:grid-cols-2 gap-x-5 gap-y-4">
                <div className="space-y-2">
                  <div>
                  {data?.data?.links?.map((link, index) => (
                      <p key={index} className="text-lg text-black text-opacity-50 capitalize">
                        {link?.platform} : {link?.url}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-lg text-gray-500 font-semibold mt-5">
                Phone Numbers
              </h3>
              <hr className="my-2" />
              <div className="grid md:grid-cols-2 gap-x-5 gap-y-4">
                <div className="space-y-2">
                  <div>
                    {data?.data?.phoneNumbers?.map((data, index) => (
                      <p key={index} className="text-lg text-black text-opacity-50 capitalize">
                        {data?.type} : {data?.countryCode}-{data?.phoneNum}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div>
                  <button
                    onClick={update_profile}
                    className="bg-themeBlue text-white rounded py-1 px-8 border border-themeBlue hover:text-themeBlue hover:bg-white"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </DefaultLayout>
  );
}
