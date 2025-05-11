// This file should be moved to src/app/gallery/page.tsx for routing to work.

import Image from 'next/image';

export default function Gallery() {
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
            <a href="#" className="text-[#222] hover:text-yellow-500">Home</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">Services</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">Packages</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">Pricing</a>
            <a href="/gallery" className="text-[#222] hover:text-yellow-400 transition">Gallery</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">About Us</a>
            <a href="#" className="text-[#222] hover:text-yellow-500">Contact Us</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="tel:8006442" className="text-[#00C853] font-bold text-sm">
              Call Us Now - Toll Free<br />8006442
            </a>
          </div>
        </div>
      </header>

      {/* Hero/Intro Section */}
      <section className="w-full bg-white py-10 px-4 flex flex-col items-center text-center border-b">
        <Image src="/images/gallery/79d472f9c77ac013975a400b7202545dae8f8137.png" alt="Illustration" width={320} height={120} className="mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Take a look !</h1>
        <p className="max-w-2xl mx-auto text-gray-700 mb-4">
          Discover a selection of our team in action and some of the impressive work we've completed for our clients. We take pride in our attention to detail and commitment to customer satisfaction. Here's a glimpse into our process and results!
        </p>
        <div className="flex flex-col items-center mt-4">
          <span className="text-gray-400">Scroll</span>
          <svg width="24" height="24" fill="none" className="animate-bounce mt-1"><path d="M12 5v14m0 0l-5-5m5 5l5-5" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full bg-white py-10 px-4 border-b">
        <h2 className="text-2xl font-bold text-center mb-2">Our Team</h2>
        <p className="text-center text-gray-700 mb-8 max-w-xl mx-auto">
          Our skilled team of professionals is handpicked for their expertise, reliability, and attention to detail. With a shared goal of exceeding your expectations, we work together to maintain a consistently high standard in every service we provide.
        </p>
        {/* Team carousel (static for now) */}
        <div className="flex justify-center gap-4 items-center max-w-3xl mx-auto">
          <div className="w-1/4 flex justify-center">
            <Image src="/images/gallery/ebd0f5a6f4ac9b41491f753ca6bde71fd135881d.jpg" alt="Team 1" width={120} height={160} className="rounded-lg object-cover" />
          </div>
          <div className="w-2/4 flex justify-center">
            <Image src="/images/gallery/3a45ef0dbbc2bc9847b3327f3efbb1da7c99d500.png" alt="Team Main" width={320} height={200} className="rounded-lg object-cover" />
          </div>
          <div className="w-1/4 flex justify-center">
            <Image src="/images/gallery/84683873e9f6b4ce5b4295e20a1f4706cdb9ee94.png" alt="Team 2" width={120} height={160} className="rounded-lg object-cover" />
          </div>
        </div>
      </section>

      {/* Glimpse of our work Section */}
      <section className="w-full bg-white py-10 px-4 border-b">
        <h2 className="text-2xl font-bold text-center mb-2">A Glimpse of our work :)</h2>
        <p className="text-center text-gray-700 mb-8 max-w-xl mx-auto">
          Check out some of our favorite before-and-after moments as we turn spaces sparkling. The photos are 100% real, and we're eager to brighten up your place in a similar fashion. Trust, results matter!
        </p>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          <Image src="/images/gallery/16ff545d7e36e5fd277daaf9626b023cb913aa55.jpg" alt="Work 1" width={260} height={180} className="rounded-lg object-cover" />
          <Image src="/images/gallery/37fec225f7e8f27f9b70cae1b931b16dac5d8fc4 (2).jpg" alt="Work 2" width={260} height={180} className="rounded-lg object-cover" />
          <Image src="/images/gallery/33591c5fc7ca88fec85149fd08260dd05180fe3f.jpg" alt="Work 3" width={260} height={180} className="rounded-lg object-cover" />
          <Image src="/images/gallery/e9635e5d464aa2b737f516c9db35dc85a42385ca.jpg" alt="Work 4" width={260} height={180} className="rounded-lg object-cover" />
        </div>
      </section>

      {/* Footer (reuse from main site) */}
      <footer className="w-full bg-yellow-50 py-8 px-4 mt-8 border-t border-yellow-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
          <div>
            <h4 className="font-bold mb-2">Navigation</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Packages</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline font-bold underline">Gallery</a></li>
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
