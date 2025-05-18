"use client";

import { usePathname } from 'next/navigation';
import { MapPin, ExternalLink } from "lucide-react"

import Image from 'next/image';
import mouse from '@/public/images/services/mouse.png';

export default function ContactUs() {
  const pathname = usePathname();

  return (
    <div className="font-sans bg-white text-[#222]">
      {/* Container for seamless header and hero section */}
      <div className="w-full relative overflow-hidden min-h-[890px] py-12">
        {/* Background image with fade */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/contact/1.jpg"
            alt="Background"
            fill
            className="object-cover opacity-70"
            priority
          />
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
              <span className="text-black">Contact Us</span>
            </h1>
            <p className="max-w-4xl mx-auto text-gray-700 mb-10 text-center text-xl md:text-2xl">
              Whether it's your home, office, or commercial space — we're here to bring back the shine! Our professional cleaning team is ready to handle the dirt so you don't have to. Reach out now to schedule a service or ask any questions — we're happy to help!
            </p>
            {/* Person image at bottom right */}
            <div className="absolute -bottom-80 right-180 z-20">
              <Image
                src="/images/contact/2.png"
                alt="Contact Person"
                width={320}
                height={420}
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
            {/* Mouse icon at bottom center - moved to end */}
        <div className="absolute -bottom-45 right-220 z-20">
          <span className="text-gray-500 text-sm mb-1">Scroll Down</span>
          <div className="w-8 h-0.1 flex items-center justify-center">
            <img src="/images/services/mouse.png" alt="mouse" />
          </div>
        </div>
          </section>
        </div>


      {/* Contact Form Section */}
      <section className="w-full py-12 px-4 bg-white flex flex-col items-center border-t-4 border-b-4 border-sky-300">
  <div className="w-full max-w-6xl bg-white rounded-lg p-8 flex flex-col md:flex-row gap-8 relative">
    {/* Dotted background pattern */}
    <div className="absolute inset-0 opacity-10 pointer-events-none"
         style={{
           backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
           backgroundSize: '20px 20px'
         }} />

    {/* Form section */}
    <div className="w-full md:w-2/3 z-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold">Need a shine? Drop us a line!</h2>
      </div>

      <form className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="firstName" className="font-medium text-gray-700">First name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="lastName" className="font-medium text-gray-700">Last name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="contactNumber" className="font-medium text-gray-700">Contact Number</label>
            <input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              placeholder="+61 xx xxxx xx"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="email" className="font-medium text-gray-700">E-Mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="abc@mail.com"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
        <button
  type="submit"
  className="flex items-center overflow-hidden shadow-md hover:shadow-lg transition-shadow"
>
  <span className="bg-yellow-400 text-white font-medium py-2 px-4">
    Send Now
  </span>
  <span className="bg-white py-2 px-3 flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-yellow-400"
    >
      <polyline points="9 18 19 12 9 6"></polyline>
    </svg>
  </span>
</button>
        </div>
      </form>
    </div>

    {/* Contact information section */}
    <div className="w-full md:w-1/3 z-10">
      <div className="flex flex-col gap-6 mt-16">
        <div className="flex items-center gap-3">
          <div className="text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <div className="text-yellow-400 font-medium">Call us</div>
            <div>0505393004</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <div className="text-yellow-400 font-medium">Landline</div>
            <div>04 268 6552</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <div className="text-yellow-400 font-medium">Call Us Toll-Free</div>
            <div>8006442</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <div className="text-yellow-400 font-medium">WhatsApp</div>
            <div>0505393004</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <div className="text-yellow-400 font-medium">E-Mail</div>
            <div>cleaningservice@abc.com</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div className="text-yellow-400 font-medium">Social Media</div>
            <div className="flex flex-col gap-1 mt-1">
              <a href="https://www.facebook.com/companyname" className="text-blue-600 hover:underline flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                https://www.facebook.com/companyname
              </a>
              <a href="https://www.instagram.com/companyname" className="text-pink-600 hover:underline flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                https://www.instagram.com/companyname
              </a>
              <a href="https://www.linkedin.com/company/companyname" className="text-blue-800 hover:underline flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
                https://www.linkedin.com/company/companyname
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Map/Location Section (optional, with second image) */}
      <section className="w-full py-12 px-4 bg-white flex flex-col items-center border-t">
      <div className="max-w-4xl w-full flex flex-col items-center text-center mb-6">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="h-8 w-8 text-red-500" />
          <h2 className="text-3xl font-bold text-gray-800">We're Just Around the Corner ;)</h2>
        </div>

        <a
          href="https://maps.google.com/?q=Abdullah+Bahar+Building,+Salahudin+Road,+Deira+Dubai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
        >
          <span>Office 201, M Floor, Gate No 1, Abdullah Bahar Building, Salahudin Road, Deira Dubai</span>
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>

      <div className="rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg w-full max-w-4xl">
        <iframe
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=25.270660,55.321980&z=16&output=embed"
          title="Map showing our office location in Deira, Dubai"
        ></iframe>
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
