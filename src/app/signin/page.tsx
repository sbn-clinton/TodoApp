"use client";

import SignInButton from "@/components/SignInButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <div className="loading loading-spinner loading-md md:loading-lg text-blue-600"></div>
      </div>
    );
  }

  if (status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] px-4">
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-3 md:mb-6">
        Create Your Account
      </h1>
      <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md">
        Sign up to unlock your personalized dashboard, stay connected, and
        explore all our features tailored just for you.
      </p>
      <SignInButton />
    </div>
  );
};

export default SignUpPage;
