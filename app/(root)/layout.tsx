import React from "react";
import { Inter } from 'next/font/google';
import { cn } from '../../lib/utils';
import './../globals.css';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="">
          <section className="">
            <div className="">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
};

export default Layout;