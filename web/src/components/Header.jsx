import { Link } from 'react-router';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/" className="hover:text-gray-600 transition-colors">
            Artist Portfolio
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-gray-900 transition-colors">
            Portfolio
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
