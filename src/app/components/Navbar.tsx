"use client";

import Link from "next/link";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { MobileNav } from "@/app/components/MobileNav";
import UnderlineLink from "@/components/links/UnderlineLink";
import { Zap, Battery } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur mb-4 flex justify-center">
      <div className="w-full max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Left: Brand and mobile menu */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center font-semibold text-lg">
            <Zap className="w-6 h-6 text-green-500 mr-1" />
            {/* <Battery className="w-6 h-6 text-green-500" /> */}
            Daily Grid
          </Link>
        </div>

        {/* Right: desktop nav + theme toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link href="/about" className="text-sm">
              About
            </Link>
            {/* <a
              href="https://github.com/youruser/gridpulse.dev"
              className="text-sm text-muted-foreground hover:underline"
              target="_blank"
            >
              GitHub
            </a> */}
          </div>
          <MobileNav />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
