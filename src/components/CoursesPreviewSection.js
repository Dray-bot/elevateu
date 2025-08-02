'use client';

import Link from 'next/link';
import Image from 'next/image';

const sampleCourses = [
  {
    slug: 'web-design-basics',
    title: 'Web Design Basics',
    description: 'Learn the foundations of modern web design using Figma & Tailwind.',
    thumbnail: '/illustrations/web-design.svg',
  },
  {
    slug: 'react-for-beginners',
    title: 'React for Beginners',
    description: 'Kickstart your React journey with hands-on projects.',
    thumbnail: '/illustrations/react.svg',
  },
  {
    slug: 'freelancing-success',
    title: 'Freelancing Success Guide',
    description: 'How to get your first paying clients as a developer.',
    thumbnail: '/illustrations/freelance.svg',
  },
];

export default function CoursesPreviewSection() {
  return (
    <section className="w-full px-6 py-24 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gray-800 bg-clip-text text-transparent">
          Popular Courses
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover courses designed to elevate your skills and keep you ahead in today’s digital world.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {sampleCourses.map((course) => (
          <div
            key={course.slug}
            className="relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 flex flex-col space-y-4 group"
          >
            <div className="relative w-full h-48 rounded-xl overflow-hidden">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
            <p className="text-gray-600 text-sm">{course.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/courses"
          className="inline-block px-8 py-3 bg-orange-500 text-white rounded-xl text-lg hover:opacity-90 transition shadow-lg hover:shadow-xl"
        >
          View All Courses
        </Link>
      </div>
    </section>
  );
}
