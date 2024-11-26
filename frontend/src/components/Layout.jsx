// src/components/Layout.js
import React from "react";
import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <>
      <main className="px-2 py-2 flex flex-col sm:h-screen">
        <Menu />
        {children}
      </main>
    </>
  );
};

export default Layout;
