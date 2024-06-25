// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={footerSectionStyle}>
          <h3>Virina Foundation</h3>
          <p>Address: Shastri Nagar,Meerut-250004,Uttar Pradesh,India</p>
        </div>
        <div style={footerSectionStyle}>
          <h3>Contact</h3>
          <p>Email: dhirendra@virinafoundation.com</p>
          <p>Phone: +91 8077256729</p>
        </div>
        <div style={footerSectionStyle}>
          <h3>Follow Us</h3>
          <a href="https://www.youtube.com/@virinafoundation6878" style={linkStyle}>Youtube</a> | 
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FvirinaNGO" style={linkStyle}> Twitter</a> | 
          <a href="https://www.instagram.com/virina.foundation/" style={linkStyle}> Instagram</a>
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
