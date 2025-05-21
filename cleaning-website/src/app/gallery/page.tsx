"use client";
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import mouse from '@/public/images/services/mouse.png';
import { Hand, Phone, CreditCard, Check } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Gallery() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const images = [
    '/images/gallery/6.jpg',
    '/images/gallery/4.jpg',
    '/images/gallery/5.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="font-sans bg-white text-[#222] min-h-screen">
      {/* Container for seamless header and hero section */}
      <div className="w-full relative overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[750px] py-8 sm:py-10 md:py-12">
        {/* Faded background image for gallery */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/gallery/1.jpg"
            alt="Gallery Background"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        {/* Background image with fade */}
        <div className="absolute inset-0 flex w-full h-full z-2 bg-white">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/about/1.jpg"
              alt="Gallery Background"
              fill
              className="object-cover opacity-25"
              priority
            />
          </div>
        </div>

        {/* Overlay to further dim the background */}
        <div className="absolute inset-0 z-10 bg-white/80 pointer-events-none"></div>

        {/* Navbar/Header - seamless with homepage */}
        <header className="w-full absolute top-0 left-0 z-20">
          <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Image
                src="/images/home/topsection2.png"
                alt="Logo"
                width={60}
                height={36}
                className="rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
            </div>
            <nav className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-base font-medium">
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
              <div className="hidden md:block h-8 md:h-10 border-l border-black mx-4 md:mx-14"></div>
              <a
                href="tel:8006442"
                className="text-[#5BF014] font-bold text-xs sm:text-sm flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <span className="text-center">
                  Call Us Now - Toll Free<br />8006442
                </span>
              </a>
              <button className="md:hidden ml-4" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden bg-white shadow-lg px-4 py-6 flex flex-col gap-4 text-sm font-medium">
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
          )}
        </header>

        {/* Hero/Top Section Content */}
        <section className="w-full relative flex flex-col items-center justify-center min-h-[400px] pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-6 text-center">
            Our <span className="text-yellow-400">Company</span>
          </h1>
          <p className="max-w-4xl mx-auto text-gray-700 mb-8 sm:mb-10 text-base sm:text-lg md:text-xl lg:text-2xl text-center">
            At Cool Technical Services, we redefine the concept of cleanliness. With a focus on luxury and precision, our expert team transforms spaces into immaculate, elegant environments. Every service we offer is tailored to meet the highest standards of excellence, delivering results that speak for themselves.
          </p>
          {/* Image with cut corners below description */}
          <div className="flex justify-center my-6 sm:my-8 w-full max-w-5xl">
            <Image
              src="/images/about/3.jpg"
              alt="Cool Technical Services Cleaning"
              width={1329}
              height={581}
              className="object-cover w-full h-auto"
              style={{
                clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
              }}
            />
          </div>
        </section>
      </div>

      {/* About Us Section with faded background */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src="/images/about/4.png" alt="Decorative Background" fill className="object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center">About Us</h2>
          <p
            className="text-gray-800 leading-relaxed text-center mx-auto max-w-3xl text-sm sm:text-base"
            style={{ lineHeight: "1.8" }}
          >
            At Cool Technical Services, we're committed to making everyday spaces cleaner, healthier, and more livable.
            With a wide range of cleaning services designed for modern lifestyles, we serve homes, apartments, offices,
            retail spaces, and even post-construction sites across the UAE. Our highly trained team brings
            professionalism, efficiency, and a personal touch to every visit, using eco-friendly products and proven
            techniques to deliver consistently outstanding results. Whether you're booking us for a quick clean or ongoing
            support, we offer flexible service packages tailored to your needs — from hourly cleaning sessions to
            full-time, monthly arrangements. Choose from residential cleaning for villas and apartments, commercial
            services for offices and malls, or deep cleaning for an intensive refresh. Our packages are designed to fit
            your schedule: hourly slots (2, 4, or 8 hours), weekly care (2–6 days), or full-time monthly support with a
            dedicated maid. At [Company Name], cleaning isn't just our job — it's our promise to enhance your comfort and
            peace of mind. We pride ourselves on being a trusted partner in your daily life, ensuring your spaces are not
            only clean but cared for with intention and respect.
          </p>
        </div>
      </section>

      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src="/images/about/5.png" alt="Decorative Background" fill className="object-cover opacity-40" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center">How It Started</h2>
          <p
            className="text-gray-800 leading-relaxed text-center mx-auto max-w-3xl text-sm sm:text-base"
            style={{ lineHeight: "1.8" }}
          >
            Cool Technical Services began with one clear mission — to bring reliable, professional cleaning services to every corner of the UAE. It all started when our founder, [Founder's Name], noticed the struggle many residents faced in finding trustworthy cleaners who truly delivered on their promises. What began as a small operation with one maid and a few basic tools has grown into a leading cleaning company known for its flexible packages, trained staff, and commitment to quality. In the early days, we focused on hourly cleaning for residential clients, offering just a few services at a time. But as demand grew, so did our offerings — expanding into commercial spaces, post-renovation cleanups, and full-time maid support. We designed customizable packages like our popular 2-hour express cleans, 8-hour deep cleaning with cooking and ironing, and monthly plans with all-day coverage. Our reputation spread through word-of-mouth, backed by results that spoke for themselves. Today, we serve a wide range of clients across apartments, villas, offices, shops, and malls — all with the same level of care and reliability that started it all. From day one, our goal was never just to clean — but to make life easier, one space at a time.
          </p>
        </div>
      </section>

      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src="/images/about/12.jpg" alt="Geometric Background" fill className="object-cover opacity-10" />
        </div>

        {/* Left side cleaning tool image */}
        <div className="absolute left-0 bottom-0 z-10 hidden lg:block">
          <Image
            src="/images/about/6.png"
            alt="Cleaning Tool"
            width={400}
            height={400}
            className="object-contain w-[200px] sm:w-[300px] lg:w-[400px]"
          />
        </div>

        {/* Right side cleaner image */}
        <div className="absolute right-0 bottom-0 z-10 hidden lg:block">
          <Image
            src="/images/about/8.png"
            alt="Professional Cleaner"
            width={400}
            height={400}
            className="object-contain w-[200px] sm:w-[300px] lg:w-[400px]"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">How It Works</h2>
            <p className="max-w-3xl mx-auto text-gray-700 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
              odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm relative flex flex-col">
              <div className="flex items-center mb-4">
                <span className="text-amber-500 text-xl mr-2">👋</span>
                <h3 className="text-lg sm:text-xl font-semibold text-amber-500">Select a service</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.
              </p>
              <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
                <span className="text-amber-500 text-3xl">➝</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm relative flex flex-col">
              <div className="flex items-center mb-4">
                <span className="text-amber-500 text-xl mr-2">📞</span>
                <h3 className="text-lg sm:text-xl font-semibold text-amber-500">Make an appointment</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.
              </p>
              <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
                <span className="text-amber-500 text-3xl">➝</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm relative flex flex-col">
              <div className="flex items-center mb-4">
                <span className="text-amber-500 text-xl mr-2">💳</span>
                <h3 className="text-lg sm:text-xl font-semibold text-amber-500">Proceed with the payment</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <span className="text-amber-500 text-4xl sm:text-5xl">↩️</span>
          </div>

          <div className="max-w-md mx-auto bg-white p-6 rounded-lg border border-blue-200 shadow-sm flex items-center">
            <div className="hidden sm:block mr-4 flex-shrink-0">
              <Image
                src="/images/about/13.png"
                alt="Thumbs Up"
                width={100}
                height={100}
                className="object-contain w-[80px] sm:w-[100px] md:w-[120px]"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <span className="text-green-500 text-xl mr-2">✅</span>
                <h3 className="text-lg sm:text-xl font-semibold text-green-500">Get your work done!</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
                odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center mt-90 cursor-pointer" onClick={() => {
        const footer = document.getElementById('footer-gallery');
        if (footer) footer.scrollIntoView({ behavior: 'smooth' });
      }}>
        <span className="text-gray-500 text-sm mb-1">Scroll Down</span>
        <div className="w-8 h-8 flex items-center justify-center">
          <img src="/images/services/mouse.png" alt="mouse" />
        </div>
      </div>

      <div id="footer-gallery">
        <Footer />
      </div>
    </div>
  );
}