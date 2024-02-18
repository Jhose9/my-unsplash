"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import Link from "next/link";
function Navbar() {
  const router = useRouter();
  const { setTheme } = useTheme();

  const Validator=()=>{
    const estado=localStorage.getItem("login");
    if(estado){
      router.push("/newpost");
    }else{
      router.push("/login")
    }
  }


  const signOff=()=>{
    localStorage.clear();
    router.push("/login");
  }


  return (
    <nav className="w-full  h-14 flex items-center p-5 py-10 ">
      <Link href={"/"} className="p-2 lg:text-lg font-extrabold">
        My Unsplash
      </Link>

      <Button
        onClick={Validator}
        className=" mr-2 ml-auto w-1/4s rounded-xl h-9 md:w-28 text-sm "
      >
        Add photo
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="mr-5 ml-5">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => router.push("/ranks")}>
            Ranking
          </DropdownMenuItem>
          <DropdownMenuItem onClick={signOff}>
            Sign off
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

export default Navbar;
