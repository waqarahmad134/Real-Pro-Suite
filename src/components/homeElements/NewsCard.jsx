import React, { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import { CiBookmark, CiTrash } from 'react-icons/ci';

export default function NewsCard(props) {
  const [showThumbnail, setShowThumbnail] = useState(true);

  const handleMouseEnter = () => {
    setShowThumbnail(false);
  };

  const handleMouseLeave = () => {
    setShowThumbnail(true);
  };

  return (
    <div className="bg-white rounded-lg p-5 m-5">
      <div className="grid grid-cols-2">
        <div className={`{props.order}`}>
        <div className="rounded-lg relative" style={{ maxWidth: '100%', paddingBottom: '56.25%', height: 0 }}>
  <div className="absolute inset-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    {showThumbnail ? (
      <img
        className="w-full h-full object-contain rounded-lg"
        src={props?.thumbnail}
        alt="Thumbnail"
      />
    ) : (
      <video
        className="w-full h-full object-cover rounded-lg"
        autoPlay
        src={props.video}
        muted
      ></video>
    )}
  </div>
</div>
        </div>
        <div className="p-3 md:p-5">
  <h2 className="text-lg md:text-2xl font-semibold capitalize">{props.title}</h2>
  <h5 className="text-gray-500 text-xs md:text-sm capitalize">{props.desc}</h5>
</div>
      </div>
      <div className="p-5 flex justify-end">
        <button>
          <h5 className="text-gray-400 text-sm">MORE TO KNOW</h5>
        </button>
      </div>
      <div className="bg-gray-300 rounded-md">
        <div className="flex justify-between items-center px-5 py-1">
          <h4 className="text-gray-500 flex gap-x-2 items-center capitalize">
            <FaBookOpen /> {props.category}
          </h4>
          {(localStorage.getItem('roleId') === '1') &
          (props.pinned === true) ? (
            <button
              onClick={props.removeVideo}
              className="flex justify-end cursor-pointer"
            >
              <FaBookmark className="text-gray-500" />
            </button>
          ) : localStorage.getItem('roleId') !== '1' ? (
            ''
          ) : (
            <button
              onClick={props.onclick}
              className="flex justify-end cursor-pointer"
            >
              <CiBookmark />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
