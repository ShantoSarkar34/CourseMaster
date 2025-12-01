import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "../index.css";
import { AuthContext } from "../authProvider/AuthProvider";
import logo from "../assets/fav.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    window.location.reload();
  };

  // Function to return active class styles
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "px-2 py-1 rounded text-secondary font-semibold"
      : "px-2 py-1 rounded text-midText";

  return (
    <>
      <nav
        className="w-full"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className=" fixed z-50 py-4 w-full bg-slate-100">
          <div className="container mx-auto px-4 flex items-center justify-between">
            {/* Logo */}
            <NavLink
              to="/"
              className="text-2xl font-bold flex items-center"
              style={{ color: "var(--color-primary)" }}
            >
              <img src={logo} width={34} alt="log" />
              CourseMaster
            </NavLink>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 font-medium">
              <li>
                <NavLink to="/" className={getNavLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" className={getNavLinkClass}>
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className={getNavLinkClass}>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={getNavLinkClass}>
                  About
                </NavLink>
              </li>
            </ul>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {user ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded cursor-pointer"
                    style={{
                      color: "var(--color-background)",
                      backgroundColor: "var(--color-primary)",
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <NavLink
                    to="/login"
                    className="px-4 py-2 rounded border"
                    style={{
                      color: "var(--color-primary)",
                      borderColor: "var(--color-primary)",
                    }}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="px-4 py-2 rounded"
                    style={{
                      color: "var(--color-background)",
                      backgroundColor: "var(--color-primary)",
                    }}
                  >
                    Register
                  </NavLink>
                </>
              )}
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
                <NavLink
                  to="/"
                  onClick={() => setOpen(false)}
                  className={getNavLinkClass}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  onClick={() => setOpen(false)}
                  className={getNavLinkClass}
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className={getNavLinkClass}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className={getNavLinkClass}
                >
                  About
                </NavLink>
              </li>
            </ul>

            {/* Auth Buttons */}
            <div className="mt-8 flex flex-col space-y-3">
              <NavLink
                onClick={() => setOpen(false)}
                to="/login"
                className="px-4 py-2 rounded border text-center"
                style={{
                  color: "var(--color-primary)",
                  borderColor: "var(--color-primary)",
                }}
              >
                Login
              </NavLink>

              <NavLink
                onClick={() => setOpen(false)}
                to="/register"
                className="px-4 py-2 rounded text-center"
                style={{
                  color: "var(--color-background)",
                  backgroundColor: "var(--color-primary)",
                }}
              >
                Register
              </NavLink>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
