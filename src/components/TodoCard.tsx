"use client";

import { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import DeleteButton from "./DeleteButton";
import Link from "next/link";
import FormattedDate from "./FormattedDate";

interface TodoCardProps {
  slug: string;
  title: string;
  content: string | null | undefined;
  completed: boolean;
  createdAt: Date;
}

const TodoCard = ({
  slug,
  title,
  content,
  completed: initialCompleted,
  createdAt,
}: TodoCardProps) => {
  const [completed, setCompleted] = useState(initialCompleted);

  const toggleCompleted = () => {
    setCompleted((prev) => !prev);
  };

  return (
    <div className="card w-full shadow-xl bg-white dark:bg-gray-800">
      <div className="flex flex-col gap-4 p-4">
        {/* Title and Content */}
        <div className="flex flex-col gap-2">
          <h2
            className={`card-title ${
              completed
                ? "line-through text-gray-400 dark:text-gray-500"
                : "text-black dark:text-white"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-sm ${
              completed
                ? "line-through text-gray-400 dark:text-gray-500"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            {content}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <FormattedDate createdAt={createdAt} />
            <input
              type="checkbox"
              checked={completed}
              onChange={toggleCompleted}
              className="checkbox checkbox-xs md:checkbox-md dark:checkbox-secondary"
            />
          </div>
          <div className="flex gap-2">
            <Link
              href={`/edit/${slug}`}
              className="btn btn-sm md:btn-md flex gap-1 text-black dark:text-white bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <FaPencil />
              <span>Edit</span>
            </Link>
            <DeleteButton slug={slug} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
