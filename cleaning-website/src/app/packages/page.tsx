import Image from 'next/image';

export default function Packages() {
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
            <a href="/packages" className="text-[#222] hover:text-yellow-500 font-bold underline">Packages</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">Pricing</a>
            <a href="/gallery" className="text-[#222] hover:text-yellow-500">Gallery</a>
            <a href="/about" className="text-[#222] hover:text-yellow-500">About Us</a>
            <a href="/contact" className="text-[#222] hover:text-yellow-500">Contact Us</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="tel:8006442" className="text-[#00C853] font-bold text-sm">
              Call Us Now - Toll Free<br />8006442
            </a>
          </div>
        </div>
      </header>

      {/* Hero/Packages Info Section */}
      <section className="w-full bg-white pt-10 pb-6 px-4 flex flex-col items-center text-center border-b relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 opacity-30">
          <Image src="/images/packages/64e88a7c9f02a60c44238e437519aad846eee5d9.jpg" alt="Packages Background" fill className="object-cover w-full h-full" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 relative z-10">Packages</h1>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6 relative z-10">
          Discover a variety of cleaning packages designed to meet your unique needs—whether you need a quick touch-up, weekly care, or full-time support. Choose from hourly, weekly, or monthly plans, each crafted with convenience, quality, and attention to detail in mind. Our packages offer the perfect balance of flexibility and professionalism, ensuring your space stays spotless without the stress.
        </p>
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-gray-400">Scroll Down</span>
          <svg width="24" height="24" fill="none" className="animate-bounce mt-1"><path d="M12 5v14m0 0l-5-5m5 5l5-5" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </section>

      {/* Pick a Plan Section */}
      <section className="w-full py-12 px-4 bg-white border-b relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <svg width="32" height="32" fill="none" className="text-yellow-400"><path d="M6 18l6 6 14-14" stroke="#FEC00D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h2 className="text-2xl md:text-3xl font-bold">Pick a <span className="text-yellow-400">Plan</span> That Fits Your Life :)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Hourly Package */}
            <div className="bg-white border-2 border-yellow-200 rounded-lg p-6 shadow flex flex-col items-start">
              <h3 className="font-semibold text-lg mb-2 text-yellow-600">Hourly Package</h3>
              <ul className="text-sm text-gray-700 list-disc pl-4">
                <li>1 week</li>
                <li>1 Hour – Basic cleaning</li>
                <li>4 hours – Full room cleaning, kitchen, full laundry</li>
                <li>5 hours – Deep cleaning, including fridge and oven</li>
              </ul>
              <button className="mt-4 text-yellow-600 font-bold hover:underline">Book Now</button>
            </div>
            {/* Weekly Package */}
            <div className="bg-white border-2 border-yellow-200 rounded-lg p-6 shadow flex flex-col items-start">
              <h3 className="font-semibold text-lg mb-2 text-yellow-600">Weekly Package</h3>
              <ul className="text-sm text-gray-700 list-disc pl-4">
                <li>2-3 days/week – General cleaning, including all rooms</li>
                <li>6-9 hours/day – Full house including laundry and ironing</li>
              </ul>
              <button className="mt-4 text-yellow-600 font-bold hover:underline">Book Now</button>
            </div>
            {/* Monthly Package */}
            <div className="bg-white border-2 border-yellow-200 rounded-lg p-6 shadow flex flex-col items-start">
              <h3 className="font-semibold text-lg mb-2 text-yellow-600">Monthly Package</h3>
              <ul className="text-sm text-gray-700 list-disc pl-4">
                <li>Full-time maid</li>
                <li>6-8 hours daily</li>
                <li>All-around help</li>
              </ul>
              <button className="mt-4 text-yellow-600 font-bold hover:underline">Book Now</button>
            </div>
            {/* Annual Package */}
            <div className="bg-white border-2 border-yellow-400 rounded-lg p-6 shadow flex flex-col items-start">
              <h3 className="font-semibold text-lg mb-2 text-yellow-600">Annual Package</h3>
              <ul className="text-sm text-gray-700 list-disc pl-4">
                <li>Full-time maid</li>
                <li>6-8 hours daily</li>
                <li>All-around help</li>
              </ul>
              <button className="mt-4 text-yellow-600 font-bold hover:underline">Book Now</button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-[#146EB4] text-white px-6 py-2 rounded font-semibold hover:bg-blue-800 transition">Book Now</button>
            <button className="bg-yellow-400 text-[#222] px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition">See Pricing</button>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 w-1/3 opacity-60 z-0 hidden md:block">
          <Image src="/images/packages/1afa28fe7873be2e7460cdfcf05c3f236323e1eb.jpg" alt="Decorative Left" width={300} height={300} className="object-contain" />
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 opacity-60 z-0 hidden md:block">
          <Image src="/images/packages/08b69e6a8c84f07e986a5c790d4742edddc64b48.jpg" alt="Decorative Right" width={300} height={300} className="object-contain" />
        </div>
      </section>

      {/* Footer (reuse from main site) */}
      <footer className="w-full bg-yellow-50 py-8 px-4 mt-8 border-t border-yellow-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
          <div>
            <h4 className="font-bold mb-2">Navigation</h4>
            <ul className="space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/packages" className="hover:underline font-bold underline">Packages</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="/gallery" className="hover:underline">Gallery</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
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
