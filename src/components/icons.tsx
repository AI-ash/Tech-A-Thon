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

export const IconGitHub = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
  
  export const IconTwitter = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3 4.3 3 6 0 1.3-1.1 2.5-2.5 2.5C20.5 22 0 22 0 22s2.5-1.3 4-3.3c-2.2 1.3-4-2.3-4-4s2.5-2.7 4-2.7c-2.2-1.3-2-4.3 0-5.3s4-1.3 4-1.3z" />
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
