import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/">Strona główna</Link>
      <Link to="/">Zaloguj się</Link>
      <Link to="/SignUp">Załóż konto</Link>
    </nav>
  );
};

export default Navbar;