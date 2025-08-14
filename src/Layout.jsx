import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
function Layout({streak}) {
  return (
    <>
      <Navbar streak={streak} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
