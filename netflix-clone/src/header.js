import React from 'react';
import './Header.css'; // Extract header-specific styles if needed

const Header = () => {
  return (
    <header className="header">
      <nav>
        <img src="/images/logo.png" className="logo" alt="logo" />
        <select name="lang" id="lang">
          <option value="/">English</option>
          <option value="">Hindi</option>
        </select>
        <button>
          <a href="https://www.netflix.com/in/login">Sign In</a>
        </button>
      </nav>
      <div className="head-content">
        <h1>Enjoy big movies, hit series and more from ₹149.</h1>
        <p>Join today. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to create or restart your
          membership.
        </p>
        <form className="email">
          <input type="email" placeholder="Email address" required />
          <button>Get Started</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
