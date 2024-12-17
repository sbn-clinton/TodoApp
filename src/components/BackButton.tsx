"use client";

import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="btn flex gap-2 items-center bg-gray-100 text-black dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors px-4 py-2 rounded-lg shadow"
    >
      <FaChevronLeft className="text-lg md:text-xl" />
      <span className="text-sm md:text-base">Back</span>
    </button>
  );
};

export default BackButton;
