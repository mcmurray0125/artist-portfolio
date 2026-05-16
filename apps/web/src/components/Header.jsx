import { Link } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import "../styles/header.css"

// Header option. Possibly move to a context in the future
const FIXED_HEADER = false;

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const headerRef = useRef(null);

  const setMobileOpen = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileOpen && headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileOpen]);

  return (
    <header ref={headerRef} className={`shadow-md bg-gray-500 ${FIXED_HEADER ? 'fixed lg:mt-header-top top-0' : 'relative'} w-full`}>
      <div className="container header-items-wrapper mx-auto h-header-height flex lg:justify-center items-center">

        {/* Navigation */}
        <nav className={`flex flex-col lg:flex-row items-center lg:justify-between ${isMobileOpen ? 'open' : ''}`}>
          {/* Mobile Menu Header */}
          <div className='mobile-menu-header flex lg:hidden'>
            <Link to="/" className="brand text-base px-6 py-3 text-black uppercase hover:text-gray-600 whitespace-nowrap transition-colors">
              Jake Germann Art
            </Link>
            <button onClick={() => setMobileOpen()} className="mobile-menu-close">
              <i className="fa-solid fa-square-xmark text-gray"></i>
            </button>
          </div>
          {/* Main Links */}
          <div className="menu-links flex flex-col lg:flex-row gap-8">
            <Link to="/" className="brand hidden lg:block text-base px-6 py-3 text-black uppercase hover:text-gray-600 whitespace-nowrap transition-colors">
              Jake Germann Art
            </Link>
            <Link to="/about" className="text-base bg-black uppercase px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link to="/artwork" className="text-base bg-black uppercase px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors">
              Portfolio
            </Link>
            <div className="nav-link-group">
              <Link to="#" className="text-base bg-black uppercase px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors">
                Shop
              </Link>
              <div className="nav-dropdown">
                <Link to="https://www.artstation.com/spacekowboi/prints" target="_blank" className="text-base bg-black uppercase px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors">
                  Prints
                </Link>
              </div>
            </div>
            <Link to="/contact" className="text-base bg-black uppercase px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>
          <div className="socials">
            <a href="https://www.instagram.com/space.kowboi/" target="_blank" rel="noopener noreferrer" className="text-gray-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@spacekowboi" target="_blank" rel="noopener noreferrer" className="text-gray-500">
              <i className="fab fa-tiktok"></i>
            </a>

          </div>
        </nav>


        {/* Mobile Menu Button */}
        <div className="mobile-header flex items-center justify-between w-full p-3 lg:hidden">
          <Link to="/" className="brand text-base px-6 py-3 text-black uppercase hover:text-gray-600 whitespace-nowrap transition-colors">
            Jake Germann Art
          </Link>
          <button onClick={() => setMobileOpen()} className="hamburger text-gray-700 hover:text-gray-900 focus:outline-none">
            <i className="text-gray fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
