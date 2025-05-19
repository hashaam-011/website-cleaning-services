import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col flex-1 px-4 py-8">
              <a
                href="/"
                className={`py-3 px-4 text-lg border-b border-gray-100 ${
                  pathname === '/' ? 'text-[#00C853]' : 'text-[#222]'
                }`}
              >
                Home
              </a>
              <a
                href="/services"
                className={`py-3 px-4 text-lg border-b border-gray-100 ${
                  pathname === '/services' ? 'text-[#00C853]' : 'text-[#222]'
                }`}
              >
                Services
              </a>
              <a
                href="/packages"
                className={`py-3 px-4 text-lg border-b border-gray-100 ${
                  pathname === '/packages' ? 'text-[#00C853]' : 'text-[#222]'
                }`}
              >
                Packages
              </a>
              <a
                href="/pricing"
                className={`py-3 px-4 text-lg border-b border-gray-100 ${
                  pathname === '/pricing' ? 'text-[#00C853]' : 'text-[#222]'
                }`}
              >
                Pricing
              </a>
              <a
                href="/gallery"
                className={`py-3 px-4 text-lg border-b border-gray-100 ${
                  pathname === '/gallery' ? 'text-[#00C853]' : 'text-[#222]'
                }`}
              >
                Gallery
              </a>
              <a
                href="/about"
                className={`py-3 px-4 text-lg border-b border-gray-100 ${
                  pathname === '/about' ? 'text-[#00C853]' : 'text-[#222]'
                }`}
              >
                About Us
              </a>
              <a
                href="/contact"
                className={`py-3 px-4 text-lg border-b border-gray-100 ${
                  pathname === '/contact' ? 'text-[#00C853]' : 'text-[#222]'
                }`}
              >
                Contact Us
              </a>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <a
                  href="tel:8006442"
                  className="flex items-center gap-2 text-[#5BF014] font-bold text-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  Call Us Now - Toll Free<br />8006442
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}