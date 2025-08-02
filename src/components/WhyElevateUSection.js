'use client';

import { CheckCircle } from 'lucide-react';

export default function WhyElevateUSection() {
  const features = [
    {
      title: 'Expert-Led Learning Paths',
      description: 'Curated courses designed by top industry experts to ensure you gain real-world, job-ready skills.',
    },
    {
      title: 'Project-Based Courses',
      description: 'Every course is built around real projects, so you actually build while learning.',
    },
    {
      title: 'One-Time Payment, Lifetime Access',
      description: 'No recurring fees for courses. Pay once and learn at your own pace forever.',
    },
  ];

  return (
    <section className="w-full px-6 py-24 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold bg-gray-800 bg-clip-text text-transparent">
          Why ElevateU?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here&apos;s why learners choose ElevateU to level up their skills.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition transform duration-300 text-center flex flex-col items-center space-y-4"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-500 transition">
              <CheckCircle className="w-8 h-8 text-orange-500 group-hover:text-white transition" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Subtle Gradient Blobs */}
      <div className="absolute top-[-150px] left-[-150px] w-[300px] h-[300px] bg-orange-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[300px] h-[300px] bg-orange-300 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
}
