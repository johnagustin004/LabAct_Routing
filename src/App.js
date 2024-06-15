import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './App.css';
import Title from './Title';
import Navbar from './Navbar';
import Body from './Body';
import AboutUs from './AboutUs'; // Assuming you have an AboutUs component
import Contact from './Contact'; // Assuming you have a Contact component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Body />;
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <Contact />;
      default:
        return <Body />;
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Title />
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
          {renderSection()}
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
