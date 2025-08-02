'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Maria Gonzalez',
    role: 'UI/UX Designer, Spain',
    feedback: 'I joined the Web Design course and ended up working on a real app with three other learners. That experience helped me land my first agency job.',
  },
  {
    name: 'Tolu Okafor',
    role: 'Frontend Developer, Nigeria',
    feedback: 'Most platforms just throw videos at you. ElevateU gave me tasks, feedback loops, and I even got my first freelance client through their community.',
  },
  {
    name: 'Michael Carter',
    role: 'Junior Developer, Canada',
    feedback: 'Their React Bootcamp wasn’t just theory. I built a full dashboard app, got mentor feedback, and added it to my portfolio — that project landed me an interview.',
  },
  {
    name: 'Aisha Khan',
    role: 'Self-Taught Developer, Pakistan',
    feedback: 'After completing the Next.js Fullstack Bootcamp, I landed an internship at a startup within 3 months.',
  },
  {
    name: 'Leonardo Silva',
    role: 'Product Designer, Brazil',
    feedback: 'I built my personal portfolio site via ElevateU’s Branding course, and now showcase it in client pitches.',
  },
  {
    name: 'Emeka Obi',
    role: 'Freelancer, Nigeria',
    feedback: 'The freelancing course wasn’t theory — I sent actual cold emails, pitched real clients, and got my first $500 project.',
  },
];

export default function AboutElevateU() {
  return (
    <main className="w-full min-h-screen px-6 md:px-16 lg:px-24 py-24 bg-gradient-to-b from-orange-100 to-white text-gray-800 space-y-32 overflow-hidden">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          We Don&apos;t Just Teach, We Build <span className="text-orange-500">Doers.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          ElevateU is a project-driven learning platform designed for creators, developers, and freelancers who believe in learning by building. We transform theory into real-world skills that launch careers.
        </motion.p>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold text-orange-500">Our Mission</h2>
          <p className="text-gray-600">
            To create a hands-on, engaging learning platform where skills are built through real-world projects, mentorship, and peer collaboration — not just passive tutorials.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold text-orange-500">Our Vision</h2>
          <p className="text-gray-600">
            To become the go-to platform where aspiring developers and creators build portfolios, launch careers, and connect with mentors globally.
          </p>
        </motion.div>
      </section>

      {/* Why ElevateU */}
      <section className="max-w-6xl mx-auto text-center space-y-14">
        <h2 className="text-3xl font-bold">Why Choose <span className="text-orange-500">ElevateU</span>?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-orange-50 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">Project-Based Learning</h3>
            <p className="text-gray-600 text-sm">Build real projects that showcase your skills to employers and clients.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-6 bg-orange-50 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">Mentorship & Feedback</h3>
            <p className="text-gray-600 text-sm">Get expert code reviews, UI critiques, and real feedback on your projects.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="p-6 bg-orange-50 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">Community Collaborations</h3>
            <p className="text-gray-600 text-sm">Work with peers globally, build real apps, and learn through collaboration.</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto text-center space-y-14">
        <h2 className="text-3xl font-bold">Learner Success Stories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition text-left space-y-4"
            >
              <p className="text-gray-600 text-sm">&quot;{t.feedback}&quot;</p>
              <div>
                <p className="font-semibold text-gray-800">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">Ready to Build Your Future?</h2>
        <p className="text-gray-600 text-lg">Join ElevateU and start learning by building today.</p>
        <button className="px-8 py-3 bg-orange-500 text-white rounded-xl text-lg font-bold hover:bg-orange-600 transition shadow-md">
          Get Started
        </button>
      </section>

    </main>
  );
}
