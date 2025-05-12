import Image from 'next/image';

export default function About() {
  return (
    <div className="font-sans bg-[#F8F8F8] text-[#222] min-h-screen flex flex-col">
      {/* Header (reuse from main site) */}
      <header className="w-full bg-white z-20 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-2">
            <Image src="/images/home/topsection2.png" alt="Logo" width={40} height={40} className="rounded-full" />
            <span className="font-bold text-lg text-[#222]">Cool Technical Services</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="/" className="text-[#222] hover:text-yellow-500">Home</a>
            <a href="/services" className="text-[#222] hover:text-yellow-500">Services</a>
            <a href="/packages" className="text-[#222] hover:text-yellow-500">Packages</a>
            <a href="/pricing" className="text-[#222] hover:text-yellow-500">Pricing</a>
            <a href="/gallery" className="text-[#222] hover:text-yellow-500">Gallery</a>
            <a href="/about" className="text-[#222] hover:text-yellow-500 font-bold underline">About Us</a>
            <a href="/contact" className="text-[#222] hover:text-yellow-500">Contact Us</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="tel:8006442" className="text-[#00C853] font-bold text-sm">
              Call Us Now - Toll Free<br />8006442
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-white pt-10 pb-6 px-4 flex flex-col items-center text-center border-b relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Our <span className="text-yellow-400">Company</span></h1>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6">
          At Cool Technical Services, we're dedicated to providing exceptional cleaning solutions for homes and businesses. Our team of professionals is committed to delivering quality, reliability, and customer satisfaction in every service we offer.
        </p>
        <div className="relative w-full flex justify-center">
          <Image src="/images/about/8f36ff0abd2816d076244b6348b273cbf6246ef8.jpg" alt="Company" width={600} height={300} className="rounded-xl shadow-lg object-cover border-4 border-white" />
          <Image src="/images/about/a695b63e5604cb22b9cdc72e78ab3c6864e678a4.png" alt="Grid Overlay" width={120} height={120} className="absolute right-10 top-10 opacity-60 hidden md:block" />
        </div>
      </section>

      {/* About Us Section with faded background */}
      <section className="w-full py-12 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-20 z-0">
          <Image src="/images/about/d268794339f3e0dd6ef561d4651065b27f0b766b.jpg" alt="Background" fill className="object-cover w-full h-full" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">About us</h2>
          <p className="text-lg text-gray-800 mb-2">
            At Cool Technical Services, we're passionate about helping our clients maintain spotless, comfortable, and stress-free spaces. Our team blends expertise with a personal touch, ensuring every project is completed to the highest standards. We believe in building lasting relationships with our clients, based on trust, transparency, and exceptional service.
          </p>
          <p className="text-lg text-gray-800">
            Whether you're seeking regular cleaning, a one-time deep clean, or specialized services, we're here to make your life easier. Experience the difference with Cool Technical Services—where your satisfaction is our top priority.
          </p>
        </div>
      </section>

      {/* How it started Section */}
      <section className="w-full py-12 px-4 bg-white relative overflow-hidden flex flex-col md:flex-row items-center border-b">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image src="/images/about/20b03486ae78f0f95bc7ec4d4bd3f09cc995cb8d.jpg" alt="How it started" width={400} height={300} className="rounded-xl shadow-lg object-cover" />
        </div>
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">How it started</h2>
          <p className="text-lg text-gray-800">
            Cool Technical Services began with a clear mission—to bring reliable, professional cleaning expertise to homes and businesses across the region. Our founders saw a need for high-quality, consistent cleaning services, and brought together a team of dedicated professionals to fill that gap. Today, we're proud to be a trusted name in the industry, known for our attention to detail and commitment to excellence.
          </p>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="w-full py-12 px-4 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-yellow-50 rounded-lg p-6 shadow flex flex-col items-center border border-yellow-100">
              <Image src="/images/about/58ff2a348448c1e46dc709acedc219e30095c0e7.png" alt="Step 1" width={60} height={60} className="mb-4" />
              <h3 className="font-semibold text-lg mb-2">Book your service</h3>
              <p className="text-sm text-gray-700">Choose your cleaning package and schedule a time that works for you. Our team will confirm your booking promptly.</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6 shadow flex flex-col items-center border border-yellow-100">
              <Image src="/images/about/aa952344c21491107adacb42c318a6ad623f75fe.png" alt="Step 2" width={60} height={60} className="mb-4" />
              <h3 className="font-semibold text-lg mb-2">We get to work</h3>
              <p className="text-sm text-gray-700">Our professional cleaners arrive on time, fully equipped, and ready to deliver top-notch service with a smile.</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6 shadow flex flex-col items-center border border-yellow-100">
              <Image src="/images/about/4be766c0bd28bd9e367366c0641063f264367e02.png" alt="Step 3" width={60} height={60} className="mb-4" />
              <h3 className="font-semibold text-lg mb-2">Enjoy your space</h3>
              <p className="text-sm text-gray-700">Relax and enjoy your beautifully cleaned space, knowing you've chosen a team that cares about your satisfaction.</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="bg-yellow-50 rounded-lg p-6 shadow flex flex-col items-center border border-yellow-100 max-w-xs">
              <h3 className="font-semibold text-lg mb-2">Any questions?</h3>
              <p className="text-sm text-gray-700">Contact us anytime for more information or to customize your cleaning plan. We're here to help!</p>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <Image src="/images/about/a695b63e5604cb22b9cdc72e78ab3c6864e678a4.png" alt="Decorative" width={100} height={100} className="opacity-60" />
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
