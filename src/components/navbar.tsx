import React from "react";
import { Card } from "./ui/card";
import ThemeToggle from "@/components/theme-toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { Book, Bot, Code2, Settings2, SquareTerminal } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <Card className="rounded-lg">
      <nav className="flex flex-row items-center justify-between">
        <ul className="flex flex-row px-2">
          <li className="px-2 font-bold underline">
            <Link href="/">Henry Lee</Link>
          </li>
        </ul>
        <div className="m-w-0 flex flex-row items-center gap-4">
          <ThemeToggle />
        </div>
      </nav>
    </Card>
  );
};

export default NavBar;
