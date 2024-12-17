import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import '../styles/globals.css';

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 pt-28 md:pt-24">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-6 lg:my-12">Our Nail Art Gallery</h1>
          <p className="mb-6 lg:mb-12">Check out our beautiful work!</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {/* 图片列表 */}
          {[
            '/images/gallery85.jpg',
            '/images/gallery86.jpg',
            '/images/gallery87.jpg',
            '/images/gallery94.jpg',
            '/images/gallery95.jpg',
            '/images/gallery1.jpg',
            '/images/gallery3.jpg',
            '/images/gallery4.jpg',
            '/images/gallery5.jpg',
            '/images/gallery7.jpg',
            '/images/gallery8.jpg',
            '/images/gallery9.jpg',
            '/images/gallery14.jpg',
            '/images/gallery16.jpg',
            '/images/gallery17.jpg',
            '/images/gallery18.jpg',
            '/images/gallery22.jpg',
            '/images/gallery23.jpg',
            '/images/gallery24.jpg',
            '/images/gallery25.jpg',
            '/images/gallery27.jpg',
            '/images/gallery28.jpg',
            '/images/gallery29.jpg',
            '/images/gallery30.jpg',
            '/images/gallery32.jpg',
            '/images/gallery33.jpg',
            '/images/gallery34.jpg',
            '/images/gallery35.jpg',
            '/images/gallery36.jpg',
            '/images/gallery38.jpg',
            '/images/gallery39.jpg',
            '/images/gallery40.jpg',
            '/images/gallery41.jpg',
            '/images/gallery42.jpg',
            '/images/gallery43.jpg',
            '/images/gallery44.jpg',
            '/images/gallery46.jpg',
            '/images/gallery47.jpg',
            '/images/gallery50.jpg',
            '/images/gallery51.jpg',
            '/images/gallery52.jpg',
            '/images/gallery53.jpg',
            '/images/gallery54.jpg',
            '/images/gallery55.jpg',
            '/images/gallery56.jpg',
            '/images/gallery59.jpg',
            '/images/gallery60.jpg',
            '/images/gallery61.jpg',
            '/images/gallery62.jpg',
            '/images/gallery63.jpg',
            '/images/gallery64.jpg',
            '/images/gallery65.jpg',
            '/images/gallery66.jpg',
            '/images/gallery67.jpg',
            '/images/gallery68.jpg',
            '/images/gallery70.jpg',
            '/images/gallery71.jpg',
            '/images/gallery72.jpg',
            '/images/gallery73.jpg',
            '/images/gallery74.jpg',
            '/images/gallery75.jpg',
            '/images/gallery79.jpg',
            '/images/gallery80.jpg',
            '/images/gallery81.jpg',
            '/images/gallery82.jpg',
            '/images/gallery96.jpg',
            '/images/gallery97.jpg',
            '/images/gallery98.jpg',
            '/images/gallery99.jpg',
          ].map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image} alt={`Nail Art ${index + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
