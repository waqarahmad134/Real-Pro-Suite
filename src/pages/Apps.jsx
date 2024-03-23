import DefaultLayout from '../layout/DefaultLayout';
import useFetch from '../ApiClient/GetApi';
import Card from '../components/homeElements/Card';
import { BASE_URL } from '../Utils/urls';
import { useEffect, useState } from 'react';
import Loader from '../components/loader/Loader';
import { PostApi } from '../ApiClient/PostApi';
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
import { Navigate, useNavigate } from 'react-router-dom';
const Apps = () => {
  const navigate = useNavigate();
  const { data, reFetch } = useFetch('dashboard/v1/allApps');
  const [loading, setLoading] = useState(true);
  const [model, setModel] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleFavFunc = async (id) => {
    const res = await PostApi('dashboard/v1/addTopApp', {
      appId: id,
    });
    if (res?.data?.status === '1') {
      success_toaster(res.data.message);
      reFetch();
    } else {
      error_toaster(res.data.message);
    }
  };

  const removeApp = async (id) => {
    const res = await PostApi('dashboard/v1/removeApp', {
      appId: id,
    });
    if (res?.data?.status === '1') {
      success_toaster(res.data.message);
      reFetch();
    } else {
      error_toaster(res.data.message);
    }
  };

  const [addApp, setAddApp] = useState({
    appName: '',
    appDescription: '',
    appUrl: '',
    logo: [],
  });
  console.log(addApp);

  const onChange = (e) => {
    setAddApp({ ...addApp, [e.target.name]: e.target.value });
  };
  const addAppFunc = async (e) => {
    e.preventDefault();
    if (addApp.appName === '') {
      error_toaster('Please Add App Name');
    } else if (addApp.appDescription === '') {
      error_toaster('Please Add App Description');
    } else if (addApp.appUrl === '') {
      error_toaster('Please enter App URl');
    } else {
      const formData = new FormData();
      formData.append('appName', addApp.appName);
      formData.append('appDescription', addApp.appName);
      formData.append('appUrl', addApp.appUrl);
      formData.append('logo', addApp.logo);
      let res = await PostApi('dashboard/v1/addApp', formData);
      console.log(formData);
      if (res?.data?.status === '1') {
        success_toaster(res?.data?.message);
        setAddApp({
          appName: '',
          appDescription: '',
          appUrl: '',
          logo: [],
        });
        reFetch();
        setModel(false);
      } else {
        success_toaster(res?.data?.message);
      }
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
          <ModalHeader>Add App</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={addAppFunc} className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-4">
                <Input
                  value={addApp.appName}
                  onChange={onChange}
                  type="text"
                  className="w-full"
                  name="appName"
                  placeholder="App Name"
                  required
                />
                <Input
                  value={addApp.appDescription}
                  onChange={onChange}
                  type="text"
                  className="w-full"
                  name="appDescription"
                  placeholder="App Description"
                  required
                />
              </div>
              <div className="space-y-4">
                <Input
                  value={addApp.appUrl}
                  onChange={onChange}
                  type="text"
                  className="w-full"
                  name="appUrl"
                  placeholder="App Url"
                  required
                />
                <Input
                  onChange={(e) =>
                    setAddApp({
                      ...addApp,
                      [e.target.name]: e.target.files[0],
                    })
                  }
                  type="file"
                  className="w-full"
                  name="logo"
                  placeholder="logo"
                  required
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold my-5">All Apps</h2>
        {localStorage.getItem('roleId') === '1' ? (
          <Button className="my-5" onClick={() => setModel(true)}>
            Add New App
          </Button>
        ) : (
          ''
        )}
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5">
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
                id={app?.id}
                bookmark={app.topApp}
                removeBookmark={false}
                acceptRemoveApp={true}
                onclick={() => handleFavFunc(app?.id)}
                removeApp={() => removeApp(app?.id)}
              />
            ))
          : ''}
      </div>
    </DefaultLayout>
  );
};

export default Apps;
