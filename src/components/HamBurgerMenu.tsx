"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon, PersonIcon } from "@radix-ui/react-icons";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";

export function HamBurgerMenu() {
  const { data: session, status } = useSession();
  const image = session?.user?.image;

  // State to control the sheet open/close
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <HamburgerMenuIcon
          className="h-7 w-7 md:hidden"
          onClick={() => setIsOpen(true)}
        />
      </SheetTrigger>
      <SheetContent className="px-2 py-14 flex flex-col justify-between  font-serif text-sm">
        <div className="flex flex-col gap-y-4 items-start">
          <Link
            href={"#hero"}
            className="w-full p-2 hover:bg-slate-600 hover:text-white rounded-md"
            onClick={closeSheet}
          >
            Hero
          </Link>
          <Link
            href={"#quotez"}
            className="w-full p-2 hover:bg-slate-600 hover:text-white rounded-md"
            onClick={closeSheet}
          >
            Quotez
          </Link>
          <Link
            href={"#benefits"}
            className="w-full p-2 hover:bg-slate-600 hover:text-white rounded-md"
            onClick={closeSheet}
          >
            Benefits
          </Link>
          <Link
            href={"#waysToPlan"}
            className="w-full p-2 hover:bg-slate-600 hover:text-white rounded-md"
            onClick={closeSheet}
          >
            Ways To Plan
          </Link>
        </div>
        <hr className="border-slate-400 border-1 w-full rounded-full" />
        {status === "authenticated" ? (
          <div className="flex flex-col gap-y-4 items-start w-full">
            <Link
              href={"/dashboard"}
              className="w-full p-2 hover:bg-slate-600 hover:text-white rounded-md"
              onClick={closeSheet}
            >
              Dashboard
            </Link>
            <Link
              href={"/create"}
              className="w-full p-2 hover:bg-slate-600 hover:text-white rounded-md"
              onClick={closeSheet}
            >
              Create
            </Link>
            <div className="flex gap-x-3 p-1 py-1 items-center">
              {image ? (
                <Image
                  src={image}
                  alt="Profile"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              ) : (
                <PersonIcon className="h-7 w-7 rounded-full" />
              )}
              <div className="">{session?.user?.name}</div>
            </div>
            <div className=" p-2">{session?.user?.email}</div>
            <div
              onClick={() => {
                signOut();
                closeSheet(); // Close sheet on sign out
              }}
              className="flex gap-x-2 cursor-pointer w-full p-2 hover:bg-slate-600 hover:text-white rounded-md items-center"
            >
              <FaSignOutAlt size={23} className="" />
              <span className="">Sign out</span>
            </div>
          </div>
        ) : (
          <Link
            href={"/signin"}
            className="flex gap-x-2 cursor-pointer w-full p-2 hover:bg-slate-600 hover:text-white rounded-md items-center"
            onClick={closeSheet}
          >
            Sign In
          </Link>
        )}
      </SheetContent>
    </Sheet>
  );
}
