// @ts-nocheck
import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import useFetch from '../ApiClient/GetApi';
import DefaultLayout from '../layout/DefaultLayout';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Profile() {
  const { data, reFetch } = useFetch('admin_profile');

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
      <section className="">
        {loading ? (
          <Loader2 />
        ) : (
          <>
           
              <div className="bg-white p-10 space-y-6">
                <h3 className="text-lg text-gray-500 font-semibold">
                  General Info
                </h3>
                <hr />
                <div className="grid md:grid-cols-2 gap-x-5 gap-y-4">
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-lg">Sandy Mcapline</h4>
                      <p className="text-black text-opacity-50">
                        Remix ID : 10002733
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg">Re/Max Executive</h4>
                      <p className="text-black text-opacity-50">
                        121 roing road suit{' '}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg">Re/Max Executive</h4>
                      <p className="text-black text-opacity-50">
                        121 roing road suit{' '}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <img
                      className="ml-auto"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU"
                      alt=""
                    />
                  </div>
                </div>
                <h3 className="text-lg text-gray-500 font-semibold">
                  Phone Numbers
                </h3>
                <hr />
                <div className="grid md:grid-cols-2 gap-x-5 gap-y-4">
                  <div className="space-y-2">
                    <div>
                      <p className="text-lg text-black text-opacity-50">
                        Mobile (Cell) : (704) 746-5638
                      </p>
                      <p className="text-lg text-black text-opacity-50">
                        Main Office : (704) 664-5638
                      </p>
                      <p className="text-lg text-black text-opacity-50">
                        Direct : (383) 1243-5638
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg text-gray-500 font-semibold">Emails</h3>
                <hr />
                <div className="grid md:grid-cols-2 gap-x-5 gap-y-4">
                  <div className="space-y-2">
                    <div>
                      <p className="text-lg text-black text-opacity-50">
                        mexcy@gmail.com
                      </p>
                      <p className="text-lg text-black text-opacity-50">
                        mexcy.developer@gmail.com
                      </p>
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
