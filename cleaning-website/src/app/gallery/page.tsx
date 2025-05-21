"use client";
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import mouse from '@/public/images/services/mouse.png';
import Footer from '@/components/Footer';

export default function Gallery() {
  const pathname = usePathname();
  const router = useRouter();


  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3
  const images = [
    '/images/gallery/6.jpg',
    '/images/gallery/4.jpg',
    '/images/gallery/5.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }


  return (
    <div className="font-sans bg-white text-[#222]">
      {/* Container for seamless header and hero section */}
      <div className="w-full relative overflow-hidden min-h-[600px] sm:min-h-[700px] md:min-h-[750px] py-8 sm:py-12">
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
            src="/images/gallery/1.jpg"
            alt="Gallery Background"
            fill
            className="object-cover opacity-25"
            priority
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
          <span className="text-black">Take a look !</span>
            </h1>
            <p className="max-w-4xl mx-auto text-gray-700 mb-6 sm:mb-10 text-center text-base sm:text-lg md:text-xl lg:text-2xl px-4">
            Discover a curated showcase of elegance and excellence. From our refined team of professionals to the immaculate spaces we've transformed, this gallery reflects our premium approach to cleaning. Each image captures sophistication, precision, and an unwavering commitment to exceptional service. With every clean, we elevate your space to new levels of luxury and comfort.    </p>
            <div className="flex flex-col items-center mt-10 cursor-pointer" onClick={() => {
              const footer = document.getElementById('footer-gallery');
              if (footer) footer.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span className="text-gray-500 text-sm mb-1">Scroll Down</span>
              <div className="w-8 h-8 flex items-center justify-center">
              <img src="/images/services/mouse.png" alt="mouse" />
              </div>
            </div>
          </section>
        </div>

        {/* Horizontal line after hero section */}
        <div className="w-full border-t border-gray-200 my-8"></div>

        <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our elite team of professionals is hand-selected for their experience, discretion, and attention to detail.
            With refined training and a commitment to excellence, they elevate your space to luxury standards with every
            visit — efficiently and seamlessly.
          </p>
        </div>

        {/* Carousel with side images visible */}
        <div className="relative flex items-center justify-center h-[400px] md:h-[450px] overflow-visible">
          {/* Previous Slide (peek) */}
          <div className="hidden md:block relative h-[70%] w-[20%] z-0 opacity-60 scale-90 blur-[1px] transition-all duration-500">
            <Image
              src={images[(currentSlide + totalSlides - 1) % totalSlides]}
              alt="Previous team slide"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {/* Main Slide */}
          <div className="relative h-full w-[80vw] max-w-2xl z-10 shadow-xl rounded-lg overflow-hidden transition-all duration-500">
            <Image
              src={images[currentSlide]}
              alt="Current team slide"
              fill
              className="object-cover"
            />
          </div>
          {/* Next Slide (peek) */}
          <div className="hidden md:block relative h-[70%] w-[20%] z-0 opacity-60 scale-90 blur-[1px] transition-all duration-500">
            <Image
              src={images[(currentSlide + 1) % totalSlides]}
              alt="Next team slide"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
        {/* Indicator dots */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 mx-1 rounded-full ${currentSlide === index ? "bg-blue-500" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>

    {/* Horizontal line after Our Team section */}
    <div className="w-full border-t border-gray-200 my-8"></div>

      {/* work2 */  }
      <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">A Glimpse of our work :)</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
          Check out some of our favorite moments in action! From cozy apartments to big office spaces, we've helped brighten up every kind of place. These snapshots show the love and detail we put into every clean, big or small.
          </p>
        </div>

        {/* Carousel with side images visible */}
        {(() => {
          const workImages = [
            '/images/gallery/9.png',
            '/images/gallery/2.jpg',
            '/images/gallery/10.png',
          ];
          return (
            <div className="relative flex items-center justify-center h-[400px] md:h-[450px] overflow-visible">
              {/* Previous Slide (peek) */}
              <div className="hidden md:block relative h-[70%] w-[20%] z-0 opacity-60 scale-90 blur-[1px] transition-all duration-500">
                <Image
                  src={workImages[(currentSlide + totalSlides - 1) % totalSlides]}
                  alt="Previous work slide"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              {/* Main Slide */}
              <div className="relative h-full w-[80vw] max-w-2xl z-10 shadow-xl rounded-lg overflow-hidden transition-all duration-500">
                <Image
                  src={workImages[currentSlide]}
                  alt="Current work slide"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              {/* Next Slide (peek) */}
              <div className="hidden md:block relative h-[70%] w-[20%] z-0 opacity-60 scale-90 blur-[1px] transition-all duration-500">
                <Image
                  src={workImages[(currentSlide + 1) % totalSlides]}
                  alt="Next work slide"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>
            </div>
          );
        })()}
        {/* Indicator dots */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 mx-1 rounded-full ${currentSlide === index ? "bg-blue-500" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>

    {/* Video Gallery Section */}
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Watch Our Work in Action</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Experience our cleaning expertise through these videos. See how our team transforms spaces with precision and care.
          </p>
        </div>

        {/* Video Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Video 1 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <video
              className="w-full h-[400px] object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/vids/1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-semibold text-xl mb-3">Professional Cleaning Process</h3>
              <p className="text-white/80 text-base">Watch our expert team in action as they deliver exceptional cleaning services.</p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <video
              className="w-full h-[400px] object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/vids/2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-semibold text-xl mb-3">Deep Cleaning Excellence</h3>
              <p className="text-white/80 text-base">Experience our thorough deep cleaning process that leaves no corner untouched.</p>
            </div>
          </div>

          {/* Video 3 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <video
              className="w-full h-[400px] object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/vids/3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-semibold text-xl mb-3">Commercial Cleaning Service</h3>
              <p className="text-white/80 text-base">See how we maintain pristine commercial spaces with our professional cleaning solutions.</p>
            </div>
          </div>
        </div>

        {/* Video Controls Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-base">
            <span className="inline-flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Videos autoplay muted. Click to enable sound.
            </span>
          </p>
        </div>
      </div>
    </section>

       {/* Buttons */}

       {/* Footer */}
       <div id="footer-gallery">
         <Footer />
       </div>
    </div>

  );
}
