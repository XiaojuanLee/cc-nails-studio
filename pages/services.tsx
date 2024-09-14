import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-32">
        <h1 className="text-center text-4xl font-bold my-12">We make sure we serve the best of our services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Left Column */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-pink-600 text-2xl font-bold mb-6">MANICURE</h2>
                <img src="/images/manicure.jpg" alt="Manicure" className="w-full h-48 object-cover rounded-lg mb-6" />
                <ul>
                    <li className="flex justify-between"><span>Regular Manicure</span> <span>$25.00</span></li>
                    <li className="flex justify-between"><span>French Manicure</span> <span>$35.00</span></li>
                    <li className="flex justify-between"><span>Shellac Manicure</span> <span>$35.00</span></li>
                    <li className="flex justify-between"><span>Shellac Manicure French</span> <span>$40.00</span></li>
                </ul>

                <h2 className="text-pink-600 text-2xl font-bold mt-8 mb-6">PEDICURE</h2>
                <img src="/images/pedicure.jpg" alt="Pedicure" className="w-full h-48 object-cover rounded-lg mb-6" />
                <ul>
                    <li className="flex justify-between"><span>Regular Pedicure</span> <span>$35.00</span></li>
                    <li className="flex justify-between"><span>French Pedicure</span> <span>$40.00</span></li>
                    <li className="flex justify-between"><span>Shellac Pedicure</span> <span>$45.00</span></li>
                    <li className="flex justify-between"><span>Shellac Pedicure French</span> <span>$50.00</span></li>
                    <li className="flex justify-between"><span>Hot Stone Massage</span> <span>$10.00</span></li>
                </ul>

                <h2 className="text-pink-600 text-2xl font-bold mt-8 mb-6">MANICURE & PEDICURE</h2>
                <img src="/images/manipedi.jpg" alt="Manicure & Pedicure" className="w-full h-48 object-cover rounded-lg mb-6" />
                <ul>
                    <li className="flex justify-between"><span>Manicure + Pedicure</span> <span>$45.00</span></li>
                    <li className="flex justify-between"><span>Shellac (Mani + Pedi)</span> <span>$75.00</span></li>
                </ul>

                <h2 className="text-pink-600 text-2xl font-bold mt-8 mb-6">NAILS</h2>
                <img src="/images/nails.jpg" alt="nails" className="w-full h-48 object-cover rounded-lg mb-6" />
                <ul>
                    <li className="flex justify-between"><span>Full Set</span> <span>$50.00</span></li>
                    <li className="flex justify-between"><span>Fill</span> <span>$35.00</span></li>
                    <li className="flex justify-between"><span>Full Set w. Shellac</span> <span>$60.00</span></li>
                    <li className="flex justify-between"><span>Fill w. Shellac</span> <span>$45.00</span></li>
                    <li className="flex justify-between"><span>Fill Porcelain</span> <span>$45.00</span></li>
                </ul>

                
            </div>

            {/* Right Column */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-pink-600 text-2xl font-bold mb-6">DIPPING</h2>
                <img src="/images/dipping.jpg" alt="dipping" className="w-full h-48 object-cover rounded-lg mb-6" />
                <ul>
                    <li className="flex justify-between"><span>Dip Powder</span> <span>$45.00</span></li>
                    <li className="flex justify-between"><span>Dip Powder Ext</span> <span>$50.00</span></li>
                </ul>

                <h2 className="text-pink-600 text-2xl font-bold mt-8 mb-6">WAXING SERVICES</h2>
                <img src="/images/waxing.jpg" alt="Waxing Services" className="w-full h-48 object-cover rounded-lg mb-6" />
                <ul>
                    <li className="flex justify-between"><span>Eyebrows</span> <span>$15.00</span></li>
                    <li className="flex justify-between"><span>Lips</span> <span>$8.00</span></li>
                    <li className="flex justify-between"><span>Chin</span> <span>$10.00</span></li>
                    <li className="flex justify-between"><span>Full Face</span> <span>$35.00</span></li>
                    <li className="flex justify-between"><span>Back</span> <span>$45.00</span></li>
                    <li className="flex justify-between"><span>Under Arms</span> <span>$15.00</span></li>
                    <li className="flex justify-between"><span>Half Arms</span> <span>$25.00</span></li>
                    <li className="flex justify-between"><span>Full Arms</span> <span>$40.00</span></li>
                    <li className="flex justify-between"><span>Half Leg</span> <span>$35.00</span></li>
                    <li className="flex justify-between"><span>Full Leg</span> <span>$65.00&up</span></li>
                    <li className="flex justify-between"><span>Bikini</span> <span>$25.00</span></li>
                    <li className="flex justify-between"><span>Brazilian</span> <span>$45.00</span></li>
                </ul>

                <h2 className="text-pink-600 text-2xl font-bold mt-8 mb-6">AESTHETIC SERVICES</h2>
                <img src="/images/aesthetic.jpg" alt="aesthetic services" className="w-full h-48 object-cover rounded-lg mb-6" />
                <ul>
                    <li className="flex justify-between"><span>Tinting</span> <span>$25.00</span></li>
                    <li className="flex justify-between"><span>Eyelash Ext</span> <span>$95.00&up</span></li>
                    <li className="flex justify-between"><span>Eyelash Curl</span> <span>$65.00</span></li>
                </ul>

                <h2 className="text-pink-600 text-2xl font-bold mt-8 mb-6">PERMANENT MAKEUP</h2>
                <img src="/images/permanentmakeup.jpg" alt="Permanent Makeup" className="w-full h-48 object-cover rounded-lg mb-6" />
                <ul>
                    <li className="flex justify-between"><span>Eyebow</span> <span>$399.00</span></li>
                    <li className="flex justify-between"><span>Eyeliner</span> <span>$399.00</span></li>
                    <li className="flex justify-between"><span>Lip Liner</span> <span>$399.00</span></li>
                </ul>
            </div>
        </div>
    </main>
      <Footer />
    </>
  );
}