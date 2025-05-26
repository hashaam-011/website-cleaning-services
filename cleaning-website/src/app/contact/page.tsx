"use client";

import { usePathname } from 'next/navigation';
import { MapPin, ExternalLink } from "lucide-react"

import Image from 'next/image';
import mouse from '@/public/images/services/mouse.png';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with the public key
emailjs.init("rcl7bv84pMjBjjzAt");

export default function ContactUs() {
  const pathname = usePathname();
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_9hed9fr',
        'template_yfshcpn',
        {
          title: 'New Contact Form Submission',
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.contactNumber,
          message: data.message
        },
        'rcl7bv84pMjBjjzAt'
      );

      if (result && result.status === 200) {
        setStatus('Message sent successfully! We will get back to you shortly.');
        if (event.currentTarget) {
          event.currentTarget.reset();
        }
      } else {
        setStatus(`Failed to send message. Please try again later.`);
      }
    } catch (error: any) {
      console.error('Email sending error:', error);
      setStatus(`Failed to send message. Please try again later.`);
    }
  };

  return (
    <div className="font-sans bg-white text-[#222]">
      {/* Container for seamless header and hero section */}
      <div className="w-full relative overflow-hidden min-h-[600px] sm:min-h-[700px] md:min-h-[890px] py-8 sm:py-12">
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

        <Navigation />

        {/* Hero/Top Section Content */}
        <section className="w-full relative flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] pt-32 sm:pt-40 pb-12 sm:pb-20 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold mb-4 sm:mb-6 text-center">
            <span className="text-black">Contact Us</span>
          </h1>
          <p className="max-w-4xl mx-auto text-gray-700 mb-6 sm:mb-10 text-center text-base sm:text-lg md:text-xl lg:text-2xl px-4">
            Whether it's your home, office, or commercial space — we're here to bring back the shine! Our professional cleaning team is ready to handle the dirt so you don't have to. Reach out now to schedule a service or ask any questions — we're happy to help!
          </p>
          {/* Person image at bottom right */}
          <div className="absolute -bottom-40 sm:-bottom-60 md:-bottom-80 right-20 md:right-96 z-20 hidden md:block">
            <Image
              src="/images/contact/2.png"
              alt="Contact Person"
              width={520}
              height={120}
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
          {/* Mouse click button to scroll to bottom */}
          <div className="flex flex-col items-center mt-10 cursor-pointer" onClick={() => {
            const footer = document.getElementById('contact-footer');
            if (footer) footer.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span className="text-gray-500 text-sm mb-1">Scroll Down</span>
            <img src="/images/services/mouse.png" alt="mouse" className="w-8 h-8" />
          </div>
        </section>
      </div>

      {/* Contact Form Section */}
      <section className="w-full py-8 sm:py-12 px-2 sm:px-4 bg-white flex flex-col items-center border-t-4 border-b-4 border-sky-300">
        <div className="w-full max-w-6xl bg-white rounded-lg p-3 sm:p-4 md:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 relative">
          {/* Dotted background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
               style={{
                 backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                 backgroundSize: '20px 20px'
               }} />

          {/* Form section */}
          <div className="w-full md:w-2/3 z-10">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Need a shine? Drop us a line!</h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="firstName" className="font-medium text-gray-700 text-sm sm:text-base">First name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="px-3 sm:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="lastName" className="font-medium text-gray-700 text-sm sm:text-base">Last name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="px-3 sm:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="contactNumber" className="font-medium text-gray-700 text-sm sm:text-base">Contact Number</label>
                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="tel"
                    required
                    placeholder="+61 xx xxxx xx"
                    className="px-3 sm:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="email" className="font-medium text-gray-700 text-sm sm:text-base">E-Mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="abc@mail.com"
                    className="px-3 sm:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-medium text-gray-700 text-sm sm:text-base">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="px-3 sm:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="flex items-center overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="bg-yellow-400 text-white font-medium py-2 px-3 sm:px-4 text-sm sm:text-base">
                    Send Now
                  </span>
                  <span className="bg-white py-2 px-2 sm:px-3 flex items-center justify-center">
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
              {status && <p className="mt-4 text-center font-semibold text-sm text-gray-700">{status}</p>}
            </form>
          </div>

          {/* Contact information section */}
          <div className="w-full md:w-1/3 z-10">
            <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-16">
              <div className="flex items-center gap-3">
                <div className="text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-yellow-400 font-medium text-sm sm:text-base">Call us</div>
                  <a href="tel:0505393004" className="text-sm sm:text-base hover:text-blue-600 transition-colors">0505393004</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-yellow-400 font-medium text-sm sm:text-base">Landline</div>
                  <a href="tel:042686552" className="text-sm sm:text-base hover:text-blue-600 transition-colors">04 268 6552</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-yellow-400 font-medium text-sm sm:text-base">Call Us Toll-Free</div>
                  <a href="tel:8006442" className="text-sm sm:text-base hover:text-blue-600 transition-colors">8006442</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-yellow-400 font-medium text-sm sm:text-base">WhatsApp</div>
                  <a href="https://wa.me/971505393004" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base hover:text-blue-600 transition-colors">0505393004</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-yellow-400 font-medium text-sm sm:text-base">E-Mail</div>
                  <a href="mailto:cleaningservice@abc.com" className="text-sm sm:text-base hover:text-blue-600 transition-colors">cleaningservice@abc.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-yellow-400 font-medium text-sm sm:text-base">Social Media</div>
                  <div className="flex flex-col gap-1 mt-1">
                    <a href="https://www.facebook.com/companyname" className="text-blue-600 hover:underline flex items-center gap-1 text-sm sm:text-base">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                      https://www.facebook.com/companyname
                    </a>
                    <a href="https://www.instagram.com/companyname" className="text-pink-600 hover:underline flex items-center gap-1 text-sm sm:text-base">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      https://www.instagram.com/companyname
                    </a>
                    <a href="https://www.linkedin.com/company/companyname" className="text-blue-800 hover:underline flex items-center gap-1 text-sm sm:text-base">
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

      {/* Map/Location Section */}
      <section className="w-full py-8 sm:py-12 px-2 sm:px-4 bg-white flex flex-col items-center border-t">
        <div className="max-w-4xl w-full flex flex-col items-center text-center mb-4 sm:mb-6">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">We're Just Around the Corner ;)</h2>
          </div>

          <a
            href="https://maps.google.com/?q=Abdullah+Bahar+Building,+Salahudin+Road,+Deira+Dubai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:text-blue-700 transition-colors text-xs sm:text-sm md:text-base"
          >
            <span>Office 201, M Floor, Gate No 1, Abdullah Bahar Building, Salahudin Road, Deira Dubai</span>
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
          </a>
        </div>

        <div className="rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg w-full max-w-4xl">
          <iframe
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=25.270660,55.321980&z=16&output=embed"
            title="Map showing our office location in Deira, Dubai"
          ></iframe>
        </div>
      </section>
      <div id="contact-footer">
        <Footer />
      </div>
    </div>
  );
}
