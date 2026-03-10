// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} School Management App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;