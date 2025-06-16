import React, { useState } from 'react';
import { Menu, X, ChevronDown, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleIndustries = () => {
    setIsIndustriesOpen(!isIndustriesOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-18">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                src="/hi5-logo.jpg"
                alt="HighFive Logo"
                className="h-[82px] w-[300px] md:block"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-primary  px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                to="/capabilities"
                className="text-gray-700 hover:text-primary  px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Capabilities
              </Link>
              {/* Industries Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleIndustries}
                  className="text-gray-700 hover:text-primary  px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                >
                  Industries
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isIndustriesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-1">
                      <Link
                        to="/industries"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary "
                      >
                        Recrutment
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              {/* Jobs */}
              <Link
                to="/jobs"
                className="text-gray-700 hover:text-primary  px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Jobs
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary  px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right side buttons 
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <Bell className="h-5 w-5" />
            </button>
            <button className="soft-btn  font-medium transition-colors duration-200">
              Login / Register
            </button>
            <button className="solid-btn transition-colors duration-200">
              Add Job
            </button>
          </div>
        */}
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary  p-2 rounded-md transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <Link
              to="/"
              href="#"
              className="text-gray-700 hover:text-primary  hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
            >
              Home
            </Link>

            {/* Mobile Industries */}
            <div>
              <button
                onClick={toggleIndustries}
                className="text-gray-700 hover:text-primary  hover:bg-gray-50 w-full text-left px-3 py-2 text-base font-medium rounded-md flex items-center justify-between transition-colors duration-200"
              >
                Industries
                <ChevronDown
                  className={`h-4 w-4 transform transition-transform duration-200 ${
                    isIndustriesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isIndustriesOpen && (
                <div className="pl-6 space-y-1">
                  <Link
                    to="/industries"
                    className="text-gray-600 hover:text-primary  hover:bg-gray-50 block px-3 py-2 text-sm rounded-md transition-colors duration-200"
                  >
                    Recrutment
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/jobs"
              className="text-gray-700 hover:text-primary  hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
            >
              Jobs
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-primary  hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              to="/capabilities"
              className="text-gray-700 hover:text-primary  hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
            >
              Capabilities
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary  hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
            >
              Contact
            </Link>

            {/* Mobile buttons */}
            <div className="pt-4 pb-2 border-t border-gray-200 space-y-2">
              <button className="text-primary-600 hover:text-primary-700 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Login / Register
              </button>
              <button className=" solid-btn w-full  rounded-lg text-base font-medium transition-colors duration-200">
                Add Job
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
};

export default Navbar;