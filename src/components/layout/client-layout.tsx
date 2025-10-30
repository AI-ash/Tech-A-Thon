"use client";

import { useState, useEffect } from "react";
import PreLoader from "@/components/pre-loader";

// Helper to check if the pre-loader has run in the current session
const hasPreLoaderRun = () => {
    if (typeof window === 'undefined') return false;
    return window.sessionStorage.getItem("preLoaderHasRun") === "true";
}

// Helper to mark the pre-loader as having run
const setPreLoaderHasRun = () => {
    if (typeof window === 'undefined') return;
    window.sessionStorage.setItem("preLoaderHasRun", "true");
}


export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(!hasPreLoaderRun());

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setPreLoaderHasRun();
      }, 3000); // Adjust the duration as needed

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (isLoading) {
    return <PreLoader />;
  }

  return <>{children}</>;
}
