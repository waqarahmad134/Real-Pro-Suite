import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserOne from '../../images/user/user-01.png';

const DropdownUser = () => {
  const navigate = useNavigate();
  const logoutAdmin = async () => {
    localStorage.removeItem('loginstatus');
    localStorage.removeItem('accessToken');
    navigate('/auth/signin');
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Thomas Anree
          </span>
          <span className="block text-xs">UX Designer</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <img src={UserOne} alt="User" />
        </span>

        <svg
          className="hidden fill-current sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white shadow-xl rounded-lg w-64">
          <div className="p-5">
            <div className="text-center">
              <img className="w-20 mx-auto" src={UserOne} alt="profile pic" />
              <h3 className="font-semibold">Thomas Anree</h3>
              <h3 className="text-black text-opacity-50 text-sm">
                ThomasAnree@gmail.com
              </h3>
              <Link
                target="_blank"
                className="text-blue-600 text-lg"
                to={'/profile'}
              >
                Update Profile
              </Link>
              <hr className="my-3" />
              <div>
                <ul className="text-start text-black text-opacity-50">
                  <li>Referrals</li>
                  <li>View my profile</li>
                  <li>Settings</li>
                  <li>Reservations</li>
                  <li>Pay Bill</li>
                </ul>
              </div>
              <button onClick={logoutAdmin} className="text-blue-600 text-lg">
                Logout
              </button>
            </div>
          </div>

          <div className="bg-gray-300 text-gray-500 text-[10px] flex justify-center items-center p-3">
            <h5 className="pr-3 border-r-2 border-gray-600">User Agreement</h5>
            <h5 className="pl-3">Privacy Policy</h5>
          </div>
        </div>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
