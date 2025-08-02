'use client';

import Link from 'next/link';
import { BookOpen, PlayCircle } from 'lucide-react';

const enrolledCourses = [
  {
    slug: 'react-for-beginners',
    title: 'React for Beginners',
    description: 'Kickstart your React journey with real projects.',
    progress: 45, // Percent
  },
  {
    slug: 'web-design-basics',
    title: 'Web Design Basics',
    description: 'Learn modern UI design using Figma & Tailwind CSS.',
    progress: 80,
  },
];

export default function MyCoursesPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-100 to-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
          My<span className="text-orange-500"> Courses</span>
        </h1>

        {enrolledCourses.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>You haven&apos;t enrolled in any courses yet.</p>
            <Link
              href="/courses"
              className="mt-4 inline-block px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enrolledCourses.map((course) => (
              <div
                key={course.slug}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
                      <BookOpen size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{course.progress}% Complete</p>
                </div>

                <Link
                  href={`/courses/${course.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-orange-500 hover:underline text-sm font-medium"
                >
                  <PlayCircle size={20} />
                  Continue Learning
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
