import React, { useEffect, useState } from 'react';
import Logo from "../images/logo1.png"

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className={`${
        scrolling ? 'bg-white md:bg-white' : 'bg-[#141311]'
      } fixed top-0 left-0 right-0 z-50 transition-all ease-in-out duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/anasayfa" className="text-xl font-bold text-gray-900">
              <img src={Logo} className='w-44' alt="Logo"></img>
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#999999] hover:text-gray-400 transition focus:outline-none"
            >
              {showMenu ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className={`hidden md:flex space-x-4 ${showMenu ? 'hidden' : 'flex'}`}>
            <a
              href="/"
              className="text-[#807f7f] hover:text-gray-400 transition"
            >
              ANASAYFA
            </a>
            <a
              href="/hakkimizda"
              className="text-[#807f7f] hover:text-gray-400 transition"
            >
              HAKKIMIZDA
            </a>
            <a
              href="/hizmetlerimiz"
              className="text-[#807f7f] hover:text-gray-400 transition"
            >
              HİZMETLERİMİZ
            </a>
            <a
              href="/iletisim"
              className="text-[#807f7f] hover:text-gray-400 transition"
            >
              İLETİŞİM
            </a>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-4">
          <li className="nav-link">
            <a
              href="/"
              className="text-[#807f7f] hover:text-gray-400 transition"
            >
              ANASAYFA
            </a>
          </li>
          <li className="nav-link">
            <a
              href="/hakkimizda"
              className="text-[#807f7f] hover:text-gray-400 transition"
            >
              HAKKIMIZDA
            </a>
          </li>
          <li className="nav-link">
            <a
              href="#"
              className="text-[#807f7f] hover:text-gray-400 transition"
            >
              HİZMETLERİMİZ
            </a>
          </li>
          <li className="nav-link">
            <a
              href="#"
              className="text-[#807f7f] hover:text-gray-400 transition"
            >
              İLETİŞİM
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
