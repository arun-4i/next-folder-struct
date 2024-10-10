"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLoginDialog } from "@/components/login-dialog";
import { Squirrel } from "lucide-react";

export default function LandingNavbar() {
  const { openLoginDialog } = useLoginDialog();

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="flex gap-4 items-center font-bold text-primary">
                <Squirrel className="h-10 w-10"/>
                NextJS App
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <Button onClick={openLoginDialog} variant="outline">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
