import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function about() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-16 min-h-screen flex flex-col items-center justify-center">

      <div className="max-w-4xl p-28 bg-white rounded-lg shadow-lg items-center " >
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
        We have been in the beauty industry for <span className="font-semibold text-gray-800">more than 20 years</span>. We specialize in artificial Nails such as Solar, Bio Gel, Dipping, (we can do almost all designs if you have pictures), Shellac Manicure and Pedicure, Waxings, Eyelashes extension and Nano Permanent Makeup. We love what we do, therefore we opened up a nail salon here in Nepean and we hope to get support from the community. 
        </p>

        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to provide exceptional nail care services while promoting wellness, relaxation, and beauty in every step. We aim to create a welcoming environment where customers feel valued and pampered, leaving with a smile every time.
          </p>
        </div>

        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our experienced team of nail technicians is passionate about beauty and committed to delivering the highest quality of service. With years of experience in the nail industry, we are confident in our ability to provide you with the best results possible.
          </p>
        </div>

        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you have any questions or would like to learn more about our services, feel free to reach out to us. We are happy to assist you with all your inquiries and look forward to serving you soon!
          </p>
          {/* <a
              href="mailto:Baselinenails1365@gmail.com"
              className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Contact Us
            </a> */}
        </div>
      </div>
 

            

      </main>
      <Footer />
    </>
  );
}