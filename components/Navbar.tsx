import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // State to control the mobile menu toggle

  // Helper function to check if a link is active
  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b border-gray-200">
      {/* Top Title Section */}
      <div>
        <p className="bg-pink-600 text-white text-center p-2 text-2xl md:text-3xl font-bold">
          CC Nails Studio
        </p>
      </div>

      {/* Main Navbar Container */}
      <div className="container flex md:justify-start items-center p-2 justify-between">
        {/* Logo on the Left */}
        <div className='pr-10'>
          <img
            src="/images/cclogo.png"
            alt="CC Nails Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black text-lg focus:outline-none"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link
              href="/"
              className={
                isActive('/')
                  ? 'text-pink-600 font-semibold'
                  : 'hover:text-pink-500'
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={
                isActive('/services')
                  ? 'text-pink-600 font-semibold'
                  : 'hover:text-pink-500'
              }
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/book-now"
              className={
                isActive('/book-now')
                  ? 'text-pink-600 font-semibold'
                  : 'hover:text-pink-500'
              }
            >
              Book Now
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={
                isActive('/gallery')
                  ? 'text-pink-600 font-semibold'
                  : 'hover:text-pink-500'
              }
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                isActive('/about')
                  ? 'text-pink-600 font-semibold'
                  : 'hover:text-pink-500'
              }
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="mb md:hidden">
          <ul className="bg-gray-100 text-black space-y-2 p-4 text-center">
            <li>
              <Link
                href="/"
                className={
                  isActive('/')
                    ? 'text-pink-600 font-semibold'
                    : 'hover:text-pink-500'
                }
                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={
                  isActive('/services')
                    ? 'text-pink-600 font-semibold'
                    : 'hover:text-pink-500'
                }
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/book-now"
                className={
                  isActive('/book-now')
                    ? 'text-pink-600 font-semibold'
                    : 'hover:text-pink-500'
                }
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={
                  isActive('/gallery')
                    ? 'text-pink-600 font-semibold'
                    : 'hover:text-pink-500'
                }
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  isActive('/about')
                    ? 'text-pink-600 font-semibold'
                    : 'hover:text-pink-500'
                }
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
