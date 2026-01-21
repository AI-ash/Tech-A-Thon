"use client";

import React from "react";
import { useRouter } from 'next/navigation';

const Logo = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const IconInstagram = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const IconX = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 4l16 16m0-16L4 20" />
  </svg>
);

const IconLinkedIn = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="2" width="20" height="20" rx="3" ry="3" />
    <path d="M7 10v7" />
    <circle cx="7" cy="7" r="1.2" />
    <path d="M11 10v7m0-4.5a3 3 0 0 1 6 0V17" />
  </svg>
);

const IconGithub = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const IconMail = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconMapPin = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// Renamed to avoid conflict with Next.js Link
const CustomLink = ({ href, children, className, target, rel }) => (
  <a href={href} className={className} target={target} rel={rel}>
    {children}
  </a>
);

export default function TechAthonFooter() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10 text-primary" />
              <span className="text-lg font-semibold">Tech-A-Thon</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground font-mono">
              Empowering students through technology, innovation, and
              collaborative learning in computer science.
            </p>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <IconMapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span className="font-mono">
                ARSD College, University of Delhi
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <CustomLink
                href="/about"
                className="text-sm text-muted-foreground transition-colors hover:text-primary font-mono"
              >
                About Us
              </CustomLink>
              <CustomLink
                href="/team"
                className="text-sm text-muted-foreground transition-colors hover:text-primary font-mono"
              >
                Our Team
              </CustomLink>
              <CustomLink
                href="/gallery"
                className="text-sm text-muted-foreground transition-colors hover:text-primary font-mono"
              >
                Gallery
              </CustomLink>
              <CustomLink
                href="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-primary font-mono"
              >
                Contact
              </CustomLink>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Events & Programs
            </h3>
            <nav className="flex flex-col gap-2">
              <button
            onClick={() => router.push("/events?type=Competition")}
            className="text-left text-sm text-muted-foreground transition-colors hover:text-primary font-mono"
          >
            Competitions
          </button>

          <button
            onClick={() => router.push("/events?type=Workshop")}
            className="text-left text-sm text-muted-foreground transition-colors hover:text-primary font-mono"
          >
            Workshops
          </button>

          <button
            onClick={() => router.push("/events?type=Seminar")}
            className="text-left text-sm text-muted-foreground transition-colors hover:text-primary font-mono"
          >
            Seminars
          </button>

          <button
            onClick={() => router.push("/events?type=Visit")}
            className="text-left text-sm text-muted-foreground transition-colors hover:text-primary font-mono"
          >
            Visits
          </button>

        </nav>
      </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Connect With Us
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:techathon@arsd.du.ac.in"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary font-mono"
              >
                <IconMail className="h-4 w-4" />
                <span>techathon@arsd.du.ac.in</span>
              </a>
              <div className="flex items-center gap-3 mt-2">
                <CustomLink
                  href="https://www.instagram.com/techathonarsd/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-md border border-border/40 transition-colors hover:bg-primary/10 hover:border-primary"
                >
                  <IconInstagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </CustomLink>

                <CustomLink
                  href="https://x.com/techathonarsd/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-md border border-border/40 transition-colors hover:bg-primary/10 hover:border-primary"
                >
                  <IconX className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </CustomLink>

                <CustomLink
                  href="https://www.linkedin.com/in/techathon-arsd-62995b268/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-md border border-border/40 transition-colors hover:bg-primary/10 hover:border-primary"
                >
                  <IconLinkedIn className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </CustomLink>

                <CustomLink
                  href="https://github.com/techathon-arsd"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-md border border-border/40 transition-colors hover:bg-primary/10 hover:border-primary"
                >
                  <IconGithub className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </CustomLink>
              </div>
            </div>

            <div className="mt-2">
              <CustomLink
                href="/join-us"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Join Us
              </CustomLink>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground font-mono md:text-left">
            © {currentYear} Tech-A-Thon All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
