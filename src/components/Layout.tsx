import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function Layout() {
  const [bg, setBg] = useState("");

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 16);

    const bgs = [
      "bg-couple",
      "bg-siargao",
      "bg-siargao2",
      "bg-bucketlist",
      "bg-bucket2",
      "bg-vatican",
      "bg-vatican1",
      "bg-turkey",
      "bg-northernlights",
      "bg-hotair",
      "bg-camping",
      "bg-camping2",
      "bg-cherry",
      "bg-korea1",
      "bg-korea2",
      "bg-travel",
    ];

    setBg(bgs[randomNumber]);
  }, []);
  return (
    <main className={`h-screen mx-auto relative bg-cover bg-center bg-no-repeat ${bg}`}>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default Layout;
