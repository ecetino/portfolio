import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

import { HamburgerMenu } from '../HamburgerMenu/hamburgerMenu';

import './styles.scss';

export const Header = () => {
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

    return (
        <header className="flex-center">
            <nav className="header-home-nav flex-jc-fs">
                <Link to="/">Edgar Cetino</Link>
            </nav>
            <nav className="header-nav-links">
                <Link to="about">About</Link>
                <Link to="projects">Projects</Link>
                <Link to="resume">Resume</Link>
                <Link to="contact">Contact</Link>
            </nav>
            <nav className="header-icon-links">
                <a href="https://github.com/ecetino" target="_blank" rel="noreferrer">
                    <i className="icon bi-github" role="img" aria-label="GitHub" />
                </a>
                <a href="mailto:1cetino.e@gmail.com">
                    <i className="icon bi-envelope" role="img" aria-label="Email" />
                </a>
                <a href="https://www.linkedin.com/in/ecetino/" target="_blank" rel="noreferrer">
                    <i className="icon bi-linkedin" role="img" aria-label="LinkedIn" />
                </a>
            </nav>
            <div className="header-hamburger" onClick={() => setShowHamburgerMenu(true)}>
                <i className="icon bi-list" role="img" aria-label="hamburger" />
            </div>
            {showHamburgerMenu &&
                <HamburgerMenu setShowHamburgerMenu={setShowHamburgerMenu} showHamburgerMenu={showHamburgerMenu} />
            }
        </header>
    );
};
