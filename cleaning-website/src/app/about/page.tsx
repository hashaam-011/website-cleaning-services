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
            <a href="#" className="text-[#222] hover:text-yellow-500">Services</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">Packages</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">Pricing</a>
            <a href="/gallery" className="text-[#222] hover:text-yellow-500">Gallery</a>
            <a href="/about" className="text-[#222] hover:text-yellow-500 font-bold underline">About Us</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">Contact Us</a>
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

      {/* Footer (reuse from main site) */}
      <footer className="w-full bg-yellow-50 py-8 px-4 mt-8 border-t border-yellow-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
          <div>
            <h4 className="font-bold mb-2">Navigation</h4>
            <ul className="space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Packages</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="/gallery" className="hover:underline">Gallery</a></li>
              <li><a href="/about" className="hover:underline font-bold underline">About Us</a></li>
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
