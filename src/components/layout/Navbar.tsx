import { AlignJustify, Moon, Sun, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, useCurrentUser } from "@/redux/features/auth/authSlice";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useAppSelector(useCurrentUser);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  // Dark Mood

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");

  // Dark Or Light Mood effect
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Dark Or Light Mood handler
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header>
      {/* Main Navigation Menu */}
      <nav className="relative flex items-center justify-between dark:bg-slate-800 dark:text-white py-5 px-4 lg:px-20">
        {/* Logo section */}
        <Link to="/">
          <img className="w-20" src={logo} alt="iEvent Logo" />
        </Link>
        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className="text-slate-950 dark:text-white font-semibold"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className="text-slate-950 dark:text-white font-semibold"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/supplies"
              className="text-slate-950 dark:text-white font-semibold"
            >
              All Supplies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/volunteer"
              className="text-slate-950 dark:text-white font-semibold"
            >
              Volunteer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community"
              className="text-slate-950 dark:text-white font-semibold"
            >
              Community
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/leaderboard"
              className="text-slate-950 dark:text-white font-semibold"
            >
              Leaderboard
            </NavLink>
          </li>
          <div className="cursor-pointer">
            {isDarkMode ? (
              <div className="text-xl" onClick={handleThemeSwitch}>
                <Sun />
              </div>
            ) : (
              <div className="text-xl" onClick={handleThemeSwitch}>
                <Moon />
              </div>
            )}
          </div>

          {user?.email ? (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  className="text-slate-950 dark:text-white font-semibold"
                >
                  Dashboard
                </NavLink>
              </li>

              <li>
                <Button onClick={handleLogout}>Logout</Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  className="text-slate-950 dark:text-white font-semibold"
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <div className="flex justify-center items-center lg:hidden">
          {/* Mobile Navbar Section */}
          <div>
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <AlignJustify className="text-xl mt-1 text-gray-600" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-30">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <img className="w-16" src={logo} alt="" />
                      </Link>
                    </div>
                    {/* Dropdown Menu Close Button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XCircle className="text-xl text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/"
                          className="text-slate-950 dark:text-white font-semibold"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/about-us"
                          className="text-slate-950 dark:text-white font-semibold"
                        >
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/supplies"
                          className="text-slate-950 dark:text-white font-semibold"
                        >
                          All Supplies
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/volunteer"
                          className="text-slate-950 dark:text-white font-semibold"
                        >
                          Volunteer
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/community"
                          className="text-slate-950 dark:text-white font-semibold"
                        >
                          Community
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/leaderboard"
                          className="text-slate-950 dark:text-white font-semibold"
                        >
                          Leaderboard
                        </NavLink>
                      </li>
                      <div className="cursor-pointer">
                        {isDarkMode ? (
                          <div className="text-xl" onClick={handleThemeSwitch}>
                            <Sun />
                          </div>
                        ) : (
                          <div className="text-xl" onClick={handleThemeSwitch}>
                            <Moon />
                          </div>
                        )}
                      </div>

                      {user?.email ? (
                        <>
                          <li>
                            <NavLink
                              to="/dashboard"
                              className="text-slate-950 dark:text-white font-semibold"
                            >
                              Dashboard
                            </NavLink>
                          </li>

                          <li>
                            <Button onClick={handleLogout}>Logout</Button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <NavLink
                              to="/login"
                              className="text-slate-950 dark:text-white font-semibold"
                            >
                              Login
                            </NavLink>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
