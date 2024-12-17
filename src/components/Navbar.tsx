"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { HamBurgerMenu } from "./HamBurgerMenu";
import { DropDown } from "./DropDown";
import { FcPlanner } from "react-icons/fc";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="fixed top-0 right-0 left-0 z-50 bg-gray-200 bg-opacity-40 backdrop-blur-lg shadow-sm">
      <nav className=" flex items-center justify-between max-w-6xl px-4 py-4 mx-auto sm:px-6 lg:px-8 lg:py-5">
        <div>
          <Link className="font-extrabold text-xl lg:text-2xl" href={"/"}>
            <FcPlanner className="text-3xl md:text-4xl inline-block mr-1" />
            SBN.Todo
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-x-6 font-serif">
          <Link href={"#hero"}>Hero</Link>
          <Link href={"#quotez"}>Quotez</Link>
          <Link href={"#benefits"}>Benefits</Link>
          <Link href={"#waysToPlan"}>Ways To Plan</Link>
        </div>
        {session ? (
          <div className="hidden md:flex items-center gap-x-5 font-serif">
            <ModeToggle />

            <Link href={"/dashboard"}>Dashboard</Link>
            <Link href={"/create"}>Create</Link>
            <DropDown />
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-x-3 font-serif">
            <Link href={"/signin"} className="btn">
              Sign In
            </Link>
            <ModeToggle />
          </div>
        )}
        <div className="flex gap-x-2 items-center justify-center md:hidden">
          <ModeToggle />
          <HamBurgerMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
