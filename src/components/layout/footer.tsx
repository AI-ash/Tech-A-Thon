import Link from "next/link";
import { Logo, IconInstagram, IconX, IconLinkedIn } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo className="h-8 w-8 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left font-mono">
            © {new Date().getFullYear()} TechAthon Society. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://www.instagram.com/techathonarsd/" target="_blank" rel="noreferrer">
            <IconInstagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="https://x.com/techathonarsd/" target="_blank" rel="noreferrer">
            <IconX className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="https://www.linkedin.com/in/techathon-arsd-62995b268/" target="_blank" rel="noreferrer">
            <IconLinkedIn className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
