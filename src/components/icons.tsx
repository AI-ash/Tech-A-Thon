import { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.12 15.12c-.28 0-.5-.22-.5-.5v-2.1l-.8.6c-.18.12-.42.15-.63.06-.2-.08-.34-.28-.34-.5V10.8c0-.28.22-.5.5-.5s.5.22.5.5v3.25l1.62-1.22c.18-.14.42-.16.63-.06.2.08.35.28.35.5v4.85c0 .28-.22.5-.5.5zm4.82-1.95-1.9-2.52c-.15-.2-.17-.45-.06-.67.12-.22.34-.36.58-.36h.88V9.1c0-.28.22-.5.5-.5s.5.22.5.5v3.52h.88c.24 0 .46.14.58.36.1.22.08.48-.06.67l-1.9 2.52c-.15.2-.4.2-.55 0z" />
  </svg>
);

export const IconInstagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const IconX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Two diagonal strokes forming the "X" mark */}
    <path d="M4.5 4.5 L19.5 19.5" />
    <path d="M19.5 4.5 L4.5 19.5" />
    {/* Slight stylistic taper for a more 'brand-like' look (subtle) */}
    <path d="M7 3.5 L12 9.5 L17 3.5" opacity="0.0" />
  </svg>
);

export const IconLinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);