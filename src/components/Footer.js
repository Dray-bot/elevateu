'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-orange-200 to-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Branding Section */}
        <div className="space-y-4 md:max-w-sm">
          <h2 className="text-3xl font-bold text-orange-500">ElevateU</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Hands-on education platform helping you master practical skills to boost your career & projects.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-16">
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="/courses" className="hover:underline hover:text-orange-500">Courses</Link></li>
              <li><Link href="/about" className="hover:underline hover:text-orange-500">About Us</Link></li>
              <li><Link href="/" className="hover:underline hover:text-orange-500">Resources</Link></li>
              <li><Link href="/" className="hover:underline hover:text-orange-500">Support</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="/" className="hover:underline hover:text-orange-500">Terms & Conditions</Link></li>
              <li><Link href="/" className="hover:underline hover:text-orange-500">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:underline hover:text-orange-500">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Connect</h3>
            <div className="flex gap-4  text-gray-700">
              <Link href="#" aria-label="Twitter" className="hover:text-orange-500"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-orange-500"><Linkedin className="w-5 h-5" /></Link>
              <Link href="#" aria-label="Instagram" className="hover:text-orange-500"><Instagram className="w-5 h-5" /></Link>
            </div>
          </div>

        </div>

      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-200 mt-12 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} ElevateU. All rights reserved.
      </div>
    </footer>
  );
}
