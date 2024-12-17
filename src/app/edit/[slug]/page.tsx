"use client";

import { GetTodo, updateTodo } from "@/action/action";
import BackButton from "@/components/BackButton";
import FormCard from "@/components/FormCard";
import { FormData } from "@/lib/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";

interface EditPageProps {
  params: {
    slug: string;
  };
}

const EditPage: FC<EditPageProps> = ({ params: { slug } }) => {
  const router = useRouter();
  const { status } = useSession();
  const [todo, setTodo] = useState<FormData | null>();

  // Redirect if not authenticated
  if (status === "unauthenticated") {
    router.push("/signin");
  }

  // Fetch the todo item based on slug
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const todoData = await GetTodo(slug);
        setTodo(todoData);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };

    if (slug) fetchTodo();
  }, [slug]);

  const EditTodo: SubmitHandler<FormData> = async (data) => {
    // Add the code for editing the todo here
    await updateTodo(data, slug);
  };

  if (!todo)
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-md lg:loading-lg"></span>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto mt-5 md:mt-5">
      <BackButton />
      <div className="flex flex-col space-y-5 items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className=" text-2xl md:text-4xl font-bold font-sans italic">
          Update Your Plans
        </h1>
        <FormCard submit={EditTodo} isEditing={true} defaultValues={todo} />
      </div>
    </div>
  );
};

export default EditPage;
