'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';

export default function SettingsPage() {
  const { user, isLoaded } = useUser();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    notifications: true,
  });

  // Sync Clerk user data to formData once loaded
  useEffect(() => {
    if (isLoaded && user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.emailAddresses[0]?.emailAddress || '',
        password: '',
        notifications: true,
      });
    }
  }, [isLoaded, user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Settings:', formData);
    alert('Settings Updated ✅');
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-100 to-white flex flex-col items-center py-12 px-6 overflow-hidden">
      <div className="w-full max-w-4xl bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-lg p-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Account Settings</h1>
            <p className="text-gray-500 mt-2">Manage your profile, security, and preferences.</p>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Profile Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border text-gray-600 border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border text-gray-600 border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                readOnly
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Password & Security */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Password & Security</h2>
            <div>
              <label className="block text-gray-600 mb-1">New Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:ring-orange-500 focus:border-orange-500"
              />
              <p className="text-sm text-gray-400 mt-2">Leave blank if you don’t want to change it.</p>
            </div>
          </div>

          {/* Notifications */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Notifications</h2>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                name="notifications"
                checked={formData.notifications}
                onChange={handleChange}
                className="w-5 h-5 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
              />
              <span className="text-gray-600">Receive Email Updates & Course Announcements</span>
            </div>
          </div>

          {/* Danger Zone */}
          <div>
            <h2 className="text-xl font-semibold text-red-600 mb-4">Danger Zone</h2>
            <button
              type="button"
              onClick={() => {
                if (confirm('⚠️ Are you sure you want to delete your account? This action is irreversible!')) {
                  alert('Account Deletion Triggered 🚨');
                }
              }}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Delete Account
            </button>
          </div>

          {/* Save Changes Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
