// src/components/Layout.js
import React from "react";
import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <>
      <main className="mx-auto px-2 py-2 flex flex-col h-screen">
        <Menu />
        {children}
      </main>
    </>
  );
};

export default Layout;
