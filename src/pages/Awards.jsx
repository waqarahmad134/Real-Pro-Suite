import React, { useState } from 'react';
import useFetch from '../ApiClient/GetApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { PostApi } from '../ApiClient/PostApi';
import { success_toaster } from '../components/toaster/Toaster';
import DefaultLayout from '../layout/DefaultLayout';
import { Loader2 } from '../components/loader/Loader';
import { MdEdit } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
export default function Awards() {

  const { data, reFetch } = useFetch('admin_profile');
  const [loading, SetLoading] = useState(false);

  return (
    <DefaultLayout>
      <section className="">
        {loading ? (
          <Loader2 />
        ) : (
          <>
            <div className="bg-white p-10 space-y-6">
              <div className="mt-6">
                <div className="flex justify-between">
                  <p className="text-lg text-gray-500 font-semibold">Awards</p>
                  <button className="flex items-center gap-x-2">
                  <MdEdit />
                  Edit
                </button>
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
                  <div className="flex items-center gap-x-2 my-4 text-themeGray2">
                    <FaPlus />
                    <button>Add</button>
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
