import TodoCard from "@/components/TodoCard";
import { prisma } from "@/lib/db";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

const DashBoardPage = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  if (!email) {
    redirect("/signin");
  }

  const todos = await prisma.todo.findMany({
    where: {
      userEmail: email,
    },
    select: {
      slug: true,
      title: true,
      content: true,
      createdAt: true,
      completed: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="flex flex-col space-y-5 items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 md:mt-5">
      <div className="flex flex-col gap-2 md:gap-4 items-center justify-between text-center">
        <h1 className="text-2xl md:text-4xl font-extrabold">
          {session?.user?.name?.split(" ")[0]}&apos;s Todo List
        </h1>
        <p className="text-xs md:text-base">
          Keep pushing forward, {session?.user?.name?.split(" ")[0]}. Every task
          you complete is a step toward greatness!
        </p>
      </div>

      {todos.length ? (
        <div className="grid md:grid-cols-2  gap-5 w-full">
          {todos.map((todo) => (
            <TodoCard
              key={todo.slug}
              slug={todo.slug}
              title={todo.title}
              content={todo.content}
              completed={todo.completed}
              createdAt={todo.createdAt}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-y-4 items-center justify-center text-center font-serif">
          <p className="text-center font-bold">Todo list is empty</p>
          <p className="text-center">
            Create your first todo and watch your dreams come to reality
          </p>
          <Link
            href={"/create"}
            className="flex font-serif gap-x-2 items-center btn btn-info"
          >
            <FaArrowDown className="animate-bounce" />
            <span className="">Create</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DashBoardPage;
