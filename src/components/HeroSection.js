'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center relative pt-28 md:pt-36 bg-gradient-to-b from-orange-200 via-orange-50 to-orange-100 overflow-hidden">
      <div className="max-w-7xl w-full px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-20 relative z-10">
        
        {/* Text Section */}
        <div className="space-y-8 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight tracking-tight"
          >
            The Smarter Way <br /> to <span className="text-orange-600">Master New Skills.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0"
          >
            ElevateU empowers you with hands-on, project-based learning designed to boost your career in tech and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mt-4 md:mt-6"
          >
            <Link href="/courses" className="px-6 py-2.5 bg-gradient-to-b from-orange-600 to-orange-500 text-white rounded-lg text-base hover:bg-orange-700 transition shadow-sm text-center">
              Browse Courses
            </Link>
            <Link href="/" className="px-6 py-2.5 border border-orange-600 text-orange-600 rounded-lg text-base hover:bg-orange-50 transition text-center">
              Free Learning Resources
            </Link>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
            <Image
              src="/illustrations/learning.svg"
              alt="ElevateU Learning Dashboard"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </motion.div>

      </div>

      {/* Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-0">
        <svg className="relative block w-[calc(100%+1.3px)] h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.14,22,104.28,34.85,158.56,32,70.79-3.89,136.37-33.75,207.16-37.64,74.72-4.15,147,22.41,218.08,39.65C663.29,102,736,104.55,808.56,90.67c60.53-11.19,117.58-37.43,177.08-51.17C1048.47,21,1124.24,22.73,1200,28.91V0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
