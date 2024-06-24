// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={footerSectionStyle}>
          <h3>About Us</h3>
          <p>Learn more about our mission and values.</p>
        </div>
        <div style={footerSectionStyle}>
          <h3>Contact</h3>
          <p>Email: info@mywebsite.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div style={footerSectionStyle}>
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com" style={linkStyle}>Facebook</a> | 
          <a href="https://www.twitter.com" style={linkStyle}> Twitter</a> | 
          <a href="https://www.instagram.com" style={linkStyle}> Instagram</a>
        </div>
      </div>
      <p style={footerBottomTextStyle}>© 2024 My Website. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const footerSectionStyle = {
  flex: '1 1 200px',
  margin: '10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 5px',
};

const footerBottomTextStyle = {
  marginTop: '20px',
  borderTop: '1px solid #444',
  paddingTop: '10px',
};

export default Footer;
