import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';
import '../App.css';

const Navbar = () => {
  const authState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <header className=" navbar flex justify-between sticky top-0 p-4 bg-white shadow-sm items-center">
        <h2 className="cursor-pointer uppercase font-medium">
          <Link to="/">HealthCare Portal</Link>
        </h2>
        <ul className="hidden md:flex gap-4 uppercase font-medium">
          <li>
            <Link to="/" className=" py-3 px-3  hover:text-blue-500">
              Home
            </Link>
          </li>
          {!authState.isLoggedIn ? (
            <>
              <li>
                <Link to="/login" className="py-2 px-3 hover:text-blue-500">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="AddTask bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md">
                <Link to="/tasks/add" className="block w-full h-full px-4 py-2">
                  <i className="fa-solid fa-plus"></i> Add Task
                </Link>
              </li>
              <li
                className="py-2 px-3 cursor-pointer hover:bg-gray-200 transition rounded-sm"
                onClick={handleLogoutClick}>
                Logout ({authState.user?.name || 'User'})
              </li>
            </>
          )}
        </ul>
        <span className="md:hidden cursor-pointer" onClick={toggleNavbar}>
          <i className="fa-solid fa-bars"></i>
        </span>

        {/* Sidebar for smaller screens */}
        <div
          className={`absolute md:hidden right-0 top-0 bottom-0 transition-transform ${
            isNavbarOpen ? 'translate-x-0' : 'translate-x-full'
          } bg-gray-100 shadow-md w-screen sm:w-9/12 h-screen`}>
          <div className="flex">
            <span className="m-4 ml-auto cursor-pointer" onClick={toggleNavbar}>
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>
          <ul className="flex flex-col gap-4 uppercase font-medium text-center">
            <li>
              <Link to="/" className="py-2 px-3 hover:text-blue-500" onClick={toggleNavbar}>
                Home
              </Link>
            </li>
            {!authState.isLoggedIn ? (
              <>
                <li>
                  <Link
                    to="/register"
                    className="py-2 px-3 hover:text-blue-500"
                    onClick={toggleNavbar}>
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="py-2 px-3 hover:text-blue-500"
                    onClick={toggleNavbar}>
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="bg-blue-500 text-white hover:bg-blue-600 font-medium transition py-2 px-3">
                  <Link to="/tasks/add" className="block w-full h-full" onClick={toggleNavbar}>
                    <i className="AddTask fa-solid fa-plus"></i> Add Task
                  </Link>
                </li>
                <li
                  className="py-2 px-3 cursor-pointer hover:bg-gray-200 transition rounded-sm"
                  onClick={handleLogoutClick}>
                  Logout ({authState.user?.name || 'User'})
                </li>
              </>
            )}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
