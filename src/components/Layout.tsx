import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

function Layout() {
  const [bg] = useState("bg-siargao2");
  return (
    <main className={`h-screen mx-auto relative bg-siargao bg-cover bg-center bg-no-repeat ${bg}`}>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default Layout;
