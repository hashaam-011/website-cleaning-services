import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans bg-white text-[#222]">
    {/* Navbar - updated to match image with solid white background */}
    <header className="w-full bg-white z-20 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-2">
          <Image src="/images/home/topsection2.png" alt="Logo" width={48} height={48} className="rounded-full" />
          <span className="font-bold text-xl text-[#222]">Cool Technical Services</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="text-[#222] hover:text-yellow-400 transition">Home</a>
          <a href="#" className="text-[#222] hover:text-yellow-400 transition">Services</a>
          <a href="#" className="text-[#222] hover:text-yellow-400 transition">Packages</a>
          <a href="#" className="text-[#222] hover:text-yellow-400 transition">Pricing</a>
          <a href="/gallery" className="text-[#222] hover:text-yellow-400 transition">Gallery</a>
          <a href="#" className="text-[#222] hover:text-yellow-400 transition">About Us</a>
          <a href="#" className="text-[#222] hover:text-yellow-400 transition">Contact Us</a>
        </nav>
        <div className="flex items-center gap-2">
          <Image src="/images/phone-icon.png" alt="Phone" width={24} height={24} className="text-green-500" />
          <a href="tel:8006442" className="text-[#00C853] font-bold text-sm">
            Call Us Now - Toll Free<br />8006442
          </a>
        </div>
      </div>
    </header>

    {/* Hero Section with yellow background and three workers */}
    <section className="w-full relative flex items-center min-h-[600px] overflow-hidden bg-[#FEC00D]">
      <div className="max-w-7xl mx-auto w-full flex flex-row relative px-4">
        {/* Left content area */}
        <div className="w-1/2 py-16 pr-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#222]">Cool Technical Services</h1>
          <p className="text-base mb-8 text-[#222]">
            At Cool Technical Services, we understand that a clean space is essential to your comfort and well-being. With our team of highly trained professionals, we deliver premium cleaning services that go beyond expectations. Whether you need a one-time deep clean or a regular maintenance plan, we offer tailored solutions to fit your needs. Our commitment to using eco-friendly products ensures that every clean is as sustainable as it is thorough. Let us bring a touch of luxury to your space with our meticulous attention to detail, punctuality, and unmatched customer care.
          </p>
          <button className="flex items-center gap-2 bg-[#146EB4] text-white px-6 py-2 rounded-md font-bold text-base shadow-md hover:bg-blue-800 transition w-fit">
            Book Now
            <span className="inline-block ml-1">
              <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 8h6m0 0l-2-2m2 2l-2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </button>
        </div>

        {/* Right area with three workers */}
        <div className="w-1/2 h-full flex items-end justify-end relative">
          <div className="relative flex items-end h-full" style={{ minHeight: '420px' }}>
            <div className="relative z-10" style={{ marginRight: '-40px' }}>
              <Image src="/images/home/topsection3.png" alt="Worker 1" width={220} height={420} className="object-contain" />
            </div>
            <div className="relative z-20" style={{ marginRight: '-40px' }}>
              <Image src="/images/home/topsection4.png" alt="Worker 2" width={220} height={420} className="object-contain" />
            </div>
            <div className="relative z-30">
              <Image src="/images/home/topsection5.png" alt="Worker 3" width={220} height={420} className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>


{/* What we're offering */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">What we're offering</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Residential Cleaning */}
            <div className="bg-yellow-50 rounded-lg p-6 shadow flex flex-col items-center">
              <Image src="/images/home/secondsection.jpg" alt="Residential Cleaning" width={80} height={80} className="mb-4 rounded-full" />
              <h3 className="font-semibold text-lg mb-2">Residential Cleaning</h3>
              <ul className="text-sm text-gray-600 mb-2">
                <li>• Homes</li>
                <li>• Apartments</li>
                <li>• Villas</li>
              </ul>
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Learn More</a>
            </div>
            {/* Commercial Cleaning */}
            <div className="bg-yellow-50 rounded-lg p-6 shadow flex flex-col items-center">
              <Image src="/images/home/secondsection2.jpg" alt="Commercial Cleaning" width={80} height={80} className="mb-4 rounded-full" />
              <h3 className="font-semibold text-lg mb-2">Commercial Cleaning</h3>
              <ul className="text-sm text-gray-600 mb-2">
                <li>• Offices</li>
                <li>• Shops</li>
                <li>• Hotels</li>
              </ul>
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Learn More</a>
            </div>
            {/* Deep Cleaning */}
            <div className="bg-yellow-50 rounded-lg p-6 shadow flex flex-col items-center">
              <Image src="/images/home/third.png" alt="Deep Cleaning" width={80} height={80} className="mb-4 rounded-full" />
              <h3 className="font-semibold text-lg mb-2">Deep Cleaning</h3>
              <ul className="text-sm text-gray-600 mb-2">
                <li>• Kitchens</li>
                <li>• Bathrooms</li>
                <li>• All rooms</li>
              </ul>
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Learn More</a>
            </div>
            {/* Post-construction Cleaning */}
            <div className="bg-yellow-50 rounded-lg p-6 shadow flex flex-col items-center">
              <Image src="/images/home/third2.png" alt="Post-construction Cleaning" width={80} height={80} className="mb-4 rounded-full" />
              <h3 className="font-semibold text-lg mb-2">Post-construction Cleaning</h3>
              <ul className="text-sm text-gray-600 mb-2">
                <li>• New Renovation</li>
                <li>• Site Handover</li>
                <li>• Move-in Ready</li>
              </ul>
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Learn More</a>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">See All</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2">
            <span className="text-yellow-400 text-3xl">&#10077;</span> Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow flex flex-col gap-2">
              <p className="text-gray-700">"Excellent service! My home has never looked better. Highly recommend Cool Technical Services!"</p>
              <span className="text-sm text-gray-500 font-medium">- Sarah K.</span>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow flex flex-col gap-2">
              <p className="text-gray-700">"Professional, punctual, and thorough. The team was friendly and efficient."</p>
              <span className="text-sm text-gray-500 font-medium">- Ahmed R.</span>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow flex flex-col gap-2">
              <p className="text-gray-700">"I booked a deep cleaning and was amazed by the results. Will use again!"</p>
              <span className="text-sm text-gray-500 font-medium">- Priya S.</span>
            </div>
          </div>
          <div className="flex justify-center mb-8">
            <button className="text-blue-600 font-medium hover:underline">Submit your feedback</button>
          </div>
          <div className="flex justify-between items-center">
            <Image src="/images/home/third3.jpg" alt="Thumbs Up" width={120} height={120} className="rounded-full" />
            <Image src="/images/home/topsection3.png" alt="Happy Customer" width={120} height={120} className="rounded-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-yellow-50 py-8 px-4 mt-8 border-t border-yellow-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
          <div>
            <h4 className="font-bold mb-2">Navigation</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Packages</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="/gallery" className="hover:underline">Gallery</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Services</h4>
            <ul className="space-y-1">
              <li>Residential cleaning</li>
              <li>Commercial cleaning</li>
              <li>Deep cleaning</li>
              <li>Post-construction cleaning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Support</h4>
            <ul className="space-y-1">
              <li>Customer Service</li>
              <li>FAQs</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Get in Touch</h4>
            <ul className="space-y-1">
              <li>+971 50 123 4567</li>
              <li>info@cooltechservices.com</li>
              <li>Dubai, UAE</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">Copyright © 2024 Cool Technical Services. All rights reserved.</div>
      </footer>
    </div>
  );
}
