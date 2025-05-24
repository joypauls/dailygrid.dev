"use client";

import Link from "next/link";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { MobileNav } from "@/app/components/MobileNav";
import { Zap } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white dark:bg-zinc-900 backdrop-blur">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Brand and mobile menu */}
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link
            href="/"
            className="flex items-center gap-1 font-semibold text-lg"
          >
            <Zap className="w-5 h-5 text-green-500" />
            Grid Pulse
          </Link>
        </div>

        {/* Right: desktop nav + theme toggle */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:underline"
          >
            About
          </Link>
          <a
            href="https://github.com/youruser/gridpulse.dev"
            className="text-sm text-muted-foreground hover:underline"
            target="_blank"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
