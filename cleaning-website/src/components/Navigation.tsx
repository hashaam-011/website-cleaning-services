import { usePathname } from 'next/navigation';
import Image from 'next/image';
import MobileNav from './MobileNav';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="w-full absolute top-0 left-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-2">
          <Image
            src="/images/home/topsection2.png"
            alt="Logo"
            width={80}
            height={48}
            className="rounded-full"
          />
        </div>
        <nav className="hidden md:flex gap-6 text-base font-medium">
          <a
            href="/"
            className={`text-[#222] hover:underline hover:text-[#00C853] ${pathname === '/' ? 'underline text-[#00C853]' : ''}`}
          >
            Home
          </a>
          <a
            href="/services"
            className={`text-[#222] hover:underline hover:text-[#00C853] ${pathname === '/services' ? 'underline text-[#00C853]' : ''}`}
          >
            Services
          </a>
          <a
            href="/packages"
            className={`text-[#222] hover:underline hover:text-[#00C853] ${pathname === '/packages' ? 'underline text-[#00C853]' : ''}`}
          >
            Packages
          </a>
          <a
            href="/pricing"
            className={`text-[#222] hover:underline hover:text-[#00C853] ${pathname === '/pricing' ? 'underline text-[#00C853]' : ''}`}
          >
            Pricing
          </a>
          <a
            href="/gallery"
            className={`text-[#222] hover:underline hover:text-[#00C853] ${pathname === '/gallery' ? 'underline text-[#00C853]' : ''}`}
          >
            Gallery
          </a>
          <a
            href="/about"
            className={`text-[#222] hover:underline hover:text-[#00C853] ${pathname === '/about' ? 'underline text-[#00C853]' : ''}`}
          >
            About Us
          </a>
          <a
            href="/contact"
            className={`text-[#222] hover:underline hover:text-[#00C853] ${pathname === '/contact' ? 'underline text-[#00C853]' : ''}`}
          >
            Contact Us
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block h-10 border-l border-black mx-14"></div>
          <a
            href="tel:8006442"
            className="hidden md:flex text-[#5BF014] font-bold text-sm items-center gap-1"
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
          <MobileNav />
        </div>
      </div>
    </header>
  );
}