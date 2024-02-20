import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import { Input } from '@chakra-ui/react';

export default function Video() {
  return (
    <DefaultLayout>
      <h2 className="text-xl font-semibold my-5">Add Video</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-4">
          <Input
            type="text"
            className="w-full"
            name="title"
            placeholder="Title"
            size="md"
          />
          <Input
            type="text"
            className="w-full"
            name="category"
            placeholder="Category"
            size="md"
          />
          <Input
            type="file"
            className="w-full"
            name="thumbnail"
            placeholder="Thumbnail"
            size="md"
          />
        </div>
        <div className="space-y-4">
          <Input
            type="text"
            className="w-full"
            name="description"
            placeholder="Description"
            size="md"
          />
          <Input
            type="file"
            className="w-full"
            name="video"
            placeholder="Video"
            size="md"
          />
          <Input
            type="file"
            className="w-full"
            name="supplementary"
            placeholder="Supplementary"
            size="md"
          />
        </div>
      </div>
      <div className='flex justify-end'>
        <button className="btn bg-zinc-400 rounded-md px-3 py-1 my-5">
          Submit
        </button>
      </div>
    </DefaultLayout>
  );
}
