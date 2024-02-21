import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import useFetch from '../../ApiClient/GetApi';
import Card from '../../components/homeElements/Card';
import { BASE_URL } from '../../Utils/urls';

import Loader from '../../components/loader/Loader';

const ECommerce = () => {
  const { data } = useFetch('dashboard/v1/suiteTools');
  const topApps = useFetch('dashboard/v1/getTopApps');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <div>
        <h2 className="text-xl font-semibold">
          Suite Tools <hr className="border-t-2 my-5" />{' '}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {data?.data?.length > 0
            ? data?.data?.map((app, index) => (
                <Card
                  key={index}
                  title={app.appName}
                  icon={
                    app?.logo === null
                      ? 'https://source.unsplash.com/500x500/?logos'
                      : `${BASE_URL}${app?.logo}`
                  }
                  location={app.appUrl}
                  alt={index}
                />
              ))
            : ''}
        </div>
        <h2 className="text-xl font-semibold">
          Top Apps
          <hr className="border-t-2 my-5" />
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {topApps?.data?.data?.length > 0
            ? topApps?.data?.data?.map((app, index) => (
                <Card
                  key={index}
                  title={app.appName}
                  icon={
                    app?.logo === null
                      ? 'https://source.unsplash.com/500x500/?logos'
                      : `${BASE_URL}${app?.logo}`
                  }
                  location={app.appUrl}
                  alt={index}
                />
              ))
            : ''}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
