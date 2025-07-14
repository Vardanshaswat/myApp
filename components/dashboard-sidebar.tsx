"use client";

import Link from "next/link";
import type { User } from "next-auth";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DashboardSidebar from "./dashboard-sidebar";

interface DashboardHeaderProps {
  user: User;
}

export default function DashboardHeader({ user }: DashboardHeaderProps) {
  const pathname = usePathname();

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <header className="sticky top-0 z-10 border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              {/* <DashboardSidebar /> */}
            </SheetContent>
          </Sheet>
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="text-xl font-bold">BlogSpace</span>
          </Link>
        </div>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="/dashboard"
            className={`text-sm font-medium ${
              pathname === "/dashboard"
                ? "text-foreground"
                : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/explore"
            className={`text-sm font-medium ${
              pathname === "/dashboard/explore"
                ? "text-foreground"
                : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
          >
            Explore
          </Link>
          <Link
            href="/dashboard/bookmarks"
            className={`text-sm font-medium ${
              pathname === "/dashboard/bookmarks"
                ? "text-foreground"
                : "text-muted-foreground"
            } transition-colors hover:text-foreground`}
          >
            Bookmarks
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm" className="hidden md:flex">
            <Link href="/dashboard/new-article">Write Article</Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={user.image || ""}
                    alt={user.name || "User"}
                  />
                  <AvatarFallback>
                    {user.name ? getInitials(user.name) : "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  {user.name && <p className="font-medium">{user.name}</p>}
                  {user.email && (
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  )}
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/api/auth/signout">Log out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
