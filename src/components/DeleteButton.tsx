"use client";

import { deleteTodo } from "@/action/action";
import { FaTrash } from "react-icons/fa";

const DeleteButton = ({ slug }: { slug: string }) => {
  const handleDelete = async (slug: string) => {
    await deleteTodo(slug);
  };
  return (
    <div
      onClick={() => handleDelete(slug)}
      className="btn btn-error btn-sm md:btn-md flex gap-1"
    >
      <FaTrash />
      <span>Delete</span>
    </div>
  );
};

export default DeleteButton;
