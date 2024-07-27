import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hackathon TeamFinder",
  description: "A Hackathon Team Builder platform that simplifies the process of finding and collaborating with potential team members based on their skills, roles, and expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          {children}
        </ClerkProvider>

      </body>
    </html>
  );
}
