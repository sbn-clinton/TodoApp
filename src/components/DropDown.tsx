"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { FaPersonRifle } from "react-icons/fa6";
import { Button } from "./ui/button";
import { FaSignOutAlt } from "react-icons/fa";

export function DropDown() {
  const { data: session } = useSession();

  const image = session?.user?.image;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {image ? (
          <Image
            src={image}
            alt="Profile"
            width={30}
            height={30}
            className="rounded-full"
          />
        ) : (
          <FaPersonRifle size={24} />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuRadioGroup className="flex flex-col gap-1 p-2 text-sm">
          <div className="">{session?.user?.name}</div>
          <div className="">{session?.user?.email}</div>
          <Button
            onClick={() => signOut()}
            className="w-full flex gap-x-2 cursor-pointer"
          >
            <FaSignOutAlt />
            <span className="">Sign out</span>
          </Button>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
