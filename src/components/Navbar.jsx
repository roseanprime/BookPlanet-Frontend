import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/auth.context";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>

      <div className={`dropdown ${isOpen ? "open" : ""}`}>
        <button className="dropbtn" onClick={toggleMenu}>
          &#9776;
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/search">Search for a book</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
