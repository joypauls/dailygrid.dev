"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <div className="mt-4 space-y-4">
          <Link href="/" className="block text-lg font-medium hover:underline">
            Home
          </Link>
          <Link
            href="/about"
            className="block text-lg font-medium hover:underline"
          >
            About
          </Link>
          <Link
            href="https://github.com/youruser/gridpulse.dev"
            target="_blank"
            className="block text-lg font-medium hover:underline"
          >
            GitHub
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
