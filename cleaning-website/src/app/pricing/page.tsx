import Image from 'next/image';

export default function Pricing() {
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
            <a href="/services" className="text-[#222] hover:text-yellow-500">Services</a>
            <a href="/packages" className="text-[#222] hover:text-yellow-500">Packages</a>
            <a href="/pricing" className="text-[#222] hover:text-yellow-500 font-bold underline">Pricing</a>
            <a href="/gallery" className="text-[#222] hover:text-yellow-500">Gallery</a>
            <a href="/about" className="text-[#222] hover:text-yellow-500">About Us</a>
            <a href="/contact" className="text-[#222] hover:text-yellow-500">Contact Us</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="tel:8006442" className="text-[#00C853] font-bold text-sm">
              Call Us Now - Toll Free<br />8006442
            </a>
          </div>
        </div>
      </header>

      {/* Hero/Pricing Info Section */}
      <section className="w-full bg-white pt-10 pb-6 px-4 flex flex-col items-center text-center border-b relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 opacity-30">
          <Image src="/images/pricing/879cbb094a6a27505099f36b47ef50414566d7e8.jpg" alt="Pricing Background" fill className="object-cover w-full h-full" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 relative z-10">Pricing</h1>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6 relative z-10">
          <span className="text-yellow-500 font-bold">Elite Cleaning, Clearly Priced !</span>
        </p>
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-gray-400">Scroll Down</span>
          <svg width="24" height="24" fill="none" className="animate-bounce mt-1"><path d="M12 5v14m0 0l-5-5m5 5l5-5" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </section>

      {/* Pricing Tables Section */}
      <section className="w-full py-12 px-4 bg-white border-b relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <svg width="32" height="32" fill="none" className="text-yellow-400"><path d="M6 18l6 6 14-14" stroke="#FEC00D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h2 className="text-2xl md:text-3xl font-bold">Elite Cleaning, Clearly <span className="text-yellow-400">Priced</span> !</h2>
          </div>

          {/* For Homes */}
          <h3 className="text-lg font-bold text-blue-700 mb-2">For <span className="text-blue-500">Homes</span> - 4 weeks service pack</h3>
          <div className="space-y-8 mb-8">
            {/* Once in a week */}
            <div>
              <h4 className="font-semibold mb-2">Once in a week - 4 times</h4>
              <table className="w-full text-sm border border-yellow-200 rounded-lg overflow-hidden mb-4">
                <thead className="bg-yellow-50">
                  <tr>
                    <th className="p-2">Rooms</th>
                    <th className="p-2">Service</th>
                    <th className="p-2">AED</th>
                    <th className="p-2">Discount</th>
                    <th className="p-2">Final Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-2">Studio</td>
                    <td className="p-2">4 hrs</td>
                    <td className="p-2">400</td>
                    <td className="p-2 text-green-600">-10%</td>
                    <td className="p-2 font-bold text-yellow-600">360</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">1 Bedroom</td>
                    <td className="p-2">4 hrs</td>
                    <td className="p-2">420</td>
                    <td className="p-2 text-green-600">-10%</td>
                    <td className="p-2 font-bold text-yellow-600">378</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">2 Bedroom</td>
                    <td className="p-2">5 hrs</td>
                    <td className="p-2">500</td>
                    <td className="p-2 text-green-600">-10%</td>
                    <td className="p-2 font-bold text-yellow-600">450</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">3 Bedroom</td>
                    <td className="p-2">6 hrs</td>
                    <td className="p-2">600</td>
                    <td className="p-2 text-green-600">-10%</td>
                    <td className="p-2 font-bold text-yellow-600">540</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Twice in a week */}
            <div>
              <h4 className="font-semibold mb-2">Twice in a week - 8 times</h4>
              <table className="w-full text-sm border border-yellow-200 rounded-lg overflow-hidden mb-4">
                <thead className="bg-yellow-50">
                  <tr>
                    <th className="p-2">Rooms</th>
                    <th className="p-2">Service</th>
                    <th className="p-2">AED</th>
                    <th className="p-2">Discount</th>
                    <th className="p-2">Final Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-2">Studio</td>
                    <td className="p-2">4 hrs</td>
                    <td className="p-2">800</td>
                    <td className="p-2 text-green-600">-15%</td>
                    <td className="p-2 font-bold text-yellow-600">680</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">1 Bedroom</td>
                    <td className="p-2">4 hrs</td>
                    <td className="p-2">840</td>
                    <td className="p-2 text-green-600">-15%</td>
                    <td className="p-2 font-bold text-yellow-600">714</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">2 Bedroom</td>
                    <td className="p-2">5 hrs</td>
                    <td className="p-2">1000</td>
                    <td className="p-2 text-green-600">-15%</td>
                    <td className="p-2 font-bold text-yellow-600">850</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">3 Bedroom</td>
                    <td className="p-2">6 hrs</td>
                    <td className="p-2">1200</td>
                    <td className="p-2 text-green-600">-15%</td>
                    <td className="p-2 font-bold text-yellow-600">1020</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Thrice in a week */}
            <div>
              <h4 className="font-semibold mb-2">Thrice in a week - 8 times</h4>
              <table className="w-full text-sm border border-yellow-200 rounded-lg overflow-hidden mb-4">
                <thead className="bg-yellow-50">
                  <tr>
                    <th className="p-2">Rooms</th>
                    <th className="p-2">Service</th>
                    <th className="p-2">AED</th>
                    <th className="p-2">Discount</th>
                    <th className="p-2">Final Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-2">Studio</td>
                    <td className="p-2">4 hrs</td>
                    <td className="p-2">1200</td>
                    <td className="p-2 text-green-600">-20%</td>
                    <td className="p-2 font-bold text-yellow-600">960</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">1 Bedroom</td>
                    <td className="p-2">4 hrs</td>
                    <td className="p-2">1260</td>
                    <td className="p-2 text-green-600">-20%</td>
                    <td className="p-2 font-bold text-yellow-600">1008</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">2 Bedroom</td>
                    <td className="p-2">5 hrs</td>
                    <td className="p-2">1500</td>
                    <td className="p-2 text-green-600">-20%</td>
                    <td className="p-2 font-bold text-yellow-600">1200</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">3 Bedroom</td>
                    <td className="p-2">6 hrs</td>
                    <td className="p-2">1800</td>
                    <td className="p-2 text-green-600">-20%</td>
                    <td className="p-2 font-bold text-yellow-600">1440</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* For Apartments and Villas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-2">For <span className="text-green-600">Appartments</span></h3>
              <p className="text-sm mb-2">20% off on your first booking</p>
              <table className="w-full text-sm border border-yellow-200 rounded-lg overflow-hidden mb-4">
                <thead className="bg-yellow-50">
                  <tr>
                    <th className="p-2">Rooms</th>
                    <th className="p-2">Service</th>
                    <th className="p-2">AED</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-2">Studio</td>
                    <td className="p-2">4 hrs</td>
                    <td className="p-2">400</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">1 Bedroom</td>
                    <td className="p-2">4 hrs</td>
                    <td className="p-2">420</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">2 Bedroom</td>
                    <td className="p-2">5 hrs</td>
                    <td className="p-2">500</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">3 Bedroom</td>
                    <td className="p-2">6 hrs</td>
                    <td className="p-2">600</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-2">For <span className="text-green-600">Villas</span></h3>
              <p className="text-sm mb-2">20% off on your first booking</p>
              <table className="w-full text-sm border border-yellow-200 rounded-lg overflow-hidden mb-4">
                <thead className="bg-yellow-50">
                  <tr>
                    <th className="p-2">Rooms</th>
                    <th className="p-2">Service</th>
                    <th className="p-2">AED</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-2">Studio</td>
                    <td className="p-2">4 hrs</td>
                    <td className="p-2">400</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">1 Bedroom</td>
                    <td className="p-2">4 hrs</td>
                    <td className="p-2">420</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">2 Bedroom</td>
                    <td className="p-2">5 hrs</td>
                    <td className="p-2">500</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-2">3 Bedroom</td>
                    <td className="p-2">6 hrs</td>
                    <td className="p-2">600</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-yellow-400 text-[#222] px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition">Book Now</button>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 w-1/3 opacity-60 z-0 hidden md:block">
          <Image src="/images/pricing/35f06415aa4bd57a00b29fca514da8e056691423.jpg" alt="Decorative Left" width={300} height={300} className="object-contain" />
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 opacity-60 z-0 hidden md:block">
          <Image src="/images/pricing/94f77000ab2f026d86dfb312a07fdb457837bb2a.jpg" alt="Decorative Right" width={300} height={300} className="object-contain" />
        </div>
      </section>

      {/* Footer (reuse from main site) */}
      <footer className="w-full bg-yellow-50 py-8 px-4 mt-8 border-t border-yellow-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
          <div>
            <h4 className="font-bold mb-2">Navigation</h4>
            <ul className="space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/packages" className="hover:underline">Packages</a></li>
              <li><a href="/pricing" className="hover:underline font-bold underline">Pricing</a></li>
              <li><a href="/gallery" className="hover:underline">Gallery</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
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
