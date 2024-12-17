"use client";

import { FormData } from "@/lib/types";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormCardProps {
  submit: SubmitHandler<FormData>;
  isEditing: boolean;
  defaultValues?: FormData;
}

const FormCard: FC<FormCardProps> = ({ submit, isEditing, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full px-4 md:w-2/4 bg-white dark:bg-gray-800 shadow-xl p-6 rounded-lg"
    >
      {/* Title Input */}
      <input
        {...register("title", { required: true })}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
        required
      />
      {errors.title && (
        <p className="text-sm text-red-500">Title is required.</p>
      )}

      {/* Content Textarea */}
      <textarea
        {...register("content")}
        className="textarea textarea-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
        placeholder="Content"
        required
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn w-full bg-neutral text-white dark:bg-gray-700 dark:text-gray-200 hover:bg-neutral-focus dark:hover:bg-gray-600"
      >
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormCard;
