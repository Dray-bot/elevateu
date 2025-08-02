'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-100 to-white px-6 py-16">
      <div className="w-full max-w-md">
        <SignIn 
          path="/sign-in" 
          routing="path" 
          signUpUrl="/sign-up"
          afterSignInUrl="/dashboard"  // 👈 Add this line
        />
      </div>
    </section>
  );
}
