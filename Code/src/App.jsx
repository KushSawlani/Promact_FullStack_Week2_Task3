import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';


function App() {
  const { loginWithRedirect,logout,user, isAuthenticated, isLoading } = useAuth0();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's login status
  const [userName, setUserName] = useState('John Doe'); // State to store user's name

  const handleLogin = () => {
    // Simulate login functionality
    loginWithRedirect()
    
  };

  const handleLogout = () => {
    // Simulate logout functionality
    logout({ logoutParams: { returnTo: window.location.origin } })

  };

  return (
    <div className="App">
      <nav className="navbar">
        
        <div className="container">
          <a href="#" className="logo">My Webpage</a>
          <div className="navbar-menu">
            <ul className="menu-items">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="user-info">
            {isAuthenticated ? (
            
              // Display user info if logged in
              <div className="user-info-logged-in">
                {console.log(user)}
                <span className="user-name">Hi, {user.name}</span>
                <img src={user.picture} alt="Profile" className="profile-icon" />
                <button className="btn" onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              // Display login button if not logged in
              <button className="btn" onClick={handleLogin}>Login</button>
            )}
          </div>
        </div>
      </nav>
      {/* <ImageCarousel className="carousel-container"/> */}
    </div>
  );
}

export default App;
