import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const SignInButton = () => {
  return (
    <div
      onClick={() => signIn("google")}
      className="flex items-center justify-center cursor-pointer"
    >
      <div className="flex items-center gap-x-3 px-4 py-2 rounded-lg shadow bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <FcGoogle className="text-2xl md:text-3xl" />
        <p className="text-sm md:text-lg font-medium">Sign in with Google</p>
      </div>
    </div>
  );
};

export default SignInButton;
