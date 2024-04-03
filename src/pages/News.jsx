import React, { useEffect, useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import NewsCard from '../components/homeElements/NewsCard';
import useFetch from '../ApiClient/GetApi';
import { PostApi } from '../ApiClient/PostApi';
import Loader from '../components/loader/Loader';
import SearchBox from '../components/SearchBox/SearchBox';
import { error_toaster, success_toaster } from '../components/toaster/Toaster';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from '@chakra-ui/react';
import { BASE_URL } from '../Utils/urls';
export default function News() {
  const { data, reFetch } = useFetch('dashboard/v1/allVideos');
  const [model, setModel] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchField, setSearchField] = useState('');
  const [filter, setFilter] = useState('title');
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  };

  const onFilterChange = (event) => {
    const filter = event.target.value;
    setFilter(filter);
  };

  const filteredVideos =
    searchField === ''
      ? data?.data
      : filter === 'title'
      ? data?.data?.filter((video) =>
          video.title.toLowerCase().includes(searchField),
        )
      : filter === 'category'
      ? data?.data?.filter((video) =>
          video.category.toLowerCase().includes(searchField),
        )
      : data?.data;

  const handleFavFunc = async (id) => {
    const res = await PostApi('dashboard/v1/pinVideo', {
      videoId: id,
    });
    if (res?.data?.status === '1') {
      success_toaster(res.data.message);
      reFetch();
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
      reFetch();
    } else {
      error_toaster(res.data.message);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Modal
        isCentered
        size={'lg'}
        isOpen={model}
        onClose={() => setModel(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Video</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={() => setModel(false)}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Videos</h2>
        <div className="flex justify-center sm:col-span-2 space-x-2 items-center">
          <select
            value={filter}
            onChange={onFilterChange}
            className="w-1/2 p-2 border border-gray-300 rounded-md"
            name="filter"
            id="filter"
            required
          >
            <option value="title">Title</option>
            <option value="category">Category</option>
          </select>
          <SearchBox
            onChangeHandler={onSearchChange}
            placeholder={`Search by ${filter}`}
            style={{
              width: '50%',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '0.25rem',
            }}
          />
        </div>

        {localStorage.getItem('roleId') === '1' ? (
          <Button className="my-5" onClick={() => setModel(true)}>
            Add New Video
          </Button>
        ) : (
          ''
        )}
      </div>
      <div className="my-15">
        {filteredVideos.map((data, index) => (
          <>
            <NewsCard
              key={index}
              thumbnail={`${BASE_URL}${data?.thumbnailUrl}`}
              video={`${BASE_URL}${data?.videoUrl}`}
              title={data?.title}
              order="order-2"
              desc={data?.description}
              category={data?.category}
              pinned={data?.pinned}
              onclick={() => handleFavFunc(data?.id)}
              removeVideo={() => removeVideo(data?.id)}
            />
          </>
        ))}
      </div>
    </DefaultLayout>
  );
}
