'use client';

import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-100 to-white px-6 py-16">
      <div className="w-full max-w-md">
        <SignUp 
          path="/sign-up" 
          routing="path" 
          signInUrl="/sign-in"
          afterSignUpUrl="/dashboard"  // 👈 Important
        />
      </div>
    </section>
  );
}
