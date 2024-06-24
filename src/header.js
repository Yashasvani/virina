// src/Header.js
import React from 'react';
import'./header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <div classname="left">VIRINA FOUNDATION</div>
                <div classname="right">
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">ABOUT</a></li>
                        <li><a href="/">IMPACT</a></li>
                        <li><a href="/">ACHIEVEMENT</a></li>
                        <li><a href="/">CAMAPAIGN</a></li>
                        <li><a href="/">DEVELOPMENT</a></li>
                        <li><a href="/">JOIN US</a></li>

                    </ul>
                </div>
            </nav>
        </header>
    );
};



export default Header;
