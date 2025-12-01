import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css"; // make sure your CSS variables are loaded

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>
            CourseMaster
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li>
              <Link
                to="/"
                className="px-2 py-1 rounded"
                style={{ color: "var(--color-midText)" }}
                onMouseOver={e => e.currentTarget.style.color = "var(--color-secondary)"}
                onMouseOut={e => e.currentTarget.style.color = "var(--color-midText)"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="px-2 py-1 rounded"
                style={{ color: "var(--color-midText)" }}
                onMouseOver={e => e.currentTarget.style.color = "var(--color-secondary)"}
                onMouseOut={e => e.currentTarget.style.color = "var(--color-midText)"}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="px-2 py-1 rounded"
                style={{ color: "var(--color-midText)" }}
                onMouseOver={e => e.currentTarget.style.color = "var(--color-secondary)"}
                onMouseOut={e => e.currentTarget.style.color = "var(--color-midText)"}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-2 py-1 rounded"
                style={{ color: "var(--color-midText)" }}
                onMouseOver={e => e.currentTarget.style.color = "var(--color-secondary)"}
                onMouseOut={e => e.currentTarget.style.color = "var(--color-midText)"}
              >
                About
              </Link>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded border"
              style={{
                color: "var(--color-primary)",
                borderColor: "var(--color-primary)"
              }}
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 rounded"
              style={{
                color: "var(--color-background)",
                backgroundColor: "var(--color-primary)"
              }}
            >
              Register
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(true)}
              className="text-midText text-3xl"
              style={{ color: "var(--color-midText)" }}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-20 z-40"
            onClick={() => setOpen(false)}
          ></div>

          <div
            className="fixed top-0 right-0 w-64 h-full z-50 p-6"
            style={{ backgroundColor: "var(--color-background)" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="text-2xl mb-6"
              style={{ color: "var(--color-midText)" }}
            >
              ✕
            </button>

            {/* Menu Items */}
            <ul className="flex flex-col space-y-4 text-lg font-medium">
              <li>
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  style={{ color: "var(--color-midText)" }}
                  onMouseOver={e => e.currentTarget.style.color = "var(--color-secondary)"}
                  onMouseOut={e => e.currentTarget.style.color = "var(--color-midText)"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  onClick={() => setOpen(false)}
                  style={{ color: "var(--color-midText)" }}
                  onMouseOver={e => e.currentTarget.style.color = "var(--color-secondary)"}
                  onMouseOut={e => e.currentTarget.style.color = "var(--color-midText)"}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  style={{ color: "var(--color-midText)" }}
                  onMouseOver={e => e.currentTarget.style.color = "var(--color-secondary)"}
                  onMouseOut={e => e.currentTarget.style.color = "var(--color-midText)"}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setOpen(false)}
                  style={{ color: "var(--color-midText)" }}
                  onMouseOver={e => e.currentTarget.style.color = "var(--color-secondary)"}
                  onMouseOut={e => e.currentTarget.style.color = "var(--color-midText)"}
                >
                  About
                </Link>
              </li>
            </ul>

            {/* Auth Buttons */}
            <div className="mt-8 flex flex-col space-y-3">
              <Link
                onClick={() => setOpen(false)}
                to="/login"
                className="px-4 py-2 rounded border text-center"
                style={{
                  color: "var(--color-primary)",
                  borderColor: "var(--color-primary)"
                }}
              >
                Login
              </Link>

              <Link
                onClick={() => setOpen(false)}
                to="/register"
                className="px-4 py-2 rounded text-center"
                style={{
                  color: "var(--color-background)",
                  backgroundColor: "var(--color-primary)"
                }}
              >
                Register
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
