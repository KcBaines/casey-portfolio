import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="navbar-links">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/portfolio" className="nav-link">
        Portfolio
      </Link>
      <div
        className="nav-link contact-link"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        Contact
        {showDropdown && (
          <div className="dropdown">
            <a href="tel:+27747788888">Call</a>
            <a href="mailto:cj.kcbaines@gmail.com">Email</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
