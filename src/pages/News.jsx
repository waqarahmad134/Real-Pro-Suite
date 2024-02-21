import React, { useEffect, useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import NewsCard from '../components/homeElements/NewsCard';
import useFetch from '../ApiClient/GetApi';
import Loader from '../components/loader/Loader';
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
  const video = useFetch('dashboard/v1/allVideos');
  const [model, setModel] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

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
      <div className="my-15">
        <Button className="my-5" onClick={() => setModel(true)}>
          Add New Video
        </Button>
        {video?.data?.data?.map((data, index) => (
          <NewsCard
            img={`${BASE_URL}${data.thumbnailUrl}`}
            video={`${BASE_URL}${data.videoUrl}`}
            title={data?.title}
            order="order-2"
            desc={data?.description}
            category={data?.category}
          />
        ))}
        {/* <div className="grid grid-cols-2 gap-3 my-5">
          <NewsCard
            img="https://i.ytimg.com/vi/seNKZeot5A8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgVChJMA8=&rs=AOn4CLBi1q3K0RJyVC3Dq3sQn2Pdn8ZaJg"
            title="Top 10 reports coming in June"
            order="order-1"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
          in debitis soluta labore modi hic ullam aspernatur vero voluptate
          error."
          />
          <NewsCard
            img="https://i.ytimg.com/vi/seNKZeot5A8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgVChJMA8=&rs=AOn4CLBi1q3K0RJyVC3Dq3sQn2Pdn8ZaJg"
            title="Jared james' Advice? Breathe and Be Ready"
            order="order-1"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
          in debitis soluta labore modi hic."
          />
        </div> */}
      </div>
    </DefaultLayout>
  );
}
