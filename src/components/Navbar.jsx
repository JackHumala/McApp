// my navigation bar for my website, uses clickable menu icon on mobile screeen
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <span className="logo">
            <img className="logo-img" src="/images/McLogo.png" alt="McDonald's Logo" />
            McDonald's
          </span>
          <button className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="index.html" className="nav-link">HOME</a>
          </li>
          <li>
            <a href="Menu.html" className="nav-link">MENU</a>
          </li>
          <li>
            <a href="AboutUs.html" className="nav-link">ABOUT</a>
          </li>
          <li>
            <a href="ContactUs.html" className="nav-link">CONTACT</a>
          </li>
        </ul>

        </div>
     
    </nav>
  );
};

export default Navbar;