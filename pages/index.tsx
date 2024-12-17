import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import ServiceCard from '../components/ServiceCard';
import '../styles/globals.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-24">
        {/* Banner Section */}
        <div>
          <img
            src="/images/homepage.png"
            alt="CC Nails Studio Banner"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Welcome Section */}
        <section className="bg-pink-50 py-10 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Welcome to CC Nails Studio</h1>
            <p className="text-2xl md:text-3xl mt-4">Treat Yourself</p>
            <p className="mt-6 text-lg md:text-2xl mx-auto max-w-4xl">
              Want to treat yourself with a relaxing spa day? Need to get your new set of nails done?
              Or a moderate deluxe pedicure with a comfortable foot massage? Please come to CC Nails
              Studio! Located at 1516 Merivale road. Our goal is to bring you the most delightful and
              satisfactory spa experience.
            </p>
            <p className="mt-6 text-xl md:text-3xl">We are looking forward to seeing you!</p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-10 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <ServiceCard title="Manicure" image="/images/manicure.jpg" />
            <ServiceCard title="Pedicure" image="/images/pedicure.jpg" />
            <ServiceCard title="Manicure & Pedicure" image="/images/manipedi.jpg" />
            <ServiceCard title="Nails" image="/images/nails.jpg" />
            <ServiceCard title="Waxing" image="/images/waxing.jpg" />
            <ServiceCard title="Dipping" image="/images/dipping.jpg" />
            <ServiceCard title="Aesthetic Services" image="/images/aesthetic.jpg" />
            <ServiceCard title="Permanent Makeup" image="/images/permanentmakeup.jpg" />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="px-6 py-3 bg-pink-600 text-white font-semibold shadow-md hover:bg-pink-700 focus:outline-none"
            >
              View All Services
            </Link>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-10 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h2>
            <p className="text-xl md:text-3xl">
              <span className="font-bold">Phone: </span> 613-769-8599
            </p>
            <p className="text-xl md:text-3xl">
              <span className="font-bold">Email: </span> CC.Nails.Studio01@gmail.com
            </p>
            <p className="text-xl md:text-3xl font-bold">Business Hours: </p>
            <p className="text-lg md:text-2xl">Monday-Friday: 9:30AM to 7:00PM</p>
            <p className="text-lg md:text-2xl">Saturday: 10:00AM to 6:00PM</p>
            <p className="text-lg md:text-2xl">Sunday: 11:00AM to 5:00PM</p>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-10 bg-pink-50 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Our Location</h2>
            <p className="mb-4 text-lg md:text-xl">Walk-Ins Welcome</p>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.61589379267036!2d-75.737687268016!3d45.35634378987391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0772a044ccc1%3A0xc078e65f4a343829!2sCC%20Nails%20Studio!5e0!3m2!1sen!2sca!4v1726155550858!5m2!1sen!2sca"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
            <p className="mt-6 text-lg md:text-xl">
              We are located in the City View Plaza near OK Mart, Giant Tiger, Kumon, Memory Express,
              and more!
            </p>
          </div>
        </section>

        {/* Customer Feedback Section */}
        <section className="py-10 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Customer Feedback</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <ServiceCard title="" image="/images/customerfeedback1.jpg" />
            <ServiceCard title="" image="/images/customerfeedback2.jpg" />
            <ServiceCard title="" image="/images/customerfeedback3.jpg" />
            <ServiceCard title="" image="/images/customerfeedback7.jpg" />
          </div>
        </section>
      </main>

      <BackToTop />
      <Footer />
    </>
  );
}
