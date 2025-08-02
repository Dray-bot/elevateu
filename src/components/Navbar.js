'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserButton, useUser } from '@clerk/nextjs'; // Clerk hooks & components

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isSignedIn } = useUser(); // Clerk user session

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} py-4`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <Link href="" className="text-2xl font-bold text-orange-500">
          ElevateU
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-orange-500 transition">Home</Link>
          <Link href="/courses" className="text-gray-700 hover:text-orange-500 transition">Courses</Link>
          <Link href="/community" className="text-gray-700 hover:text-orange-500 transition">Community</Link>

          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link href="/sign-up" className="px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 transition">
              Sign Up
            </Link>
          )}
        </div>

        <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="flex flex-col items-center py-4 gap-4">
              <Link href="/" className="text-gray-700 hover:text-orange-500 transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/courses" className="text-gray-700 hover:text-orange-500 transition" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
              <Link href="/community" className="text-gray-700 hover:text-orange-500 transition" onClick={() => setMobileMenuOpen(false)}>Community</Link>

              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <Link href="/sign-up" className="px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 transition" onClick={() => setMobileMenuOpen(false)}>
                  Sign Up
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
