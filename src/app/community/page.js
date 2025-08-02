'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Trophy } from 'lucide-react'; // Icons for vibe!

export default function CommunityPage() {
  return (
    <main className="w-full min-h-screen px-6 md:px-16 py-24 bg-gradient-to-b from-orange-100 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          ElevateU <span className="text-orange-500">Community Hub</span>
        </motion.h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Collaborate, Learn, and Grow with fellow learners and experts. Share progress, get feedback, and level up together.
        </p>

        <Link href="/sign-in" className="inline-block mt-6 px-8 py-3 bg-orange-500 text-white rounded-xl text-lg hover:bg-orange-600 transition shadow-md">
          Join the Community
        </Link>
      </section>

      {/* Community Channels Grid */}
      <section className="mt-20 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Introduce Yourself', desc: 'Meet fellow learners & share your goals.', icon: <Users className="w-8 h-8 text-orange-500" /> },
          { title: 'Course Help', desc: 'Ask questions & support others.', icon: <MessageCircle className="w-8 h-8 text-orange-500" /> },
          { title: 'Share Your Wins', desc: 'Celebrate milestones & showcase projects.', icon: <Trophy className="w-8 h-8 text-orange-500" /> },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition flex items-start gap-4"
          >
            {item.icon}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Call-to-Action */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your learning journey is better with a tribe!</h2>
        <p className="text-gray-600 text-lg mb-6">Don’t just take courses — join conversations, get feedback, and grow faster with peers & mentors.</p>
        <Link href="/sign-in" className="inline-block px-8 py-3 bg-orange-500 text-white rounded-xl text-lg hover:bg-orange-600 transition shadow-md">
          Become a Member
        </Link>
      </section>
    </main>
  );
}
