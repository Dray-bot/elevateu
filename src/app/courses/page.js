'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Extended Courses Data with YouTube Links
const courses = [
  {
    slug: 'web-design',
    title: 'Modern Web Design',
    description: 'Master UI/UX principles and design responsive websites with Figma & Tailwind CSS.',
    thumbnail: '/illustrations/web-design.svg',
    level: 'Beginner',
    duration: '8 Hours',
    youtubeUrl: 'https://www.youtube.com/watch?v=j6Ule7GXaRs',
  },
  {
    slug: 'react-fundamentals',
    title: 'React Fundamentals',
    description: 'Learn the core of React with hands-on projects to build dynamic web apps.',
    thumbnail: '/illustrations/react.svg',
    level: 'Intermediate',
    duration: '10 Hours',
    youtubeUrl: 'https://www.youtube.com/watch?v=LDB4uaJ87e0',
  },
  {
    slug: 'freelancing-101',
    title: 'Freelancing 101',
    description: 'Step-by-step guide to landing your first freelance gig as a developer.',
    thumbnail: '/illustrations/freelance.svg',
    level: 'All Levels',
    duration: '5 Hours',
    youtubeUrl: 'https://www.youtube.com/watch?v=jqBn5bnP0Tk',
  },
  {
    slug: 'javascript-mastery',
    title: 'JavaScript Mastery',
    description: 'Go from JS basics to building advanced applications with real-world challenges.',
    thumbnail: '/illustrations/javascript.svg',
    level: 'Intermediate',
    duration: '12 Hours',
    youtubeUrl: 'https://www.youtube.com/watch?v=XIOLqoPHCJ4',
  },
  {
    slug: 'nextjs-fullstack',
    title: 'Next.js Fullstack Bootcamp',
    description: 'Build production-ready web apps with Next.js, API Routes, and deployment strategies.',
    thumbnail: '/illustrations/next-js.svg',
    level: 'Advanced',
    duration: '15 Hours',
    youtubeUrl: 'https://www.youtube.com/watch?v=_EgI9WH8q1A',
  },
  {
    slug: 'personal-branding',
    title: 'Personal Branding for Developers',
    description: 'Learn how to build a strong personal brand and grow your audience on social platforms.',
    thumbnail: '/illustrations/personal-website.svg',
    level: 'All Levels',
    duration: '6 Hours',
    youtubeUrl: 'https://www.youtube.com/watch?v=nIKeUf78m44',
  },
];

export default function CoursesPage() {
  return (
    <section className="w-full min-h-screen px-6 md:px-16 lg:px-24 py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800"
        >
          Explore Our <span className="text-orange-500">Courses</span>
        </motion.h1>
        <p className="mt-4 text-center text-gray-600 text-lg">
          Learn job-ready skills with project-based, mentor-supported courses.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {courses.map((course, index) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden group"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{course.level}</span>
                  <span>{course.duration}</span>
                </div>
                <Link href={course.youtubeUrl} target="_blank" className="inline-block mt-4 text-orange-500 font-medium hover:underline">
                  Watch on YouTube →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
