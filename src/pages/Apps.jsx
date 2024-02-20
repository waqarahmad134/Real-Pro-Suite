import DefaultLayout from '../layout/DefaultLayout';
import useFetch from '../ApiClient/GetApi';
import Card from '../components/homeElements/Card';
import { BASE_URL } from '../Utils/urls';
import { useEffect, useState } from 'react';
import Loader from '../components/loader/Loader';

const Apps = () => {
  const { data } = useFetch("dashboard/v1/allApps");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <h2 className="text-xl font-semibold my-5">All Apps</h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5">
          {data?.data?.length > 0
            ? data?.data?.map((app, index) => (
                <Card
                  key={index}
                  title={app.appName}
                  icon={app?.logo === null ? "https://source.unsplash.com/500x500/?logos" : `${BASE_URL}${app?.logo}`}
                  location={app.appUrl}
                  alt={index}
                />
              ))
            : ""}
        </div>
    </DefaultLayout>
  );
};

export default Apps;
