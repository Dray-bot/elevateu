'use client';

import Link from 'next/link';

export default function CourseCard({ course }) {
  return (
    <Link href={`/course/${course.slug}`} className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img src={course.thumbnail} alt={course.title} className="h-full w-full object-cover group-hover:scale-105 transition" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500">{course.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{course.description}</p>
        <div className="mt-4 text-orange-500 font-semibold">{course.price}</div>
      </div>
    </Link>
  );
}
