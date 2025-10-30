"use client";

import { useState, useEffect } from "react";
import PreLoader from "@/components/pre-loader";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Adjust the duration as needed
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && isHome ? (
        <PreLoader />
      ) : (
        children
      )}
    </>
  );
}
