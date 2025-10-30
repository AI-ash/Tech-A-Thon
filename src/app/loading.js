"use client";

export default function LoadingAnimation({ size = 28 }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
      <h3
        className="font-headline font-bold tracking-tighter glitch-text text-center"
        style={{ fontSize: size }}
        data-text="Loading"
      >
        Loading
      </h3>

      {/* Loading bar */}
      <div
        className="w-full max-w-xl"
        role="progressbar"
        aria-busy="true"
        aria-label="Loading"
      >
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-blue-400 to-green-600 rounded-full animate-fill" />
        </div>
      </div>
    </div>
  );
}
