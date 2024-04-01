import React, { useEffect, useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import { Loader2 } from '../components/loader/Loader';

export default function AgentDetails() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  // Dummy data
  const data = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '(123) 456-7890',
    image: 'https://via.placeholder.com/150',
  };

  return (
    <DefaultLayout>
      <section className="">
        {loading ? (
          <Loader2 />
        ) : (
          <>
            <h1 className="text-xl font-semibold">
              Agent Details <hr className="border-t-2 my-5" />
            </h1>
            <div className="bg-white p-10">
              <h3 className="text-lg text-black text-opacity-50 text-gray-500 font-semibold">
                Name & Title
              </h3>
              <hr className="my-2" />
              <div className="gap-x-5 gap-y-4">
                <div className="space-y-2">
                  <div>
                    <h3 className="text-lg text-gray-500 font-semibold">
                      Name
                    </h3>
                    <h4 className="text-lg">
                      {data?.data?.firstName} {data?.data?.lastName}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  className="ml-auto"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU"
                  alt=""
                />
              </div>
              <h3 className="text-lg text-black text-opacity-50 text-gray-500 font-semibold mt-8">
                Demographics
              </h3>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-gray-500 font-semibold">
                    Birth Date
                  </h3>
                  <p className="">{data?.data?.dateOfBirth}</p>
                </div>
                <div>
                  <h3 className="text-lg text-gray-500 font-semibold">
                    Gender
                  </h3>
                  <h4 className="text-lg capitalize">{data?.data?.gender}</h4>
                </div>
                <div>
                  <h3 className="text-lg text-gray-500 font-semibold">
                    First License
                  </h3>
                  <h4 className="text-lg capitalize">
                    {data?.data?.firstLicensed}
                  </h4>
                </div>
              </div>
            </div>
            <div className="bg-white p-10">
              <h3 className="text-lg text-black text-opacity-50 text-gray-500 font-semibold mt-8">
                Contact Info
              </h3>
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
                      <p
                        key={index}
                        className="text-lg text-black text-opacity-50 capitalize"
                      >
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
                      <p
                        key={index}
                        className="text-lg text-black text-opacity-50 capitalize"
                      >
                        {data?.type} : {data?.countryCode}-{data?.phoneNum}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 space-y-8">
              <div>
                <h3 className="text-lg text-black text-opacity-50 text-gray-500 font-semibold mt-8">
                  Personal Details
                </h3>
                <div className="mt-4">
                  <p>{data?.data?.bio}</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="text-lg text-gray-500 font-semibold">
                    Educational Background
                  </p>
                </div>
                <hr className="my-3" />
                <div className="mt-4">
                  {data?.data?.education && data.data.education.length > 0 ? (
                    data.data.education.map((education, index) => (
                      <p className="capitalize" key={index}>
                        {education?.name}
                      </p>
                    ))
                  ) : (
                    <p>No educational background to display</p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="text-lg text-gray-500 font-semibold">
                    Civic Activities
                  </p>
                </div>
                <hr className="my-3" />
                <div className="mt-4">
                  {data?.data?.civicActivities &&
                  data.data.civicActivities.length > 0 ? (
                    data.data.civicActivities.map((activity, index) => (
                      <p className="capitalize" key={index}>
                        {activity?.name}
                      </p>
                    ))
                  ) : (
                    <p>No civic activities to display</p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="text-lg text-gray-500 font-semibold">Hoobies</p>
                </div>
                <hr className="my-3" />
                <div className="mt-4">
                  {data?.data?.hobbies && data.data.hobbies.length > 0 ? (
                    data.data.hobbies.map((hobbie, index) => (
                      <p className="capitalize" key={index}>
                        {hobbie?.name}
                      </p>
                    ))
                  ) : (
                    <p>No hobbies activities to display</p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="text-lg text-gray-500 font-semibold">
                    Languages
                  </p>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between items-center mt-4">
                  {data?.data?.languages && data.data.languages.length > 0 ? (
                    data.data.languages.map((language, index) => (
                      <p className="capitalize" key={index}>
                        {language?.name}
                      </p>
                    ))
                  ) : (
                    <p>No language to display</p>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-white p-10 space-y-8">
              <div>
                <h3 className="text-lg text-black text-opacity-50 text-gray-500 font-semibold mt-8">
                  Professional Details
                </h3>
                <p className="text-lg text-gray-500 font-semibold">Licenses</p>
                <hr className="my-3" />
                <div className="mt-4">
                  {data?.data?.licenses && data.data.licenses.length > 0 ? (
                    data.data.licenses.map((license, index) => (
                      <p className="capitalize" key={index}>
                        {license?.name}
                      </p>
                    ))
                  ) : (
                    <p>No License info to display</p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <p className="text-lg text-gray-500 font-semibold">
                    Specialties
                  </p>
                </div>
                <hr className="my-3" />
                <div>
                  {data?.data?.specialties &&
                  data.data.specialties.length > 0 ? (
                    data.data.specialties.map((specialty, index) => (
                      <p className="capitalize" key={index}>
                        {specialty?.name}
                      </p>
                    ))
                  ) : (
                    <div className="mt-4">
                      <p>No Specialties Found</p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="text-lg text-gray-500 font-semibold">
                    Designations
                  </p>
                </div>
                <hr className="my-3" />
                <div>
                  {data?.data?.designations &&
                  data.data.designations.length > 0 ? (
                    data.data.designations.map((designation, index) => (
                      <p className="capitalize" key={index}>
                        {designation?.name}
                      </p>
                    ))
                  ) : (
                    <div className="mt-4">
                      <p>No Designations Found</p>
                    </div>
                  )}
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
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </DefaultLayout>
  );
}
