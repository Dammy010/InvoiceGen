import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const isActive = (path) => location.pathname === path;
  const navItem = "hover:text-blue-600 transition-colors";
  const handleCloseMenu = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" ref={navRef}>
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
          onClick={handleCloseMenu}
        >
          InvoiceGen
        </Link>

        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {["/", "/about", "/Saved-invoice", "/faq"].map((path, idx) => (
            <li key={idx}>
              <Link
                to={path}
                className={`${navItem} ${isActive(path) && "text-blue-600"}`}
              >
                {path === "/" ? "Home" : path.slice(1).replace("-", " ")}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/generate"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Generate
            </Link>
          </li>
        </ul>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-6 bg-white shadow-md text-sm font-medium transition-all">
          {["/", "/about", "/Saved-invoice", "/faq"].map((path, idx) => (
            <li key={idx}>
              <Link
                to={path}
                className={`${navItem} ${isActive(path) && "text-blue-600"}`}
                onClick={handleCloseMenu}
              >
                {path === "/" ? "Home" : path.slice(1).replace("-", " ")}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/generate"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={handleCloseMenu}
            >
              Generate
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
