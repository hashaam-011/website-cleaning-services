"use client";

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import mouse from '@/public/images/services/mouse.png';
import Footer from '@/components/Footer';

export default function Services() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="font-sans bg-white text-[#222]">
      {/* Container for seamless header and hero section */}
      <div className="w-full relative overflow-hidden min-h-[600px] sm:min-h-[700px] md:min-h-[750px] py-8 sm:py-12">
        {/* Background image with fade */}
        <div className="absolute inset-0 flex w-full h-full z-0 bg-white">
          <div className="relative  h-full">
            <Image
              src="/images/services/1.jpg"
              alt="Background"
              fill
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative flex-1 h-full">
            <Image
              src="/images/services/2.jpg"
              alt="Overlay 2"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="relative flex-1 h-full">
            <Image
              src="/images/services/3.jpg"
              alt="Overlay 3"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative flex-1 h-full">
            <Image
              src="/images/services/4.jpg"
              alt="Overlay 4"
              fill
              className="object-cover opacity-30"
            />
          </div>
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
        <section className="w-full relative flex flex-col items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] pt-32 sm:pt-40 pb-12 sm:pb-20 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold mb-4 sm:mb-6 text-center">
            <span className="text-black">Our <span className="text-yellow-400">Services</span></span>
          </h1>
          <p className="max-w-4xl mx-auto text-gray-700 mb-6 sm:mb-10 text-center text-base sm:text-lg md:text-xl lg:text-2xl px-4">
            Discover a range of premium cleaning services designed to suit your space, schedule, and lifestyle. Whether it's residential care, commercial upkeep, or deep cleaning, each service is delivered with unmatched attention to detail and professionalism. Our expertly trained staff, eco-conscious products, and customized plans ensure your environment is not just clean—but flawlessly maintained.
          </p>
          <div className="flex flex-col items-center mt-10 cursor-pointer" onClick={() => {
            const footer = document.getElementById('footer-services');
            if (footer) footer.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span className="text-gray-500 text-sm mb-1">Scroll Down</span>
            <img src="/images/services/mouse.png" alt="mouse" className="w-8 h-8" />
          </div>
        </section>
      </div>


<section className="w-full min-h-[900px] py-20 px-2 sm:px-4 bg-white border-b relative overflow-hidden">
  {/* Background image with fade */}
  <div className="absolute inset-0 flex w-full h-full z-0 bg-white">
    <div className="relative flex-1 h-full">
      <Image src="/images/services/5.png" alt="Background" fill className="object-cover opacity-50" />
    </div>
    <div className="relative flex-1 h-full">
      <Image src="/images/services/6.png" alt="Background" fill className="object-cover opacity-50" />
    </div>
    <div className="relative flex-1 h-full">
      <Image src="/images/services/7.png" alt="Background" fill className="object-cover opacity-50" />
    </div>
    <div className="relative flex-1 h-full">
      <Image src="/images/services/8.png" alt="Background" fill className="object-cover opacity-50" />
    </div>
  </div>

  {/* Section Title */}
  <div className="relative z-10 flex items-center justify-center mb-12">
    <div className="flex items-center gap-3">
      <Image src="/images/services/brush.svg" alt="Brush Icon" width={40} height={40} />
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="text-black">Tailored Cleaning Solutions for Every Space !</span>
      </h2>
    </div>
  </div>

  {/* Cleaning Services Grid */}
  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white/90 rounded-lg p-6 border border-gray-200 h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-amber-500">Residential Cleaning</h3>
          <p className="text-gray-500 text-sm">(Homes, Apartments, Villas)</p>
        </div>
        <ul className="space-y-4 flex-grow">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">General dusting and vacuuming of all rooms.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Bathroom and kitchen sanitation.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Floor mopping and surface cleaning.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Dishwashing and light laundry.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Bed-making and minor organization</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Eco-friendly cleaning products available on request.</span>
          </li>
        </ul>
      </div>
      <div className="bg-white/90 rounded-lg p-6 border border-gray-200 h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-amber-500">Commercial Cleaning</h3>
          <p className="text-gray-500 text-sm">(Offices, Shops, Malls)</p>
        </div>
        <ul className="space-y-4 flex-grow">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Workspace sanitation and desk cleaning.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Floor sweeping, mopping, and vacuuming.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Restroom deep cleaning and supply replenishment.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Window and glass surface cleaning.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Trash collection and disposal.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Flexible after-hours service to avoid disruption.</span>
          </li>
        </ul>
      </div>
      <div className="bg-white/90 rounded-lg p-6 border border-gray-200 h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-amber-500">Deep Cleaning</h3>
          <p className="text-gray-500 text-sm">(Deep & Post-Reno Cleaning)</p>
        </div>
        <ul className="space-y-4 flex-grow">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Complete dust and debris removal from all surfaces.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Deep scrubbing of kitchens, bathrooms, and floors.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Stain, grease, and adhesive residue elimination.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Furniture, upholstery, and fixture cleaning.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Disposal of renovation waste and materials.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Final detailing for a spotless, move-in ready space.</span>
          </li>
        </ul>
      </div>
      <div className="bg-white/90 rounded-lg p-6 border border-gray-200 h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-amber-500">Furniture Cleaning</h3>
          <p className="text-gray-500 text-sm">(Fresh & Clean Upholstery)</p>
        </div>
        <ul className="space-y-4 flex-grow">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Sofas & Chairs – Fabric or leather deep cleaning.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Dining Chairs – Quick spot and seat refresh.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Mattresses – Dust, odor, and stain removal.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Office Chairs – Seat and back cleaning.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Headboards – Light fabric cleaning.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Ottomans – Surface vacuum and wipe-down.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1 flex-shrink-0">▶</span>
            <span className="text-gray-700">Cushions & Pillows – Fluff and freshen up.</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap gap-4 justify-center mt-8">

    <button onClick={() => router.push('/contact')} className="bg-white text-blue-700 px-6 py-2 rounded font-semibold hover:bg-blue-50 transition border border-blue-400 flex items-center">
        Book Now
        <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
      </button>

  <button onClick={() => router.push('/packages')} className="bg-white text-amber-500 px-6 py-2.5 rounded-md font-medium hover:bg-amber-50 transition border border-amber-300 flex items-center justify-between min-w-[180px]">
    <span>See Packages</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </button>


      <button onClick={() => router.push('/pricing')} className="bg-white text-amber-500 px-6 py-2.5 rounded-md font-medium hover:bg-amber-50 transition border border-amber-300 flex items-center justify-between min-w-[180px]">
    <span>See Pricing</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </button>

    </div>
  </div>
</section>

<div id="footer-services">
  <Footer />
</div>
    </div>
  );
}