import type { Metadata } from "next";
import { Orbitron, Roboto_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";
import { cn } from "@/lib/utils";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "TechAthon - Computer Science Department Society",
  description: "TechAthon is the official Computer Science Department Society of Atma Ram Sanatan Dharma College. Think. Build. Evolve.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          orbitron.variable,
          robotoMono.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
