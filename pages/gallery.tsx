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
                <img src="/images/gallery14.jpg" alt="Nail Art 14" className="w-full h-auto"/>
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
                <img src="/images/gallery46.jpg" alt="Nail Art 46" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery47.jpg" alt="Nail Art 47" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery50.jpg" alt="Nail Art 50" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery51.jpg" alt="Nail Art 51" className="w-full h-auto"/>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery52.jpg" alt="Nail Art 52" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery53.jpg" alt="Nail Art 53" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery54.jpg" alt="Nail Art 54" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery55.jpg" alt="Nail Art 55" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery56.jpg" alt="Nail Art 56" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery59.jpg" alt="Nail Art 59" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery60.jpg" alt="Nail Art 60" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery61.jpg" alt="Nail Art 61" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery62.jpg" alt="Nail Art 62" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery63.jpg" alt="Nail Art 63" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery64.jpg" alt="Nail Art 64" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery65.jpg" alt="Nail Art 65" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery66.jpg" alt="Nail Art 66" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery67.jpg" alt="Nail Art 67" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery68.jpg" alt="Nail Art 68" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery70.jpg" alt="Nail Art 70" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery71.jpg" alt="Nail Art 71" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery72.jpg" alt="Nail Art 72" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery73.jpg" alt="Nail Art 73" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery74.jpg" alt="Nail Art 74" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery75.jpg" alt="Nail Art 75" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery79.jpg" alt="Nail Art 79" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery80.jpg" alt="Nail Art 80" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery81.jpg" alt="Nail Art 81" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery82.jpg" alt="Nail Art 82" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery96.jpg" alt="Nail Art 96" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery97.jpg" alt="Nail Art 97" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery98.jpg" alt="Nail Art 98" className="w-full h-auto"/>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/gallery99.jpg" alt="Nail Art 99" className="w-full h-auto"/>
            </div>


        </div>
    </main>
    <BackToTop />
    <Footer />
    </>
  );
}