import { useContext } from "react";
import { Context } from "../context/context";
import { Link } from "react-router-dom";

function Navbar() {
  const { setShowContent } = useContext(Context);
  return (
    <header className="mx-auto max-w-lg bg-black/50">
      <nav className="flex items-center justify-between px-3 py-2">
        <Link to="/">
          <h2 className="text-white text-2xl font-bold">🫰🏻 420</h2>
        </Link>

        <ul className="flex items-center space-x-2 text-3xl">
          <li>
            <Link to="/">🍜</Link>
          </li>
          <li>
            <Link to="/travel">🧭</Link>
          </li>
          <li>
            <Link to="/requests">🍽️</Link>
          </li>
          <li onClick={() => setShowContent((prev) => !prev)} className="cursor-pointer">
            🫣
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
