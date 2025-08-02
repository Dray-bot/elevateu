'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FinalCTASection() {
  return (
    <section className="w-full px-6 py-24 bg-gradient-to-t from-orange-300 to-white text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-6 text-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Unlock Your Potential.<br className="hidden md:block" /> Start Learning Today.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
        >
          ElevateU is not just courses — it’s a learning journey designed to equip you with practical, career-defining skills. Your growth starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <Link
            href="/courses"
            className="px-8 py-3 bg-white text-orange-600 rounded-xl text-lg font-bold hover:bg-orange-100 transition shadow-md"
          >
            Explore Courses
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 border border-white/60 text-white rounded-xl text-lg font-bold hover:bg-white/10 transition"
          >
            Learn About ElevateU
          </Link>
        </motion.div>
      </div>

      {/* Decorative Gradient Shape */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[300px] h-[300px] bg-white opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}
