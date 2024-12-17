"use client";

import FormCard from "@/components/FormCard";
import { SubmitHandler } from "react-hook-form";
import { FormData } from "@/lib/types";
import { createTodo } from "@/action/action";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";

const CreatePage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  if (!session) {
    router.push("/signin");
  }

  console.log(session?.user);

  const CreateTodo: SubmitHandler<FormData> = async (data) => {
    await createTodo(data);
  };
  return (
    <div className="max-w-6xl mx-auto mt-5 md:mt-5">
      <BackButton />
      <div className="flex flex-col space-y-5 items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className=" text-2xl md:text-4xl font-bold font-sans italic">
          Make Your Plans
        </h1>
        <FormCard submit={CreateTodo} isEditing={false} />
      </div>
    </div>
  );
};

export default CreatePage;
