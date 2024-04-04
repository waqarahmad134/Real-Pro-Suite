import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import ECommerce from './pages/Dashboard/ECommerce';
import Apps from './pages/Apps';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';
import Video from './pages/Video';
import { ChakraProvider } from '@chakra-ui/react';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import Agents from './pages/Agents';
import Offices from './pages/Offices';
import News from './pages/News';
import GeneralInfo from './pages/GeneralInfo';
import ContactInfo from './pages/ContactInfo';
import ProfessionalDetails from './pages/ProfessionalDetails';
import PersonalDetails from './pages/PersonalDetails';
import Awards from './pages/Awards';
import AgentDetails from './pages/AgentDetails';
import NewsDetails from './pages/newsDetails';

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
              path="/news&resources"
              element={
                <>
                  <PageTitle title="Academy | Real Pro Suite" />
                  <News />
                </>
              }
            />

            <Route
              path="/general-info"
              element={
                <>
                  <PageTitle title="General Info | Real Pro Suite" />
                  <GeneralInfo />
                </>
              }
            />

            <Route
              path="/contact-info"
              element={
                <>
                  <PageTitle title="Contact Info | Real Pro Suite" />
                  <ContactInfo />
                </>
              }
            />

            <Route
              path="/professional-details"
              element={
                <>
                  <PageTitle title="Professional Details | Real Pro Suite" />
                  <ProfessionalDetails />
                </>
              }
            />

            <Route
              path="/personal-details"
              element={
                <>
                  <PageTitle title="Personal Details | Real Pro Suite" />
                  <PersonalDetails />
                </>
              }
            />

            <Route
              path="/awards"
              element={
                <>
                  <PageTitle title="Awards | Real Pro Suite" />
                  <Awards />
                </>
              }
            />
            <Route
              path="/agentDetails" // Define the path with a parameter ":id"
              element={
                <>
                  <PageTitle title="AgentDetails | Real Pro Suite" />
                  <AgentDetails />
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
              path="/resource"
              element={
                <>
                  <PageTitle title="Resource | Real Pro Suite" />
                  <NewsDetails />
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
