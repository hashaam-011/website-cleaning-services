"use client";

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import mouse from '@/public/images/services/mouse.png';
import Footer from '@/components/Footer';

export default function Packages() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="font-sans bg-white text-[#222]">
      {/* Container for seamless header and hero section */}
      <div className="w-full relative overflow-hidden min-h-[750px] py-12">
        {/* Background image with fade */}
        <div className="absolute inset-0 flex w-full h-full z-0 bg-white">
          <div className="relative  h-full">
            <Image
              src="/images/packages/4.jpg"
              alt="Background"
              fill
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative flex-1 h-full">
            <Image
              src="/images/packages/1.jpg"
              alt="Overlay 2"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="relative flex-1 h-full">
            <Image
              src="/images/packages/2.jpg"
              alt="Overlay 3"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative flex-1 h-full">
            <Image
              src="/images/packages/3.jpg"
              alt="Overlay 4"
              fill
              className="object-cover opacity-30"
            />
          </div>
        </div>

        {/* Navbar/Header - seamless with homepage */}
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
              <div className="h-10 border-l border-black mx-14"></div> {/* Vertical Line */}
              <a
                href="tel:8006442"
                className="text-[#5BF014] font-bold text-sm flex items-center gap-1"
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
          </div>
        </header>

          {/* Hero/Top Section Content (customize as needed) */}
          <section className="w-full relative flex flex-col items-center justify-center min-h-[400px] pt-40 pb-20 z-10">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-center">
          <span className="text-black">Packages</span>
            </h1>
            <p className="max-w-4xl mx-auto text-gray-700 mb-10 text-center text-xl md:text-2xl">
            Discover a variety of cleaning packages designed to meet your unique needs — whether you need a quick touch-up, weekly care, or full-time support. Choose from hourly, weekly, or monthly plans, each crafted with convenience, quality, and attention to detail in mind. Our packages offer the perfect balance of flexibility and professionalism, ensuring your space stays spotless without the stress.          </p>
            <div className="flex flex-col items-center mt-90">
              <span className="text-gray-500 text-sm mb-1">Scroll Down</span>
              <div className="w-8 h-8   flex items-center justify-center">
              <img src="/images/services/mouse.png" alt="mouse" />
              </div>
            </div>
          </section>
        </div>


      <section className="w-full py-16 px-4 relative overflow-hidden min-h-[800px]">
        {/* Background image with fade */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/packages/7.jpg"
            alt="Background"
            fill
            className="object-cover opacity-40"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'radial-gradient(#e5e5e5 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              zIndex: 1,
            }}
          />
        </div>

        {/* Section Title */}
        <div className="max-w-7xl mx-auto mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <Image
              src="/images/services/brush.svg"
              alt="Brush Icon"
              width={40}
              height={40}
              className="text-yellow-400"
            />
            <span>Pick a </span>
            <span className="text-yellow-400">Plan</span>
            <span> That Fits Your Life :)</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto relative z-9 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Hourly Package - up, blue border */}
            <div className="bg-white border-2 border-blue-400 rounded-lg p-9 flex flex-col mt-0 lg:mt-0 min-h-[400px]">
              <h3 className="font-semibold text-xl mb-6">Hourly Package</h3>
              <ul className="space-y-4 mb-auto">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>1 Maid.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>2 Hours – Basic cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>4 Hours – Full room cleaning, dishes, light laundry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>8 Hours – Deep cleaning, ironing, cooking help</span>
                </li>
              </ul>
              <div className="mt-6">
                <button onClick={() => router.push('/contact')} className="text-yellow-400 font-medium flex items-center">
                  Book Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Weekly Package - down, yellow border */}
            <div className="bg-white border-2 border-yellow-400 rounded-lg p-9 flex flex-col mt-16 lg:mt-32 min-h-[400px]">
              <h3 className="font-semibold text-xl mb-6">Weekly Package</h3>
              <ul className="space-y-4 mb-auto">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>2–3 days/week – General cleaning, dusting, bathrooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>5–6 days/week – Full house care, including laundry and dishes</span>
                </li>
              </ul>
              <div className="mt-6">
                <button onClick={() => router.push('/contact')} className="text-yellow-400 font-medium flex items-center">
                  Book Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Monthly Package - up, blue border */}
            <div className="bg-white border-2 border-blue-400 rounded-lg p-9 flex flex-col mt-0 lg:mt-0 min-h-[400px]">
              <h3 className="font-semibold text-xl mb-6">Monthly Package</h3>
              <ul className="space-y-4 mb-auto">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Full-time maid.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>6–8 hours daily.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>All-round help.</span>
                </li>
              </ul>
              <div className="mt-6">
                <button onClick={() => router.push('/contact')} className="text-yellow-400 font-medium flex items-center">
                  Book Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Annual Package - down, yellow border */}
            <div className="bg-white border-2 border-yellow-400 rounded-lg p-9 flex flex-col mt-16 lg:mt-32 min-h-[400px]">
              <h3 className="font-semibold text-xl mb-6">Annual Package</h3>
              <ul className="space-y-4 mb-auto">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Full-time maid.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>6–8 hours daily.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>all-round help.</span>
                </li>
              </ul>
              <div className="mt-6">
                <button onClick={() => router.push('/contact')} className="text-yellow-400 font-medium flex items-center">
                  Book Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <button onClick={() => router.push('/contact')} className="text-blue-500 px-6 py-2.5 rounded-md font-medium border border-blue-200 flex items-center">
              Book Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
            <button onClick={() => router.push('/pricing')} className="text-yellow-500 px-6 py-2.5 rounded-md font-medium border border-yellow-200 flex items-center">
              See Pricing
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
