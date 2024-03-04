import React, { useState } from 'react';
import useFetch from '../ApiClient/GetApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { PostApi } from '../ApiClient/PostApi';
import { success_toaster } from '../components/toaster/Toaster';
import DefaultLayout from '../layout/DefaultLayout';
import { Loader2 } from '../components/loader/Loader';
import { MdEdit } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

export default function ProfessionalDetails() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { data, reFetch } = useFetch('admin_profile');
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
              <p className="text-lg text-gray-500 font-semibold">Licenses</p>

              <hr className="my-3" />
              <div className="mt-4">
                <p>No License info to display</p>
                <div className="flex items-center gap-x-2 my-4 text-themeGray2">
                  <FaPlus />
                  <button>Add</button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="text-lg text-gray-500 font-semibold">
                  Specialties
                </p>
                <div className="flex items-center gap-x-2 my-4 text-themeGray2">
                  <FaPlus />
                  <button>Add</button>
                </div>
              </div>
              <hr className="my-3" />
              <div className="mt-4">
                <p>No Specialties Found</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="text-lg text-gray-500 font-semibold">
                  Designations
                </p>
                <button className="flex items-center gap-x-2">
                  <MdEdit />
                  Edit
                </button>
              </div>
              <hr className="my-3" />
              <div className="mt-4">
                <p>No designations to display</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="text-lg text-gray-500 font-semibold">
                  Office Service Area
                </p>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between items-center mt-4">
                <p>Gastonia</p>
                <p>Non-Editable</p>
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
        )}
      </section>
    </DefaultLayout>
  );
}
