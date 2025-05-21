"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import mouse from '@/public/images/services/mouse.png';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

export default function Pricing() {
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
              src="/images/pricing/1.jpg"
              alt="Background"
              fill
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative flex-1 h-full">
            <Image
              src="/images/pricing/3.jpg"
              alt="Overlay 2"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="relative flex-1 h-full">
            <Image
              src="/images/pricing/4.jpg"
              alt="Overlay 3"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative flex-1 h-full">
            <Image
              src="/images/packages/3.jpg"
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
          <span className="text-black">Pricing</span>
            </h1>
            <p className="max-w-4xl mx-auto text-gray-700 mb-6 sm:mb-10 text-center text-base sm:text-lg md:text-xl lg:text-2xl px-4">
            Our pricing is designed with flexibility and transparency in mind. Whether you need a quick clean or full-time help, we offer affordable packages that fit your schedule and budget—without compromising on quality. Explore our rates and choose the plan that works best for your space.            </p>
            <div className="flex flex-col items-center mt-10 cursor-pointer">
              <span className="text-gray-500 text-sm mb-1">Scroll Down</span>
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/images/services/mouse.png" alt="mouse" />
              </div>
            </div>
          </section>
        </div>

      {/* Pricing Tables Section */}
      <section className="w-full py-12 px-4 bg-white border-b relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pricing/9.png"
            alt="Background Pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="text-yellow-400"
            >
              <path
                d="M6 18l6 6 14-14"
                stroke="#FEC00D"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="text-yellow-400">Elite</span> Cleaning, Clearly{" "}
              <span className="text-yellow-400">Priced</span> !
            </h2>
          </div>

          {/* For Homes */}
          <h3 className="text-lg font-bold flex items-center mb-4">
            <span className="text-blue-600 mr-2">▶</span> For{" "}
            <span className="text-yellow-400 ml-1">Homes</span> - 4 weeks service pack
          </h3>

          {/* Once in a week */}
          <div className="mb-8">
            <h4 className="text-center font-medium text-gray-700 mb-4">
              Once in a week - 4 times
            </h4>
            <div className="overflow-hidden rounded-xl shadow-md">
              <table className="w-full text-sm">
                <thead className="bg-yellow-50">
                  <tr>
                    <th className="p-3 text-left text-yellow-500">Rooms</th>
                    <th className="p-3 text-left text-yellow-500">Duration</th>
                    <th className="p-3 text-left text-yellow-500">Without Supplies</th>
                    <th className="p-3 text-left text-yellow-500">Regular Supplies</th>
                    <th className="p-3 text-left text-yellow-500">Eco Supplies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t bg-yellow-50/30">
                    <td className="p-3 font-medium">Studio</td>
                    <td className="p-3">2 Hrs</td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">440</span>{" "}
                      <span className="text-green-600 font-medium">418</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">520</span>{" "}
                      <span className="text-green-600 font-medium">494</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">600</span>{" "}
                      <span className="text-green-600 font-medium">570</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">1 Bedroom</td>
                    <td className="p-3">3 Hrs</td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">560</span>{" "}
                      <span className="text-green-600 font-medium">504</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">680</span>{" "}
                      <span className="text-green-600 font-medium">612</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">800</span>{" "}
                      <span className="text-green-600 font-medium">720</span>
                    </td>
                  </tr>
                  <tr className="border-t bg-yellow-50/30">
                    <td className="p-3 font-medium">2 Bedroom</td>
                    <td className="p-3">4 Hrs</td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">640</span>{" "}
                      <span className="text-green-600 font-medium">576</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">800</span>{" "}
                      <span className="text-green-600 font-medium">720</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">960</span>{" "}
                      <span className="text-green-600 font-medium">864</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">3 Bedroom</td>
                    <td className="p-3">5 Hrs</td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">800</span>{" "}
                      <span className="text-green-600 font-medium">720</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1000</span>{" "}
                      <span className="text-green-600 font-medium">900</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1200</span>{" "}
                      <span className="text-green-600 font-medium">1080</span>
                    </td>
                  </tr>
                  <tr className="border-t bg-yellow-50/30">
                    <td className="p-3 font-medium">4 Bedroom</td>
                    <td className="p-3">6 Hrs</td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">960</span>{" "}
                      <span className="text-green-600 font-medium">864</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1200</span>{" "}
                      <span className="text-green-600 font-medium">1080</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1440</span>{" "}
                      <span className="text-green-600 font-medium">1296</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Twice in a week */}
          <div className="mb-8">
            <h4 className="text-center font-medium text-gray-700 mb-4">
              Twice in a week - 8 times
            </h4>
            <div className="overflow-hidden rounded-xl shadow-md">
              <table className="w-full text-sm">
                <thead className="bg-yellow-50">
                  <tr>
                    <th className="p-3 text-left text-yellow-500">Rooms</th>
                    <th className="p-3 text-left text-yellow-500">Duration</th>
                    <th className="p-3 text-left text-yellow-500">Without Supplies</th>
                    <th className="p-3 text-left text-yellow-500">Regular Supplies</th>
                    <th className="p-3 text-left text-yellow-500">Eco Supplies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t bg-yellow-50/30">
                    <td className="p-3 font-medium">Studio</td>
                    <td className="p-3">2 Hrs</td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">880</span>{" "}
                      <span className="text-green-600 font-medium">836</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1040</span>{" "}
                      <span className="text-green-600 font-medium">988</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1200</span>{" "}
                      <span className="text-green-600 font-medium">1140</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">1 Bedroom</td>
                    <td className="p-3">3 Hrs</td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1120</span>{" "}
                      <span className="text-green-600 font-medium">1064</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1360</span>{" "}
                      <span className="text-green-600 font-medium">1224</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1600</span>{" "}
                      <span className="text-green-600 font-medium">1440</span>
                    </td>
                  </tr>
                  <tr className="border-t bg-yellow-50/30">
                    <td className="p-3 font-medium">2 Bedroom</td>
                    <td className="p-3">4 Hrs</td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1280</span>{" "}
                      <span className="text-green-600 font-medium">1152</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1600</span>{" "}
                      <span className="text-green-600 font-medium">1440</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1920</span>{" "}
                      <span className="text-green-600 font-medium">1728</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">3 Bedroom</td>
                    <td className="p-3">5 Hrs</td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1600</span>{" "}
                      <span className="text-green-600 font-medium">1440</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">2000</span>{" "}
                      <span className="text-green-600 font-medium">1800</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">2400</span>{" "}
                      <span className="text-green-600 font-medium">2160</span>
                    </td>
                  </tr>
                  <tr className="border-t bg-yellow-50/30">
                    <td className="p-3 font-medium">4 Bedroom</td>
                    <td className="p-3">6 Hrs</td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1920</span>{" "}
                      <span className="text-green-600 font-medium">1728</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">2400</span>{" "}
                      <span className="text-green-600 font-medium">2160</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">2880</span>{" "}
                      <span className="text-green-600 font-medium">2592</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Thrice in a week */}
          <div className="mb-8">
            <h4 className="text-center font-medium text-gray-700 mb-4">
              Thrice in a week - 8 times
            </h4>
            <div className="overflow-hidden rounded-xl shadow-md">
              <table className="w-full text-sm">
                <thead className="bg-yellow-50">
                  <tr>
                    <th className="p-3 text-left text-yellow-500">Rooms</th>
                    <th className="p-3 text-left text-yellow-500">Duration</th>
                    <th className="p-3 text-left text-yellow-500">Without Supplies</th>
                    <th className="p-3 text-left text-yellow-500">Regular Supplies</th>
                    <th className="p-3 text-left text-yellow-500">Eco Supplies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t bg-yellow-50/30">
                    <td className="p-3 font-medium">Studio</td>
                    <td className="p-3">2 Hrs</td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">880</span>{" "}
                      <span className="text-green-600 font-medium">836</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1040</span>{" "}
                      <span className="text-green-600 font-medium">988</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1200</span>{" "}
                      <span className="text-green-600 font-medium">1140</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">1 Bedroom</td>
                    <td className="p-3">3 Hrs</td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1120</span>{" "}
                      <span className="text-green-600 font-medium">1064</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1360</span>{" "}
                      <span className="text-green-600 font-medium">1224</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1600</span>{" "}
                      <span className="text-green-600 font-medium">1440</span>
                    </td>
                  </tr>
                  <tr className="border-t bg-yellow-50/30">
                    <td className="p-3 font-medium">2 Bedroom</td>
                    <td className="p-3">4 Hrs</td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1280</span>{" "}
                      <span className="text-green-600 font-medium">1152</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1600</span>{" "}
                      <span className="text-green-600 font-medium">1440</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1920</span>{" "}
                      <span className="text-green-600 font-medium">1728</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">3 Bedroom</td>
                    <td className="p-3">5 Hrs</td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1600</span>{" "}
                      <span className="text-green-600 font-medium">1440</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">2000</span>{" "}
                      <span className="text-green-600 font-medium">1800</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">2400</span>{" "}
                      <span className="text-green-600 font-medium">2160</span>
                    </td>
                  </tr>
                  <tr className="border-t bg-yellow-50/30">
                    <td className="p-3 font-medium">4 Bedroom</td>
                    <td className="p-3">6 Hrs</td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">1920</span>{" "}
                      <span className="text-green-600 font-medium">1728</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">2400</span>{" "}
                      <span className="text-green-600 font-medium">2160</span>
                    </td>
                    <td className="p-3">
                      AED <span className="line-through text-gray-500">2880</span>{" "}
                      <span className="text-green-600 font-medium">2592</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* For Apartments and Villas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-lg font-bold flex items-center mb-2">
                <span className="text-blue-600 mr-2">▶</span> For{" "}
                <span className="text-yellow-400 ml-1">Appartments</span>
              </h3>
              <p className="text-sm mb-4">25% off on your first booking</p>
              <div className="overflow-hidden rounded-xl shadow-md">
                <table className="w-full text-sm">
                  <thead className="bg-yellow-50">
                    <tr>
                      <th className="p-3 text-left text-yellow-500">Rooms</th>
                      <th className="p-3 text-left text-yellow-500">Eco Supplies</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t bg-yellow-50/30">
                      <td className="p-3 font-medium">Studio</td>
                      <td className="p-3">AED 399</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-medium">1 BHK</td>
                      <td className="p-3">AED 599</td>
                    </tr>
                    <tr className="border-t bg-yellow-50/30">
                      <td className="p-3 font-medium">2 BHK</td>
                      <td className="p-3">AED 799</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-medium">3 BHK</td>
                      <td className="p-3">AED 1199</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold flex items-center mb-2">
                <span className="text-blue-600 mr-2">▶</span> For{" "}
                <span className="text-yellow-400 ml-1">Villas</span>
              </h3>
              <p className="text-sm mb-4">25% off on your first booking</p>
              <div className="overflow-hidden rounded-xl shadow-md">
                <table className="w-full text-sm">
                  <thead className="bg-yellow-50">
                    <tr>
                      <th className="p-3 text-left text-yellow-500">Rooms</th>
                      <th className="p-3 text-left text-yellow-500">Eco Supplies</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t bg-yellow-50/30">
                      <td className="p-3 font-medium">1 BHK</td>
                      <td className="p-3">AED 799</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-medium">2 BHK</td>
                      <td className="p-3">AED 999</td>
                    </tr>
                    <tr className="border-t bg-yellow-50/30">
                      <td className="p-3 font-medium">3 BHK</td>
                      <td className="p-3">AED 1299</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-medium">4 BHK</td>
                      <td className="p-3">AED 1399</td>
                    </tr>
                    <tr className="border-t bg-yellow-50/30">
                      <td className="p-3 font-medium">5 BHK</td>
                      <td className="p-3">AED 1699</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button onClick={() => router.push('/contact')} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-8 rounded-md transition-all">
              Book Now
            </button>
          </div>
        </div>
      </section>
      <div id="footer-pricing">
        <Footer />
      </div>
    </div>
  );
}