import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import useFetch from '../../ApiClient/GetApi';
import Card from '../../components/homeElements/Card';
import { BASE_URL } from '../../Utils/urls';
import NewsCard from '../../components/homeElements/NewsCard';

import Loader from '../../components/loader/Loader';
import { useNavigate } from 'react-router-dom';
import { success_toaster } from '../../components/toaster/Toaster';
import { PostApi } from '../../ApiClient/PostApi';

const ECommerce = () => {
  const navigate = useNavigate();
  const { data , reFetch } = useFetch('dashboard/v1/suiteTools');
  const video = useFetch('dashboard/v1/pinnedVideos');
  const topApps = useFetch('dashboard/v1/getTopApps');
  if (!localStorage.getItem('loginStatus')) {
    navigate('/auth/signin');
  }

  const handleFavFunc = async (id) => {
    const res = await PostApi('dashboard/v1/removeTopApp', {
      appId: id,
    });
    if (res?.data?.status === '1') {
      success_toaster(res.data.message);
      topApps.reFetch();
    } else {
      error_toaster(res.data.message);
    }
  };

  const removeVideo = async (id) => {
    const res = await PostApi('dashboard/v1/unpinVideo', {
      videoId: id,
    });
    if (res?.data?.status === '1') {
      success_toaster(res.data.message);
      video.reFetch();
    } else {
      error_toaster(res.data.message);
    }
  };
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
          Suite Tools <hr className="border-t-2 my-5" />
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {data?.data?.length > 0
            ? data?.data?.map((app, index) => (
                <Card
                  key={index}
                  title={app?.appName}
                  icon={
                    app?.logo === null
                      ? 'https://source.unsplash.com/500x500/?logos'
                      : `${BASE_URL}${app?.logo}`
                  }
                  location={app?.appUrl}
                  alt={index}
                  suite={true}
                  removeBookmark={false}
                />
              ))
            : ''}
        </div>
        <h2 className="text-xl font-semibold">
          Favourite Apps
          <hr className="border-t-2 my-5" />
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {topApps?.data?.data?.length > 0
            ? topApps?.data?.data?.map((app, index) => (
                <Card
                  key={index}
                  title={app?.appName}
                  icon={
                    app?.logo === null
                      ? 'https://source.unsplash.com/500x500/?logos'
                      : `${BASE_URL}${app?.logo}`
                  }
                  location={app?.appUrl}
                  alt={index}
                  bookmark={true}
                  onclick={() => handleFavFunc(app?.id)}
                />
              ))
            : ''}
        </div>
        <div>
        {video?.data?.data?.map((data, index) => (
           <NewsCard
           key={index}
           thumbnail={`${BASE_URL}${data.thumbnailUrl}`}
           video={`${BASE_URL}${data.videoUrl}`}
           title={data?.title}
           order="order-2"
           desc={data?.description}
           category={data?.category}
           pinned={data?.pinned}
           removeVideo={() => removeVideo(data?.id)}
         />
        ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
