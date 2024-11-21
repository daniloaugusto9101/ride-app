// src/components/Layout.js
import React from "react";
import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main className="max-w-6xl  mx-auto px-2 py-2 ">{children}</main>
    </>
  );
};

export default Layout;
