"use server"


import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/db";
import { FormData } from "@/lib/types";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createTodo = async (formData: FormData) => {


  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
   redirect("/signin");
  }
  const email = session?.user?.email;

  const title = formData.title
  const content = formData.content 


  if (!title ) {
    return new Response("Title is required", { status: 400 });
  }

   await prisma.todo.create({
    data: {
      title,
      content,
      userEmail: email,
    },
  });
  redirect("/dashboard")
  }

  export const deleteTodo = async (slug: string) => {

    const session = await getServerSession();

  if (!session?.user?.email) {
   redirect("/signin");
  }

  const email = session?.user?.email;

    await prisma.todo.delete({
      where: {
        slug: slug,
        userEmail: email
      },
    });
    revalidatePath("/dashboard");
  };

  export const GetTodo = async (slug: string) => {

    const session = await getServerSession();

  if (!session?.user?.email) {
   redirect("/signin");
  }

  const email = session?.user?.email;

     const singleTodo = await prisma.todo.findUnique({
      where: {
        slug: slug,
        userEmail: email
      },
      select: {
        title: true,
        content: true || null,
      }
     })

     return singleTodo
  }

  export const updateTodo = async (formData: FormData, slug: string) => {

    const session = await getServerSession();

  if (!session?.user?.email) {
   redirect("/signin");
  }
  const email = session?.user?.email;

  const title = formData.title
  const content = formData.content 

  console.log(title, content);

  if (!title ) {
    return new Response("Title is required", { status: 400 });
  }

   await prisma.todo.update({
    data: {
      title,
      content,
      userEmail: email,
    },
    where: {
      slug: slug,
      userEmail: email
    }
  });
  redirect("/dashboard")
  }
