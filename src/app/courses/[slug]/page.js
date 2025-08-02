'use client';

import { useParams } from 'next/navigation';
import { BookOpenCheck, Video } from 'lucide-react';
import Link from 'next/link';

const courseDetails = {
  'react-for-beginners': {
    title: 'React for Beginners',
    description: 'Kickstart your React journey with hands-on projects that build real-world apps.',
    lessons: [
      { title: 'Introduction to React', duration: '8 min', isCompleted: true },
      { title: 'JSX & Components', duration: '15 min', isCompleted: false },
      { title: 'State & Props Deep Dive', duration: '20 min', isCompleted: false },
    ],
    progress: 33,
  },
  'web-design-basics': {
    title: 'Web Design Basics',
    description: 'Learn UI/UX fundamentals using Figma and Tailwind CSS.',
    lessons: [
      { title: 'Introduction to UI Design', duration: '10 min', isCompleted: true },
      { title: 'Figma Essentials', duration: '18 min', isCompleted: true },
      { title: 'Building with Tailwind CSS', duration: '25 min', isCompleted: false },
    ],
    progress: 66,
  },
};

export default function CourseDetailsPage() {
  const { slug } = useParams();
  const course = courseDetails[slug];

  if (!course) {
    return (
      <section className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Course not found.</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 to-white px-6 py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-orange-600">{course.title}</h1>
        <p className="mt-4 text-lg text-gray-700">{course.description}</p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Lessons</h2>
          <div className="space-y-4">
            {course.lessons.map((lesson, index) => (
              <div key={index} className={`flex items-center justify-between p-4 rounded-xl ${lesson.isCompleted ? 'bg-green-50' : 'bg-white'} shadow-sm hover:shadow-md transition`}>
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${lesson.isCompleted ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                    {lesson.isCompleted ? <BookOpenCheck size={20} /> : <Video size={20} />}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{lesson.title}</p>
                    <p className="text-sm text-gray-500">{lesson.duration}</p>
                  </div>
                </div>
                <Link href="#" className="text-orange-500 hover:underline text-sm font-medium">
                  {lesson.isCompleted ? 'Rewatch' : 'Start Lesson'}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm text-gray-500">Progress</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
          </div>
          <p className="mt-2 text-sm text-gray-600">{course.progress}% Completed</p>
        </div>
      </div>
    </section>
  );
}
