import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Tutorial",
  description: "Buioding a Next.js app with TypeScript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en">

    <body className={inter.className}>
    <Navbar />
    <main className={`px-8 py-20 max-w-6xl mx-auto`}>
      <Providers>
        {children}
      </Providers>

    </main>
    </body>
    </html>
  );
}
