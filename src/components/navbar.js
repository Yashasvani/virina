import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/impact">Impact</Link>
        </li>
        <li>
          <Link to="/Achievement">Achievement</Link>
        </li>
        <li>
          <Link to="/Campaign">Campaign</Link>
        </li>
        <li>
          <Link to="/Develoment">Development</Link>
        </li>
        <li>
          <Link to="/joinus">Join us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
