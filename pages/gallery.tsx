import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import '../styles/globals.css';

export default function Gallery() {
  return (
    <>
      <Navbar />
      {/* <main className="py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-10">Gallery</h1>
          <p>Check out our beautiful work!</p>
          <img src="/images/manicure.jpg" alt="Manicure" className="mt-4" />
          <img src="/images/pedicure.jpg" alt="Pedicure" className="mt-4" />
          <img src="/images/waxing.jpg" alt="Waxing" className="mt-4" />
        </div>
      </main> */}
      
      <main className="container mx-auto py-32">
        <div className="container mx-auto text-center">
          <h1 className="text-center text-4xl font-bold my-12">Our Nail Art Gallery</h1>
          <p className='mb-12'>Check out our beautiful work!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mx-40">

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery1.jpg" alt="Nail Art 1" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery2.jpg" alt="Nail Art 2" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery3.jpg" alt="Nail Art 3" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery4.jpg" alt="Nail Art 4" className="w-full h-auto"/>
            </div>
          
            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery5.jpg" alt="Nail Art 5" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery7.jpg" alt="Nail Art 7" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery8.jpg" alt="Nail Art 8" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery9.jpg" alt="Nail Art 9" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery10.jpg" alt="Nail Art 10" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery11.jpg" alt="Nail Art 11" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery12.jpg" alt="Nail Art 12" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery13.jpg" alt="Nail Art 13" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery14.jpg" alt="Nail Art 14" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery15.jpg" alt="Nail Art 15" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery16.jpg" alt="Nail Art 16" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery17.jpg" alt="Nail Art 17" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery18.jpg" alt="Nail Art 18" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery19.jpg" alt="Nail Art 19" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery20.jpg" alt="Nail Art 20" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery21.jpg" alt="Nail Art 21" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery22.jpg" alt="Nail Art 22" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery23.jpg" alt="Nail Art 23" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery24.jpg" alt="Nail Art 24" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery25.jpg" alt="Nail Art 25" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery27.jpg" alt="Nail Art 27" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery28.jpg" alt="Nail Art 28" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery29.jpg" alt="Nail Art 29" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery30.jpg" alt="Nail Art 30" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery32.jpg" alt="Nail Art 32" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery33.jpg" alt="Nail Art 33" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery34.jpg" alt="Nail Art 34" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery35.jpg" alt="Nail Art 35" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery36.jpg" alt="Nail Art 36" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery37.jpg" alt="Nail Art 37" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery38.jpg" alt="Nail Art 38" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery39.jpg" alt="Nail Art 39" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery40.jpg" alt="Nail Art 40" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery41.jpg" alt="Nail Art 41" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery42.jpg" alt="Nail Art 42" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery43.jpg" alt="Nail Art 43" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery44.jpg" alt="Nail Art 44" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery45.jpg" alt="Nail Art 45" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery46.jpg" alt="Nail Art 46" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery47.jpg" alt="Nail Art 47" className="w-full h-auto"/>
            </div>
        </div>
    </main>
    <BackToTop />
    <Footer />
    </>
  );
}