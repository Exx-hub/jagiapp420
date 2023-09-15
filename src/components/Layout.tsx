import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function Layout() {
  const [bg, setBg] = useState("");

  useEffect(() => {
    const bgs = [
      "bg-couple",
      "bg-siargao",
      "bg-siargao2",
      "bg-bucketlist",
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
      "bg-brazil",
      "bg-hanoi",
      "bg-hawaii",
      "bg-hk",
      "bg-santorini",
      "bg-taipei",
      "bg-train",
      "bg-vietnam",
    ];

    const randomNumber = Math.floor(Math.random() * bgs.length);

    setBg(bgs[randomNumber]);
  }, []);
  return (
    <main className={`max-w-md h-screen mx-auto relative bg-cover bg-center bg-no-repeat ${bg}`}>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default Layout;
