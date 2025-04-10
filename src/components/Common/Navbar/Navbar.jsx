import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Assuming the styles are in Navbar.css
import { Link } from "react-router-dom";
import { NavbarLinks } from "../../../data/Navbar";

const Navbar = () => {
  // State to hold the current scroll position
  const [scrollY, setScrollY] = useState(0);

  // State to manage menu open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to update scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY); // Get current scroll position
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle menu toggle
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className=" top-0">
    <div className="relative z-[9999] w-full">
      <div className={`wrapper fixed max-md:sm bg-[#f5fbff] shadow-lg`}>
        <nav>
          <input type="checkbox" id="show-search" />
          <input
            type="checkbox"
            id="show-menu"
            checked={isMenuOpen}
            onChange={handleMenuToggle}
          />
          <label htmlFor="show-menu" className="menu-icon">
            <i className="fas fa-bars text-[#305764]"></i>
          </label>
          <div className="nav-content">
            <div className="logo">
              <Link to="/">
                <img src="/Home/logo.png" alt="" className="w-[100px]" />
              </Link>
            </div>

            <ul className="links">
              {NavbarLinks.map((item, index) =>
                item.submenu ? (
                  <li key={index} className={`lg:mx-3 text-[#305764]`}>
                    <div className="desktop-link clone-pointer font-semibold cursor-default">
                      {item.label} <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <input type="checkbox" id={item.label} />
                    <label
                      htmlFor={item.label}
                      className="flex items-center justify-between"
                    >
                      {item.label} <i className="fa-solid fa-angle-down"></i>
                    </label>
                    <ul>
                      {item.submenu.map((subitem, index) => (
                        <li
                          key={index}
                          onClick={closeMenu}
                          className={`bg-[#f5fbff] text-[#305764] hover:text-[#fff] hover:bg-[#305764]`}
                        >
                          <Link to={subitem.url}>{subitem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li
                    key={index}
                    onClick={closeMenu}
                    className={`text-[#305764]`}
                  >
                    <Link to={item.url}>{item.label}</Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <label htmlFor="show-search" className="search-icon">
            <i className="fas fa-search text-[#305764]"></i>
          </label>

          <form action="#" className="search-box">
            <input type="text" placeholder="Search Something..." required />
            <button type="submit" className="go-icon">
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </form>
        </nav>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
