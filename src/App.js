// src/App.js
import React from 'react';
import Header from './header.js';
import Footer from './footer.js';

const App = () => {
  return (
    <div style={appStyle}>
      <Header />
      <main style={mainStyle}>
        <h2>Welcome to My Website</h2>
        <p>This is the main content of the website.</p>
      </main>
      <Footer />
    </div>
  );
};

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  flex: '1',
  padding: '20px',
};

export default App;

