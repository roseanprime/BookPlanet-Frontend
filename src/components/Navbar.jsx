import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/auth.context";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { logout, loggedIn } = useContext(AuthContext);

  const gradientColors = ["blue", "red", "green", "pink"]; // Define an array of colors for the gradient

  const gradientStyle = {
    background: `linear-gradient(to right, ${gradientColors.join(", ")})`,
    backgroundSize: "200% 100%",
    animation: "fadeIn 1s, riverFlow 5s linear infinite",
  };

  const fadeInAnimation = `
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;

  const riverFlowAnimation = `
    @keyframes riverFlow {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `;

  return (
    <nav className="navbar fixed-top" style={gradientStyle}>
      <style>{fadeInAnimation}</style>
      <style>{riverFlowAnimation}</style>
      <div className="navbar-brand">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-links">
        <Link to="/books">Books</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/search">Search for a book</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/AddBooks">AddBook</Link>
        <Link to="/" onClick={() => logout()}>
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
