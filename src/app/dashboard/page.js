'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { BookOpen, Users, Settings } from 'lucide-react';

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 to-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-orange-600">
              Welcome, {user?.firstName}!
            </h1>
            <p className="mt-2 text-gray-700">Here’s your learning dashboard.</p>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>

        {/* Dashboard Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* My Courses */}
          <Link href="/my-courses" className="group bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-start">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-full mb-4 group-hover:bg-orange-200">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">My Courses</h3>
            <p className="text-gray-600 text-sm">Continue learning and track your progress.</p>
          </Link>

          {/* Community */}
          <Link href="/community" className="group bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-start">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-full mb-4 group-hover:bg-orange-200">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
            <p className="text-gray-600 text-sm">Engage with other learners and join discussions.</p>
          </Link>

          {/* Account Settings */}
          <Link href="/settings" className="group bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-start">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-full mb-4 group-hover:bg-orange-200">
              <Settings size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Account Settings</h3>
            <p className="text-gray-600 text-sm">Manage your profile and preferences.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
