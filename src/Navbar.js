import React from 'react';
import './Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <b>
            <button
              onClick={() => setActiveSection('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </button>
          </b>
        </li>
        <li>
          <button
            onClick={() => setActiveSection('about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            About Us
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection('contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
