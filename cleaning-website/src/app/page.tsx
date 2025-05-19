"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="font-sans bg-white text-[#222]">
      {/* Container for seamless header and hero section */}
      <div className="w-full relative overflow-hidden min-h-[600px] sm:min-h-[700px] md:min-h-[750px] py-8 sm:py-12">
        {/* Background image with fade */}
        <div className="absolute inset-0 w-full h-full z-0 bg-white">
          <Image
            src="/images/home/topsection.jpg"
            alt="Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          {/* Gradient Overlay - Light to Yellow/Image */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#FEC00D] to-transparent"></div>
        </div>

        <Navigation />

        {/* Hero/Top Section Content */}
        <section className="w-full relative flex items-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row relative px-4">
            {/* Left content area */}
            <div className="w-full md:w-2/3 py-8 sm:py-12 md:py-16 pr-0 md:pr-8 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#222]">
                Cool Technical Services
              </h1>
              <p className="text-sm sm:text-base mb-6 sm:mb-8 text-[#222]">
                At Cool Technical Services, we understand that a clean space is
                essential to your comfort and well-being. With our team of highly
                trained professionals, we deliver premium cleaning services that go
                beyond expectations. Whether you need a one-time deep clean or a
                regular maintenance plan, we offer tailored solutions to fit your
                needs. Our commitment to using eco-friendly products ensures that
                every clean is as sustainable as it is thorough. Let us bring a touch
                of luxury to your space with our meticulous attention to detail,
                punctuality, and unmatched customer care.
              </p>
            </div>

            <div className="flex justify-center items-end mt-8 md:mt-0">
              {/* Left worker (mirrored) */}
              <Image
                src="/images/home/topsection4.png"
                alt="Worker 2"
                width={500}
                height={2000}
                className="object-contain scale-x-[-1] relative z-10 -mr-48 sm:-mr-72 md:-mr-96 hidden sm:block"
              />

              {/* Center worker */}
              <Image
                src="/images/home/topsection3.png"
                alt="Worker 1"
                width={600}
                height={2200}
                className="object-contain relative z-20 w-[300px] sm:w-[400px] md:w-[600px]"
              />

              {/* Right worker */}
              <Image
                src="/images/home/topsection5.png"
                alt="Worker 3"
                width={500}
                height={2000}
                className="object-contain relative z-10 -ml-48 sm:-ml-72 md:-ml-96 hidden sm:block"
              />
            </div>
          </div>
        </section>
      </div>

      {/* What we're offering section */}
      <div className="w-full relative flex flex-col items-center min-h-[600px] sm:min-h-[700px] py-8 sm:py-12 overflow-x-hidden bg-white">
        {/* Dotted SVG background pattern */}
        <svg className="absolute inset-0 w-full h-full z-0" style={{pointerEvents: 'none'}} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#E5E7EB" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Heading */}
        <div className="relative z-10 flex flex-col items-center w-full mb-8 sm:mb-10">
          <h2 className="flex items-center justify-center gap-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-black text-center mb-2">
            What we're offering
            <svg width="140" height="28" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 sm:w-32 md:w-40">
              <line x1="0" y1="14" x2="130" y2="14" stroke="#FEC00D" strokeWidth="3" strokeLinecap="round" />
              <polygon points="130,7 140,14 130,21" fill="#FEC00D" />
            </svg>
          </h2>
        </div>

        {/* Cards flow layout with SVG arrows */}
        <div className="relative z-10 w-full max-w-6xl mx-auto min-h-[520px] flex flex-col items-center">
          {/* Arrow 1: Card 1 to Card 2 (right edge to left edge) */}
          <svg className="absolute left-[4%] top-[80px] hidden lg:block" width="880" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="80" r="4" fill="#7C  FF6B"/>
            <path d="M4 40 Q180 1 200 78" stroke="#B6FFB0" strokeWidth="2" fill="none" markerEnd="url(#arrowhead1)"/>
            <defs><marker id="arrowhead1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L8,4 L0,8 L2,4 L0,0" fill="#B6FFB0"/></marker></defs>
          </svg>
          {/* Arrow 2: Card 2 to Card 3 (bottom of Card 2 to top of Card 3) */}
          <svg className="absolute left-[44%] top-[300px] hidden lg:block" width="300" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="0" r="4" fill="#7CFF6B"/>
            <path d="M4 40 Q180 119 300 10" stroke="#B6FFB0" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)"/>
            <defs><marker id="arrowhead2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L8,4 L0,8 L2,4 L0,0" fill="#B6FFB0"/></marker></defs>
          </svg>
          {/* Arrow 3: Card 3 to Card 4 (right edge to left edge) */}
          <svg className="absolute left-[78%] top-[80px] hidden lg:block" width="340" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="40" r="4" fill="#7CFF6B"/>
            <path d="M4 40 Q180 1 200 78" stroke="#B6FFB0" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)"/>
            <defs><marker id="arrowhead3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L8,4 L0,8 L2,4 L0,0" fill="#B6FFB0"/></marker></defs>
          </svg>
          {/* Cards container with staggered layout */}
          <div className="w-full h-[420px] relative">
            {/* Card 1 */}
            <div className="absolute left-[-22%] top-0 w-[300px] h-[300px]">
              <div className="relative rounded-[24px] shadow-lg p-8 flex flex-col justify-between w-full h-full border border-gray-100 overflow-hidden bg-white" style={{backgroundImage: "url('/images/home/secondsection.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-white opacity-80 pointer-events-none rounded-[24px]" style={{zIndex: 1}} />
                {/* Icon top-left (solid house) */}
                <div className="absolute top-6 left-6 z-10">
                  <svg width="36" height="36" fill="#FEC00D" viewBox="0 0 24 24"><path d="M3 12l9-9 9 9v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4h-4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                </div>
                {/* Number badge top-right (quarter circle) */}
                <div className="absolute -top-4 right-0 z-10">
                  <div className="w-16 h-16 bg-[#FEC00D] rounded-br-[64px] flex items-end justify-end">
                    <span className="text-white font-bold text-lg mr-3 mb-2">01</span>
                  </div>
                </div>
                <div className="relative z-10 mt-12 flex-1 flex flex-col">
                  <h3 className="font-semibold text-xl mb-1">Residential Cleaning</h3>
                  <ul className="text-base text-gray-700 mb-2 list-disc pl-4">
                    <li>Homes</li>
                    <li>Apartments</li>
                    <li>Villas</li>
                  </ul>
                  <div className="mt-auto flex justify-end">
                    <a href="#" className="text-blue-600 text-base font-medium hover:underline flex items-center gap-1">Learn More <svg width="16" height="16" fill="#146EB4" viewBox="0 0 24 24"><polygon points="9,6 18,12 9,18" /></svg></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="absolute left-[18%] top-[170px] w-[300px] h-[300px]">
              <div className="relative rounded-[24px] shadow-lg p-8 flex flex-col justify-between w-full h-full border border-gray-100 overflow-hidden bg-white" style={{backgroundImage: "url('/images/home/secondsection.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-white opacity-80 pointer-events-none rounded-[24px]" style={{zIndex: 1}} />
                {/* Icon top-left (solid menu) */}
                <div className="absolute top-6 left-6 z-10">
                  <svg width="36" height="36" fill="#FEC00D" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="2" rx="1"/><rect x="3" y="11" width="18" height="2" rx="1"/><rect x="3" y="16" width="18" height="2" rx="1"/></svg>
                </div>
                {/* Number badge top-right (quarter circle) */}
                <div className="absolute -top-4 right-0 z-10">
                  <div className="w-16 h-16 bg-[#FEC00D] rounded-br-[64px] flex items-end justify-end">
                    <span className="text-white font-bold text-lg mr-3 mb-2">02</span>
                  </div>
                </div>
                <div className="relative z-10 mt-12 flex-1 flex flex-col">
                  <h3 className="font-semibold text-xl mb-1">Commercial Cleaning</h3>
                  <ul className="text-base text-gray-700 mb-2 list-disc pl-4">
                    <li>Offices</li>
                    <li>Shops</li>
                    <li>Malls</li>
                  </ul>
                  <div className="mt-auto flex justify-end">
                    <a href="#" className="text-blue-600 text-base font-medium hover:underline flex items-center gap-1">Learn More <svg width="16" height="16" fill="#146EB4" viewBox="0 0 24 24"><polygon points="9,6 18,12 9,18" /></svg></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="absolute left-[52%] top-0 w-[300px] h-[300px]">
              <div className="relative rounded-[24px] shadow-lg p-8 flex flex-col justify-between w-full h-full border border-gray-100 overflow-hidden bg-white" style={{backgroundImage: "url('/images/home/secondsection.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-white opacity-80 pointer-events-none rounded-[24px]" style={{zIndex: 1}} />
                {/* Icon top-left (paint brush outline) */}
                <div className="absolute top-6 left-6 z-10">
                <svg width="36" height="36" fill="none" stroke="#FEC00D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
  <path d="M3 17v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2"/>
  <path d="M7 15v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8"/>
  <path d="M13 15l2-6h2l-2 6"/>
</svg>
                </div>
                {/* Number badge top-right (quarter circle) */}
                <div className="absolute -top-4 right-0 z-10">
                  <div className="w-16 h-16 bg-[#FEC00D] rounded-br-[64px] flex items-end justify-end">
                    <span className="text-white font-bold text-lg mr-3 mb-2">03</span>
                  </div>
                </div>
                <div className="relative z-10 mt-12 flex-1 flex flex-col">
                  <h3 className="font-semibold text-xl mb-1">Deep Cleaning</h3>
                  <ul className="text-base text-gray-700 mb-2 list-disc pl-4">
                    <li>Intense full-space cleaning.</li>
                  </ul>
                  <div className="mt-auto flex justify-end">
                    <a href="#" className="text-blue-600 text-base font-medium hover:underline flex items-center gap-1">Learn More <svg width="16" height="16" fill="#146EB4" viewBox="0 0 24 24"><polygon points="9,6 18,12 9,18" /></svg></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="absolute left-[88%] top-[170px] w-[300px] h-[300px]">
              <div className="relative rounded-[24px] shadow-lg p-8 flex flex-col justify-between w-full h-full border border-gray-100 overflow-hidden bg-white" style={{backgroundImage: "url('/images/home/secondsection.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-white opacity-80 pointer-events-none rounded-[24px]" style={{zIndex: 1}} />
                {/* Icon top-left (solid tools) */}
                <div className="absolute top-6 left-6 z-10">
                  <svg width="36" height="36" fill="#FEC00D" viewBox="0 0 24 24"><path d="M21.7 20.3a1 1 0 0 1-1.4 0l-2.1-2.1a1 1 0 0 1 0-1.4l.3-.3-2.8-2.8a5.5 5.5 0 0 1-6.7-7.9l2.1 2.1a1 1 0 0 0 1.4-1.4L7.2 4.7a1 1 0 0 1 1.4-1.4l2.1 2.1a1 1 0 0 1 0 1.4l-.3.3 2.8 2.8a5.5 5.5 0 0 1 6.7 7.9l-2.1-2.1a1 1 0 0 0-1.4 1.4l2.1 2.1a1 1 0 0 1 0 1.4z"/></svg>
                </div>
                {/* Number badge top-right (quarter circle) */}
                <div className="absolute -top-4 right-0 z-10">
                  <div className="w-16 h-16 bg-[#FEC00D] rounded-br-[64px] flex items-end justify-end">
                    <span className="text-white font-bold text-lg mr-3 mb-2">04</span>
                  </div>
                </div>
                <div className="relative z-10 mt-12 flex-1 flex flex-col">
                  <h3 className="font-semibold text-xl mb-1">Post-Construction Cleaning</h3>
                  <ul className="text-base text-gray-700 mb-2 list-disc pl-4">
                    <li>After renovation or construction.</li>
                  </ul>
                  <div className="mt-auto flex justify-end">
                    <a href="#" className="text-blue-600 text-base font-medium hover:underline flex items-center gap-1">Learn More <svg width="16" height="16" fill="#146EB4" viewBox="0 0 24 24"><polygon points="9,6 18,12 9,18" /></svg></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* See All Button */}
        <div className="relative z-10 flex justify-center mt-16">
          <button
            className="relative flex items-center w-[120px] h-[44px] rounded-[8px] shadow-md overflow-hidden border-none p-0 cursor-pointer"
            style={{ boxShadow: '0 2px 8px 0 rgba(20, 110, 180, 0.10)' }}
            type="button"
            onClick={() => (window.location.href = '/services')}
          >
            {/* Blue diagonal left side */}
            <span
              className="absolute left-0 top-0 h-full w-[75%] flex items-center pl-5 text-white font-bold text-sm"
              style={{
                background: '#146EB4',
                clipPath: 'polygon(0 0, 95% 0, 80% 100%, 0% 100%)',
                zIndex: 1,
              }}
            >
              See All
            </span>
            {/* White diagonal right side with blue arrow */}
            <span
              className="absolute right-0 top-0 h-full w-[40%] flex items-center justify-center"
              style={{
                background: '#ffffff',
                clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
                zIndex: 2,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#146EB4" xmlns="http://www.w3.org/2000/svg">
                <polygon points="9,6 18,12 9,18" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Testimonials Section - New Design */}
      <section className="w-full relative flex flex-col items-center min-h-[700px] py-16 bg-white overflow-x-hidden">
        {/* Dotted Diagonal Background */}
        <svg className="absolute inset-0 w-full h-full z-0" style={{pointerEvents: 'none'}} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-diag" x="0" y="0" width="24" height="24" patternTransform="rotate(30)" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#E5E7EB" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-diag)" />
        </svg>
        {/* Large Yellow Quote Icon */}
        <div className="absolute left-4 top-4 z-10 flex flex-row items-start gap-4">
          {/* Filled double quotation marks, much bigger and spaced */}
          <svg width="120" height="120" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55 20c-6 0-10 4-10 10v10c0 6 4 10 10 10h5l-2-5c-2 0-3-2-3-5v-5h5V20h-5z" fill="#FEC00D"/>
          </svg>
          <svg width="120" height="120" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: 'scaleX(-1)'}}>
            <path d="M55 20c-6 0-10 4-10 10v10c0 6 4 10 10 10h5l-2-5c-2 0-3-2-3-5v-5h5V20h-5z" fill="#FEC00D"/>
          </svg>
        </div>

        {/* Girl image (third2.png) - left, big, overlapping cards */}
        <div className="absolute left-0 bottom-0 z-10" style={{width: '320px', height: 'auto'}}>
          <Image
            src="/images/home/third2.png"
            alt="Decorative Girl"
            width={420}
            height={640}
            className="object-contain"
          />
        </div>
        {/* Boy image (third.png) - right, big, overlapping cards */}
        <div className="absolute right-0 bottom-0 z-10" style={{width: '320px', height: 'auto'}}>
          <Image
            src="/images/home/third.png"
            alt="Decorative Boy"
            width={420}
            height={640}
            className="object-contain"
          />
          </div>

        {/* Heading */}
        <div className="relative z-10 flex flex-col items-center w-full mb-10 mt-4">
          <div className="flex items-center gap-2 mb-2">
            {/* Chat bubble with quotes icon */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="6" width="24" height="16" rx="4" fill="#fff" stroke="#FEC00D" strokeWidth="2"/>
              <path d="M16 22v4l4-4h-4z" fill="#FEC00D"/>
              <text x="10" y="18" fontSize="10" fontWeight="bold" fill="#FEC00D">“”</text>
            </svg>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center">Testimonials</h2>
          </div>
        </div>
        {/* Testimonial Cards Row */}
        <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 px-4">
          {/* Card 1 */}
          <div className="relative">
            <div className="bg-white shadow-lg p-4 flex flex-col gap-2 border border-gray-100 rounded-tl-2xl rounded-br-2xl" style={{ boxShadow: '0 4px 20px 0 rgba(0,0,0,0.10)' }}>
              <div className="text-yellow-400 text-lg mb-0.5">
                <svg width="20" height="16" fill="none" viewBox="0 0 36 26"><path d="M10 14h4v-4a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v4a8 8 0 0 0 8 8v-4a4 4 0 0 1-4-4v-4zm16 0h4v-4a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v4a8 8 0 0 0 8 8v-4a4 4 0 0 1-4-4v-4z" fill="#FEC00D"/></svg>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "The team at Cool Technical Services exceeded our expectations. Their attention to detail and professionalism made our office sparkle. Highly recommended!"
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <img src="/images/home/img4.png" alt="Sarah Johnson" className="w-6 h-6 rounded-full border-2 border-blue-100" />
                <div>
                  <div className="font-semibold text-[#2196F3] text-xs">Sarah Johnson</div>
                  <div className="text-gray-400 text-[10px]">Office Manager</div>
                </div>
              </div>
              <div className="flex items-center gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" fill="#FEC00D" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36"/></svg>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-20 h-20">

            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg p-4 flex flex-col gap-2 border border-gray-100 rounded-tr-2xl rounded-bl-2xl" style={{ boxShadow: '0 4px 20px 0 rgba(0,0,0,0.10)' }}>
            <div className="text-yellow-400 text-lg mb-0.5">
              <svg width="20" height="16" fill="none" viewBox="0 0 36 26"><path d="M10 14h4v-4a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v4a8 8 0 0 0 8 8v-4a4 4 0 0 1-4-4v-4zm16 0h4v-4a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v4a8 8 0 0 0 8 8v-4a4 4 0 0 1-4-4v-4z" fill="#FEC00D"/></svg>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              "Their deep cleaning service transformed our home. The team was thorough, efficient, and left everything spotless. Will definitely use their services again!"
            </p>
            <div className="flex items-center gap-2 mt-0.5">
              <img src="/images/home/img3.png" alt="Michael Chen" className="w-6 h-6 rounded-full border-2 border-blue-100" />
              <div>
                <div className="font-semibold text-[#2196F3] text-xs">Michael Chen</div>
                <div className="text-gray-400 text-[10px]">Homeowner</div>
              </div>
            </div>
            <div className="flex items-center gap-0.5 mt-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="12" height="12" fill="#FEC00D" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36"/></svg>
              ))}
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg p-4 flex flex-col gap-2 border border-gray-100 rounded-tl-2xl rounded-br-2xl" style={{ boxShadow: '0 4px 20px 0 rgba(0,0,0,0.10)' }}>
            <div className="text-yellow-400 text-lg mb-0.5">
              <svg width="20" height="16" fill="none" viewBox="0 0 36 26"><path d="M10 14h4v-4a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v4a8 8 0 0 0 8 8v-4a4 4 0 0 1-4-4v-4zm16 0h4v-4a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v4a8 8 0 0 0 8 8v-4a4 4 0 0 1-4-4v-4z" fill="#FEC00D"/></svg>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              "The post-construction cleaning was outstanding. They removed all dust and debris, leaving our newly renovated space immaculate. Professional and reliable!"
            </p>
            <div className="flex items-center gap-2 mt-0.5">
              <img src="/images/home/img2.png" alt="Emma Rodriguez" className="w-6 h-6 rounded-full border-2 border-blue-100" />
              <div>
                <div className="font-semibold text-[#2196F3] text-xs">Emma Rodriguez</div>
                <div className="text-gray-400 text-[10px]">Property Developer</div>
              </div>
            </div>
            <div className="flex items-center gap-0.5 mt-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="12" height="12" fill="#FEC00D" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36"/></svg>
              ))}
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative">
            <div className="bg-white shadow-lg p-4 flex flex-col gap-2 border border-gray-100 rounded-tr-2xl rounded-bl-2xl" style={{ boxShadow: '0 4px 20px 0 rgba(0,0,0,0.10)' }}>
              <div className="text-yellow-400 text-lg mb-0.5">
                <svg width="20" height="16" fill="none" viewBox="0 0 36 26"><path d="M10 14h4v-4a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v4a8 8 0 0 0 8 8v-4a4 4 0 0 1-4-4v-4zm16 0h4v-4a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v4a8 8 0 0 0 8 8v-4a4 4 0 0 1-4-4v-4z" fill="#FEC00D"/></svg>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "Regular commercial cleaning service has been a game-changer for our business. Consistent quality and excellent customer service. Highly recommended!"
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <img src="/images/home/img1.png" alt="David Wilson" className="w-6 h-6 rounded-full border-2 border-blue-100" />
                <div>
                  <div className="font-semibold text-[#2196F3] text-xs">David Wilson</div>
                  <div className="text-gray-400 text-[10px]">Business Owner</div>
                </div>
              </div>
              <div className="flex items-center gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" fill="#FEC00D" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36"/></svg>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-30 h-10">

            </div>
          </div>
        </div>
        {/* Feedback Link */}
        <div className="relative z-10 flex justify-center mt-16">
          <a href="#" className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">Submit your feedback <svg width="16" height="16" fill="#146EB4" viewBox="0 0 24 24"><polygon points="9,6 18,12 9,18" /></svg></a>
        </div>
      </section>

      {/* Video section */}
      <section className="w-full py-8 sm:py-12 px-4 bg-white">
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/vids/1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Thumbnails */}
          <div className="flex justify-center gap-4 mt-4 sm:mt-6">
            <button
              className="w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-400 transition-all"
              onClick={() => {
                const video = document.querySelector('video');
                if (video) {
                  video.src = '/vids/1.mp4';
                  video.play();
                }
              }}
            >
              <video
                className="w-full h-full object-cover"
                src="/vids/1.mp4"
                muted
              />
            </button>
            <button
              className="w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-400 transition-all"
              onClick={() => {
                const video = document.querySelector('video');
                if (video) {
                  video.src = '/vids/2.mp4';
                  video.play();
                }
              }}
            >
              <video
                className="w-full h-full object-cover"
                src="/vids/2.mp4"
                muted
              />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
