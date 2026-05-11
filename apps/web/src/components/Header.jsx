import { Link } from 'react-router';

const Header = () => {
  return (
    <header className="shadow-md bg-gray-500 mt-header-top fixed w-full top-0">
      <div className="container mx-auto h-header-height flex justify-center items-center">

        {/* Navigation */}
        <nav className="hidden lg:flex items-center">
          {/* Logo/Brand */}
          <div className="flex gap-8">
            <Link to="/" className="text-base px-6 py-3 brand text-black uppercase hover:text-gray-600 whitespace-nowrap transition-colors">
              Jake Germann Art
            </Link>
            <Link to="/" className="text-base bg-black uppercase px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-base bg-black uppercase px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link to="/artwork" className="text-base bg-black uppercase px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors">
              Portfolio
            </Link>
            <Link to="/contact" className="text-base bg-black uppercase px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>
          <div className="socials">
            <a href="https://www.instagram.com/space.kowboi/" target="_blank" rel="noopener noreferrer" className="bg-gray text-gray-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@spacekowboi" target="_blank" rel="noopener noreferrer" className="bg-gray text-gray-500">
              <i className="fab fa-tiktok"></i>
            </a>

          </div>
        </nav>


        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation (hidden by default, can be toggled with state) */}
      <div className="md:hidden hidden bg-gray-50 px-4 py-2">
        <nav className="flex flex-col space-y-2">
          <Link to="/" className="text-gray-700 hover:text-gray-900 py-2 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 py-2 transition-colors">
            About
          </Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-gray-900 py-2 transition-colors">
            Portfolio
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 py-2 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
