import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <h1> Navbar/ Component Here</h1>
      <section className="">
        <div className="">{children}</div>
      </section>
    </main>
  );
};

export default Layout;
