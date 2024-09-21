// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-pink-600 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold">CC Nails Studio</h1>
//         <ul className="flex space-x-6">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/services">Services</Link></li>
//           <li><Link href="/book-now">Book Now</Link></li>
//           <li><Link href="/gallery">Gallery</Link></li>
//           <li><Link href="/about">About Us</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter(); 

  // Helper function to check if the link is active
  const isActive = (pathname: string) => router.pathname === pathname;

  return (
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 text-white p-0 border-b border-gray-200">
        <div><p className='bg-pink-600 text-white text-center p-2 text-3xl'>CC Nails Studio</p></div>

        <div className="text-black py-2">
          <div className="relative container mx-auto py-2">

            {/* Logo */}
            <img src="/images/cclogo.png" alt="" className="h-10 w-auto pl-10"/>
            
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className={isActive('/') ? 'text-pink-600 font-semibold' : 'hover:text-black'}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className={isActive('/services') ? 'text-pink-600 font-semibold' : 'hover:text-pink-500 hover:underline'}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/book-now" className={isActive('/book-now') ? 'text-pink-600 font-semibold' : 'hover:text-pink-500 hover:underline'}>
                    Book Now
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className={isActive('/gallery') ? 'text-pink-600 font-semibold' : 'hover:text-pink-500 hover:underline'}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={isActive('/about') ? 'text-pink-600 font-semibold' : 'hover:text-pink-500 hover:underline'}>
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}
