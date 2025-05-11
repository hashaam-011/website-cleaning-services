import Image from 'next/image';

export default function Services() {
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
            <a href="/services" className="text-[#222] hover:text-yellow-500 font-bold underline">Services</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">Packages</a>
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

      {/* Hero/Services Info Section */}
      <section className="w-full bg-white pt-10 pb-6 px-4 flex flex-col items-center text-center border-b relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 opacity-30">
          <Image src="/images/services/335a94ec2f5378a8d522254a09820d48d2289f85.png" alt="Services Background" fill className="object-cover w-full h-full" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 relative z-10">Our <span className="text-yellow-400">Services</span></h1>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6 relative z-10">
          Discover a range of premium cleaning services designed to suit your space, schedule, and lifestyle. Whether it's residential care, commercial upkeep, or deep cleaning, each service is delivered with unmatched attention to detail and professionalism. Our expertly trained staff, eco-conscious products, and customized plans ensure your environment is not just clean—but flawlessly maintained.
        </p>
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-gray-400">Scroll Down</span>
          <svg width="24" height="24" fill="none" className="animate-bounce mt-1"><path d="M12 5v14m0 0l-5-5m5 5l5-5" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </section>

      {/* Tailored Cleaning Solutions Section */}
      <section className="w-full py-12 px-4 bg-white border-b relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <svg width="32" height="32" fill="none" className="text-yellow-400"><path d="M6 18l6 6 14-14" stroke="#FEC00D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h2 className="text-2xl md:text-3xl font-bold">Tailored Cleaning Solutions for Every Space !</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Residential Cleaning */}
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow flex flex-col items-start">
              <h3 className="font-semibold text-lg mb-2 text-blue-700">Residential Cleaning</h3>
              <ul className="text-sm text-gray-700 list-disc pl-4">
                <li>Greased dusting and sanitization of all rooms</li>
                <li>General dusting and vacuuming</li>
                <li>Mopping and surface cleaning</li>
                <li>Disinfecting and odor control</li>
                <li>Eco-friendly cleaning products</li>
                <li>High-touch surface cleaning</li>
              </ul>
            </div>
            {/* Commercial Cleaning */}
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow flex flex-col items-start">
              <h3 className="font-semibold text-lg mb-2 text-blue-700">Commercial Cleaning</h3>
              <ul className="text-sm text-gray-700 list-disc pl-4">
                <li>Workspace sanitization and floor mopping</li>
                <li>Desk, lobby, and reception cleaning</li>
                <li>Restroom and kitchen cleaning</li>
                <li>Window and glass cleaning</li>
                <li>High-traffic area disinfection</li>
                <li>Flexible scheduling</li>
              </ul>
            </div>
            {/* Deep Cleaning */}
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow flex flex-col items-start">
              <h3 className="font-semibold text-lg mb-2 text-blue-700">Deep Cleaning</h3>
              <ul className="text-sm text-gray-700 list-disc pl-4">
                <li>Complete dust and debris removal</li>
                <li>Appliance and fixture cleaning</li>
                <li>Furniture, upholstery, and carpet cleaning</li>
                <li>Sanitization of all spaces</li>
                <li>Removal of stains, mold, and allergens</li>
                <li>Ideal for move-in/move-out, post-renovation</li>
              </ul>
            </div>
            {/* Furniture Cleaning */}
            <div className="bg-white border-2 border-blue-400 rounded-lg p-6 shadow flex flex-col items-start">
              <h3 className="font-semibold text-lg mb-2 text-blue-700">Furniture Cleaning</h3>
              <ul className="text-sm text-gray-700 list-disc pl-4">
                <li>Sofas & Chairs – Fabric or leather</li>
                <li>Dining chairs, stools, benches</li>
                <li>Mattress cleaning & sanitization</li>
                <li>Odor removal & stain treatment</li>
                <li>Deep clean for seat and back</li>
                <li>Disinfecting – Surface, arms, and legs</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-[#146EB4] text-white px-6 py-2 rounded font-semibold hover:bg-blue-800 transition">Book Now</button>
            <button className="bg-yellow-400 text-[#222] px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition">See Packages</button>
            <button className="bg-white border border-blue-400 text-blue-700 px-6 py-2 rounded font-semibold hover:bg-blue-50 transition">See Pricing</button>
            <div className="flex items-center justify-center border-2 border-blue-400 rounded-lg bg-blue-50 w-[190px] h-[60px] text-blue-700 font-bold text-lg">380 x 725</div>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 w-1/3 opacity-60 z-0 hidden md:block">
          <Image src="/images/services/7094d5049f945eb787cf684a2d4bb9e4d6dc23f0.png" alt="Decorative Left" width={300} height={300} className="object-contain" />
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 opacity-60 z-0 hidden md:block">
          <Image src="/images/services/c3b5f4ad7815a075c4849acf47b39afc0afd7965.png" alt="Decorative Right" width={300} height={300} className="object-contain" />
        </div>
      </section>

      {/* Footer (reuse from main site) */}
      <footer className="w-full bg-yellow-50 py-8 px-4 mt-8 border-t border-yellow-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
          <div>
            <h4 className="font-bold mb-2">Navigation</h4>
            <ul className="space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/services" className="hover:underline font-bold underline">Services</a></li>
              <li><a href="#" className="hover:underline">Packages</a></li>
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
