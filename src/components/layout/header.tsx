"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/icons";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data";
import { MobileNav } from "./mobile-nav";
import { Button } from "../ui/button";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-12 w-12 text-primary" />
          <span className="font-bold font-headline">Tech-A-Thon</span>
        </Link>
        <nav className="hidden flex-1 gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <Link href="/join-us">Join Us</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
