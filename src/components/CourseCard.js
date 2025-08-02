'use client';

import Link from 'next/link';
import Image from 'next/image';  // ✅ Import Next.js Image

export default function CourseCard({ course }) {
  return (
    <Link
      href={`/course/${course.slug}`}
      className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <div className="relative h-48 bg-gray-100">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600">{course.description}</p>
        <div className="mt-4 text-orange-500 font-semibold">{course.price}</div>
      </div>
    </Link>
  );
}
