import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import ServiceCard from '../components/ServiceCard';
import '../styles/globals.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <div >
          <img src="/images/homepage5.png" alt="CC Nails Studio Banner" className="mx-auto pt-0"/>
        </div>
{/* <section className="bg-white py-0">
  <div className="relative min-h-screen flex items-center justify-center">
    

    <div className="w-1/2 h-full">
      <img 
        src="/images/finger3.png" 
        alt="CC Nails Studio Banner Left" 
        className="w-full h-full object-cover"
      />
    </div>


    <div className="absolute text-center z-10 px-8">
      <h1 className="text-6xl font-bold">CC NAILS STUDIO</h1>
      <p className="text-2xl mt-4">YOUR PERFECT NAILS</p>
      <button className="mt-6 bg-pink-500 px-8 py-3 rounded text-lg font-semibold hover:bg-pink-700">
        BOOK NOW
      </button>
      <p className="mt-4 text-lg">
        We're only a phone call away! <br /> 613-769-8599
      </p>
    </div>


    <div className="w-1/2 h-full">
      <img 
        src="/images/homepage6.png" 
        alt="CC Nails Studio Banner Right" 
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section> */}

        {/* Our Services Section */}
        <section className="bg-pink-50 py-10">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold">Welcome to CC Nails Studio</h1>
            <p className="text-xl mt-4">Treat Yourself</p>
            <p className="mt-6 mx-80">
              Want to treat yourself with a relaxing spa day? 
              Need to get your new set of nails done? 
              Or a moderate deluxe pedicure with a comfortable foot massage? 
              Or with a newlook with a fullset of eyelash extensions or new eyebrows? 
              Please come to CC Nails Studio! 
              Located at 1516 Merivale road. Our goal is to bring you the most delightful and satisfactory spa experience. 
            </p>
            <p className="mt-6 mx-80">
              We are looking forward to seeing you!
            </p>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-10 mx-40">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
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
            <a href="/services" className="px-6 py-3 bg-pink-600 text-white font-semibold shadow-md hover:bg-pink-700 focus:outline-none">
              View All Services
            </a>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-10 mx-40">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
            <p className='font-bold text-xl'>Phone: 613-769-8599</p>
            <p>Email: CC.Nails.Studio01@gmail.com</p>
            <p>Business Hours: 
              <span className='ml-10'>Monday-Friday: 9:30AM to 7:00PM</span> 
              <span className='ml-10'>Saturday: 10:00AM to 6:00PM</span>
              <span className='ml-10'>Sunday: 11:00AM to 5:00PM</span>
                          </p>
          </div>
          
        </section>

        <section className="py-10 mx-40 bg-pink-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Our Location</h2>
            <p className=" mb-4">Walk-Ins Welcome
            </p>
            {/* Embed Google Map */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.61589379267036!2d-75.737687268016!3d45.35634378987391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0772a044ccc1%3A0xc078e65f4a343829!2sCC%20Nails%20Studio!5e0!3m2!1sen!2sca!4v1726155550858!5m2!1sen!2sca"
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy">
              </iframe>

            </div>
            <p className='mt-10 mx-40'>We are located in the City View Plaza near OK Mart, Giant Tiger, Kumon, Memory Express, City View Shoe repair, Benjamin Moore, Mello's, Happy Lamb Hot Pot, and City View Barber Shop. </p>
          </div>
        </section>
        
        {/* Customer Feedback Section */}
        <section className="py-10 mx-40">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Customer Feedback</h2>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

            <ServiceCard title="" image="/images/feedback1.jpg" />
            <ServiceCard title="" image="/images/feedback2.jpg" />
            <ServiceCard title="" image="/images/feedback4.jpg" />
            {/* <ServiceCard title="" image="/images/feedback3.jpg" />
            <ServiceCard title="" image="/images/feedback5.jpg" />
            <ServiceCard title="" image="/images/feedback6.jpg" /> */}
            <ServiceCard title="" image="/images/feedback7.jpg" /> 

          </div>
        </section>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
