import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Hackathon TeamFinder",
  description:
    "A Hackathon Team Builder platform that simplifies the process of finding and collaborating with potential team members based on their skills, roles, and expertise.",
};

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
