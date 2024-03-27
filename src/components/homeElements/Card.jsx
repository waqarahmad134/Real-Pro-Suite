import React from 'react';
import { Link } from 'react-router-dom';
import { CiBookmark, CiTrash } from 'react-icons/ci';
import { FaBookmark } from 'react-icons/fa';
import { GoBookmarkSlash } from 'react-icons/go';

export default function Card(props) {
  return (
    <div className="text-center">
      <div className="bg-white rounded-lg sm:w-44 sm:h-40 mx-auto p-5">
        <div className="w-full h-full flex justify-center items-center ">
          <Link to={props.location} target="_blank">
            <img
              src={`${props.icon}`}
              alt={props.alt}
              className="h-20 mx-auto object-contain"
            />
          </Link>
        </div>
        <div className="flex gap-x-2">
          {props.bookmark === true ? (
            <button
              onClick={props.onclick}
              className="flex justify-end cursor-pointer"
            >
              <FaBookmark className="text-gray-500" />
            </button>
          ) :props.suite === true?'' : (
            <button
              onClick={props.onclick}
              className="flex justify-end cursor-pointer"
            >
              <CiBookmark />
            </button>
          ) }
          {/* {props.removeBookmark === true ? (
            <button
              onClick={props.onclick}
              className="flex justify-end cursor-pointer"
            >
              <GoBookmarkSlash />
            </button>
          ) : (
            ''
          )} */}

          {(localStorage.getItem('roleId') === '1') &
          (props.acceptRemoveApp === true) ? (
            <button
              onClick={props.removeApp}
              className="flex justify-end cursor-pointer"
            >
              <CiTrash />
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
      <h5 className="font-normal text-lleg my-3">{props.title}</h5>
    </div>
  );
}
