import { useContext } from "react";
import { Context } from "../context/context";

function Navbar() {
  const { setShowContent } = useContext(Context);
  return (
    <header className="mb-8 bg-black/50">
      <nav className="flex items-center justify-between px-3 py-2">
        <div>
          <h2 className="text-white text-2xl font-bold">🫰🏻 420</h2>
        </div>

        <ul className="flex items-center space-x-2 text-3xl">
          <li>🍜</li>
          <li>🧭</li>
          <li>👨🏼‍🍳</li>
          <li onClick={() => setShowContent((prev) => !prev)}>🫣</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
