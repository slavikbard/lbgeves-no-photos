import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'בית', path: '/' },
    { label: 'אודותינו', path: '/about' },
    { label: 'השירותים שלנו', path: '/services' },
    { label: 'פרויקטים נבחרים', path: '/projects' },
    { label: 'מאמרים', path: '/blog' },
    { label: 'צור קשר', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 h-20">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="LBGEVES" className="h-12 md:h-14" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-700 hover:bg-light-blue-300 hover:text-white rounded-lg transition-all duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden p-2 text-gray-700 hover:text-light-blue-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="תפריט ניווט"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="fixed top-0 right-0 h-full w-64 bg-light-blue-300 shadow-xl z-50 pt-24 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-white hover:bg-white hover:text-light-blue-800 rounded-lg transition-all duration-300 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
