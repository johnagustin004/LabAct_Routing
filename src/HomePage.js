import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './css/HomePage.css';

function HomePage() {
  const [activeTab, setActiveTab] = useState('home'); // Default to 'home' tab
  const navigate = useNavigate(); // useNavigate hook to programmatically navigate

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    // Clear any session data (example: localStorage.clear(), sessionStorage.clear())
    // Redirect user to login page
    navigate('/login'); // Redirect to '/login' route
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h2>Single Page Application</h2>
        <nav>
          <ul>
            <li>
              <button
                className={activeTab === 'home' ? 'active' : ''}
                onClick={() => handleTabChange('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={activeTab === 'about' ? 'active' : ''}
                onClick={() => handleTabChange('about')}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                className={activeTab === 'contact' ? 'active' : ''}
                onClick={() => handleTabChange('contact')}
              >
                Contact Us
              </button>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="home-body">
        {activeTab === 'home' && (
          <div>
            <h3>Welcome Home</h3>
            <p>This is the home page content.</p>
          </div>
        )}
        {activeTab === 'about' && (
          <div>
            <h3>About Us</h3>
            <p>This application is designed to demonstrate a simple SPA using React.</p>
          </div>
        )}
        {activeTab === 'contact' && (
          <div>
            <h3>Contact Us</h3>
            <form>
              <label>Name:</label>
              <input type="text" />

              <label>Email:</label>
              <input type="email" />

              <label>Message:</label>
              <textarea rows="4"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
