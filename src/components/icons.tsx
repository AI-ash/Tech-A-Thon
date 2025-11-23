import { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100.000000 100.000000"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g
      transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
      fill="currentColor"
      stroke="none"
    >
      <path d="M423 959 c-174 -29 -304 -130 -370 -289 -23 -56 -27 -79 -28 -165 0 -82 4 -112 24 -162 22 -60 25 -63 57 -63 l33 0 -31 67 c-28 64 -30 73 -26 168 3 83 9 110 31 155 93 193 312 286 516 220 36 -12 75 -28 85 -36 19 -14 19 -15 -19 -54 l-39 -40 117 0 c64 0 117 4 117 9 0 20 -125 122 -185 151 -96 46 -176 57 -282 39z" />
      <path d="M688 715 c-7 -19 -38 -168 -38 -180 0 -14 19 -3 25 15 12 38 55 12 55 -33 0 -16 -68 -29 -85 -17 -5 5 -31 6 -57 3 -40 -5 -48 -9 -48 -26 0 -11 11 -30 25 -43 22 -20 25 -32 25 -89 l0 -65 85 0 85 0 0 80 c0 62 3 82 15 86 20 8 19 44 -1 44 -24 0 -67 105 -74 180 -3 42 -8 58 -12 45z" />
      <path d="M450 690 c-16 -18 -38 -30 -53 -30 -43 0 -90 -41 -108 -94 -18 -55 -20 -53 -43 27 -17 60 -36 76 -36 31 0 -33 40 -184 53 -201 5 -7 21 -13 34 -13 21 0 24 -4 19 -22 -3 -13 -6 -26 -6 -30 0 -5 -15 -8 -34 -8 -19 0 -38 -5 -42 -11 -3 -6 1 -10 12 -9 42 5 46 0 20 -21 -15 -12 -25 -24 -22 -26 3 -3 17 4 32 16 34 27 58 27 86 -1 12 -12 37 -23 55 -25 35 -4 38 5 18 51 -10 24 17 75 62 116 28 26 32 34 23 51 -13 23 -5 41 18 38 10 -1 30 -1 46 0 l29 1 -23 25 c-29 30 -43 31 -87 4 -39 -25 -44 -22 -46 23 -2 29 1 33 22 33 17 0 30 10 43 33 18 33 18 34 -4 52 -31 26 -35 25 -68 -10z m-40 -161 c0 -12 -7 -19 -20 -19 -22 0 -26 20 -8 38 15 15 28 6 28 -19z m0 -126 c-1 -13 -34 -49 -52 -55 -17 -7 -28 9 -28 43 0 16 7 19 40 19 22 0 40 -3 40 -7z" />
      <path d="M875 693 c38 -87 47 -131 42 -208 -7 -121 -35 -185 -121 -271 -85 -85 -149 -114 -268 -122 -79 -5 -144 6 -211 35 l-38 16 38 39 37 38 -117 0 -117 0 16 -25 c9 -14 38 -41 64 -60 158 -116 344 -134 515 -51 97 48 166 120 218 226 41 83 42 87 41 185 0 79 -5 112 -23 158 -20 52 -25 57 -53 57 -25 0 -29 -3 -23 -17z" />
    </g>
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
