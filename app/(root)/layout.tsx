import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <section className="">
        <div className="">{children}</div>
      </section>
    </main>
  );
};

export default Layout;
