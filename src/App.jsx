import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import Apps from './pages/Apps';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import { ToastContainer } from 'react-toastify';
import Video from './pages/Video';
import { ChakraProvider } from '@chakra-ui/react';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import Agents from './pages/Agents';
import Offices from './pages/Offices';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <ToastContainer />
      <PrimeReactProvider>
        <ChakraProvider>
          <Routes>
            <Route
              index
              element={
                <>
                  <PageTitle title="Dashboard | Real Pro Suite" />
                  <ECommerce />
                </>
              }
            />

            <Route
              path="/apps"
              element={
                <>
                  <PageTitle title="Apps | Real Pro Suite" />
                  <Apps />
                </>
              }
            />
            <Route
              path="/add-video"
              element={
                <>
                  <PageTitle title="Add Video | Real Pro Suite" />
                  <Video />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <PageTitle title="Profile | Real Pro Suite" />
                  <Profile />
                </>
              }
            />
            <Route
              path="/agents"
              element={
                <>
                  <PageTitle title="Agents | Real Pro Suite" />
                  <Agents />
                </>
              }
            />
            <Route
              path="/offices"
              element={
                <>
                  <PageTitle title="Offices | Real Pro Suite" />
                  <Offices />
                </>
              }
            />
            <Route
              path="/settings"
              element={
                <>
                  <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <Settings />
                </>
              }
            />
            <Route
              path="/chart"
              element={
                <>
                  <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <Chart />
                </>
              }
            />

            <Route
              path="/auth/signin"
              element={
                <>
                  <PageTitle title="Signin | Real Pro Suite" />
                  <SignIn />
                </>
              }
            />
            <Route
              path="/auth/signup"
              element={
                <>
                  <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <SignUp />
                </>
              }
            />
            <Route
              path="/*"
              element={
                <>
                  No page Found{' '}
                  <Link className="px-3 py-1 bg-themeBlue text-white" to="/">
                    Back to Home{' '}
                  </Link>
                </>
              }
            />
          </Routes>
        </ChakraProvider>
      </PrimeReactProvider>
    </>
  );
}

export default App;
