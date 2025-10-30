"use client";

import { useState, useEffect } from "react";
import PreLoader from "@/components/pre-loader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const preloaderRun = window.sessionStorage.getItem("preLoaderHasRun") === "true";

    if (preloaderRun) {
      setShowPreloader(false);
    } else {
      const timer = setTimeout(() => {
        setShowPreloader(false);
        window.sessionStorage.setItem("preLoaderHasRun", "true");
      }, 3000); // Adjust the duration as needed
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isClient || showPreloader) {
    return <PreLoader />;
  }

  return <>{children}</>;
}
