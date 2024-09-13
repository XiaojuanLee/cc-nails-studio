import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto pb-16 pt-32 ">
        <h1 className="text-center text-4xl font-bold my-12">Book An Appointment</h1>

        <div className="bg-white p-8 rounded-lg text-center">
          <p className='text-2xl font-bold'>613-769-8599</p>
          <p className='text-xl'>CC.Nails.Studio01@gmail.com</p>
        </div>

        <div className="bg-white p-8 rounded-lg text-center">
          <h2 className="text-pink-600 text-2xl font-bold mb-6">Business Hours</h2>
          <p className='text-xl'>Monday-Friday: 9:30AM to 7:00PM</p>
          <p className='text-xl'>Saturday: 10:00AM to 6:00PM</p>
          <p className='text-xl'>Sunday: 11:00AM to 5:00PM</p>
        </div>

        <div className="bg-white p-8 rounded-lg text-center">
          <h2 className="text-pink-600 text-2xl font-bold mb-6">Walk-Ins Welcome</h2>
          <p className='text-xl'>1516 Merivale Road, Nepean, Ottawa, Ontario</p>
          <p className='text-xl'>K2G 3J6</p>
          <p >We are located in the City View Plaza near OK Mart, Giant Tiger, Kumon, Memory Express, Mello's, Happy Lamb Hot Pot</p>
          <div className="overflow-hidden rounded-lg shadow-lg mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.61589379267036!2d-75.737687268016!3d45.35634378987391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0772a044ccc1%3A0xc078e65f4a343829!2sCC%20Nails%20Studio!5e0!3m2!1sen!2sca!4v1726155550858!5m2!1sen!2sca"
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy">
              </iframe>

            </div>
        </div>


            

      </main>
      <Footer />
    </>
  );
}