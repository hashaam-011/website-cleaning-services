import Image from 'next/image';

export default function Contact() {
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
            <a href="/about" className="text-[#222] hover:text-yellow-500">About Us</a>
            <a href="/contact" className="text-[#222] hover:text-yellow-500 font-bold underline">Contact Us</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="tel:8006442" className="text-[#00C853] font-bold text-sm">
              Call Us Now - Toll Free<br />8006442
            </a>
          </div>
        </div>
      </header>

      {/* Hero/Contact Info Section */}
      <section className="w-full bg-white pt-10 pb-6 px-4 flex flex-col md:flex-row items-center text-center md:text-left border-b relative overflow-hidden">
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact <span className="text-yellow-400">Us</span></h1>
          <p className="max-w-lg text-gray-700 mb-6">
            Have questions or want to book a service? Reach out to us and our team will get back to you as soon as possible. We're here to help you keep your space spotless and stress-free!
          </p>
          <div className="text-left space-y-2">
            <div><span className="font-bold">Phone:</span> <a href="tel:+971501234567" className="text-blue-600 hover:underline">+971 50 123 4567</a></div>
            <div><span className="font-bold">Email:</span> <a href="mailto:info@cooltechservices.com" className="text-blue-600 hover:underline">info@cooltechservices.com</a></div>
            <div><span className="font-bold">Location:</span> Dubai, UAE</div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image src="/images/contact/7e54ffac35c9b8ef3bea4ef94adddee189476d05.png" alt="Contact Illustration" width={400} height={320} className="rounded-xl object-cover shadow-lg" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 px-4 bg-white flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
        <form className="w-full max-w-xl bg-yellow-50 rounded-lg shadow p-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">Name</label>
            <input id="name" name="name" type="text" required className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input id="email" name="email" type="email" required className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold">Message</label>
            <textarea id="message" name="message" rows={4} required className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <button type="submit" className="bg-[#146EB4] text-white font-bold py-2 px-6 rounded hover:bg-blue-800 transition">Send Message</button>
        </form>
      </section>

      {/* Map/Location Section (optional, with second image) */}
      <section className="w-full py-8 px-4 bg-white flex justify-center border-t">
        <Image src="/images/contact/5e0699fe1cd5ecddb07ffee953272085570a8fee.jpg" alt="Office Location" width={500} height={300} className="rounded-xl object-cover shadow-lg" />
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
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline font-bold underline">Contact Us</a></li>
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
