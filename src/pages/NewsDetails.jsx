import React, { useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import { useLocation } from 'react-router-dom';
import useFetch from '../ApiClient/GetApi';
import { BASE_URL } from '../Utils/urls';

function NewsDetails() {
  const location = useLocation();
  const { data, reFetch } = useFetch(
    `dashboard/v1/videoDetails?videoId=${location?.state?.videoId}`,
  );
  console.log(`${BASE_URL}${data?.data?.Resource?.videoUrl}`);
  const [showThumbnail, setShowThumbnail] = useState(true);

  const handleMouseEnter = () => {
    setShowThumbnail(false);
  };

  const handleMouseLeave = () => {
    setShowThumbnail(true);
  };

  return (
    <DefaultLayout>
      <div className="max-full mx-auto px-4 py-8">
        {/* Main Video */}
        <div className="col-span-4 md:col-span-3 video-container mb-4">
          <video
            controls
            src={`${BASE_URL}${data?.data?.Resource?.videoUrl}`}
            type="video/mp4"
            width="100%"
            controlsList="nodownload"
          ></video>
        </div>
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">
          {data?.data?.Resource?.title}
        </h1>
        {/* Description */}
        <p className="text-gray-700 mb-4">
          {data?.data?.Resource?.description}
        </p>
        {/* Supplementary Materials */}
        <h2 className="text-2xl font-bold mb-2">Supplementary Material</h2>

        <div className="border border-gray-300 rounded-md p-4 mb-4">
          <a
            href={`${BASE_URL}${data?.data?.Resource?.supplementaryMaterials}`}
            download
            className="text-blue-500 hover:underline block"
          >
            Download Supplementary Material
          </a>
        </div>

        {/* Related Videos */}
        <div className="md:col-span-1 relative">
  <h2 className="text-2xl font-bold mb-4">Related Videos</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pb-10">
    {data?.data?.relatedVideos?.map((relatedVideo) => (
      <div
        key={relatedVideo.id}
        className="grid items-center grid-cols-1 mb-10 relative pb-20"
      >
        <div
          className="absolute inset-0 h-48"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {showThumbnail ? (
            <img
              className="w-full h-full object-contain rounded-lg"
              src={`${BASE_URL}${relatedVideo.thumbnailUrl}`}
              alt="Thumbnail"
            />
          ) : (
            <video
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              src={`${BASE_URL}${relatedVideo.videoUrl}`}
              muted
            ></video>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Optional: Comments or Feedback Section */}
        {/* Implement comments/feedback section here */}
      </div>
    </DefaultLayout>
  );
}

export default NewsDetails;
