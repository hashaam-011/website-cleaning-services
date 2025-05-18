"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import mouse from '@/public/images/services/mouse.png';

export default function Packages() {
  const pathname = usePathname();

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
                <button className="text-yellow-400 font-medium flex items-center">
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
                <button className="text-yellow-400 font-medium flex items-center">
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
                <button className="text-yellow-400 font-medium flex items-center">
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
                <button className="text-yellow-400 font-medium flex items-center">
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
            <button className="text-blue-500 px-6 py-2.5 rounded-md font-medium border border-blue-200 flex items-center">
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
            <button className="text-yellow-500 px-6 py-2.5 rounded-md font-medium border border-yellow-200 flex items-center">
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

        {/* Footer */}
        <footer className="w-full bg-[#fff9e6] pt-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top section with Follow Us and Newsletter */}
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Follow Us</h4>
            <div className="flex space-x-2">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5 fill-current">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Subscribe to our Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none text-sm w-full"
              />
              <button className="bg-orange-500 text-white px-3 py-2 rounded-r-md hover:bg-orange-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="border-t border-yellow-200 my-4"></div>

        {/* Main footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Residential Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Post-construction Cleaning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              <li>Customer Support</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Get In Touch</h4>
            <ul className="space-y-2">
  <li className="flex items-start">
    <span className="mr-2 flex-shrink-0 text-green-300">
      <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
      </svg>
    </span>
    <span>Office 201, M Floor, Gate No 1, Abdullah Bahar Building, Salahudin Road, Deira Dubai</span>
  </li>
  <li className="flex items-center">
    <span className="mr-2 flex-shrink-0 text-green-300">
      <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
      </svg>
    </span>
    <span>04 268 6552</span>
  </li>
  <li className="flex items-center">
    <span className="mr-2 flex-shrink-0 text-green-300">
      <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path>
      </svg>
    </span>
    <span>0505393004</span>
  </li>
  <li className="flex items-center">
    <span className="mr-2 flex-shrink-0 text-green-300">
      <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"></path>
      </svg>
    </span>
    <span>0505393004</span>
  </li>
  <li className="flex items-center">
    <span className="mr-2 flex-shrink-0 text-green-300">
      <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
      </svg>
    </span>
    <span>8006442 (Toll Free)</span>
  </li>
  <li className="flex items-center">
    <span className="mr-2 flex-shrink-0 text-green-300">
      <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
      </svg>
    </span>
    <span>cleaningservices@abc.com</span>
  </li>
</ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-gray-700 text-gray-300 text-center text-xs py-3 -mx-4 mt-6">
        Copyright 2025 © PetPal All rights Reserved
      </div>
      </footer>
    </div>

  );
}
