import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans bg-white text-[#222]">
      {/* Navbar */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-2">
            <Image src="/images/home/topsection2.png" alt="Logo" width={48} height={48} className="rounded-full" />
            <span className="font-bold text-xl text-[#222]">Cool Technical Services</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="text-[#222] hover:text-yellow-500">Home</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">Services</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">Packages</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">Pricing</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">Gallery</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">About Us</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">Contact Us</a>
          </nav>
          <div className="flex flex-col items-end gap-1">
            <a href="tel:+971501234567" className="text-green-600 font-semibold text-sm">Call Us Now</a>
            <span className="text-xs text-gray-500">+971 50 123 4567</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-yellow-50 to-white pt-10 pb-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#222]">Cool Technical Services</h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
              At Cool Technical Services, we understand that a clean space is essential to your comfort and well-being. With our team of highly trained professionals, we deliver premium cleaning services that go beyond expectations, whether for your home, office, or special occasions. From regular maintenance to one-off deep tailored solutions to fit your needs, our commitment to using eco-sustainable methods means that every clean is both sustainable and thorough. Let us bring a touch of luxury to your space—our meticulous attention to detail, punctuality, and unmatched customer service.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">Book Now</button>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/images/home/topsection.jpg" alt="Hero" width={500} height={400} className="rounded-xl shadow-lg object-cover" />
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
              <li><a href="#" className="hover:underline">Gallery</a></li>
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
