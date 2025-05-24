"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full border-b bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        {/* <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white"
        >
          Grid Pulse
        </Link> */}

        <Link
          href="/"
          className="flex items-center gap-1 font-semibold text-lg"
        >
          <Zap className="w-5 h-5 text-green-500" />
          Grid Pulse
        </Link>

        {/* Right-side actions */}
        <div className="flex items-center gap-2">
          {/* Optional nav links */}
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:underline"
          >
            About
          </Link>
          <Link
            href="https://github.com/youruser/gridpulse.dev"
            target="_blank"
            rel="noopener"
          >
            <Button variant="outline" size="sm">
              GitHub
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
