import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

interface Props {
    setShowHamburgerMenu: (showHamburgerMenu: boolean) => void;
    showHamburgerMenu: boolean;
};

export const HamburgerMenu = ({ setShowHamburgerMenu, showHamburgerMenu }: Props) => {
    
    let slideOut = showHamburgerMenu ? "" : "";

    return (
        <div className={`hamburger-menu-container flex-col ${slideOut}`}>
            <div className="hamburger-header flex-jc-sb flex-ai-c">
                <nav>
                    <Link to="/" onClick={() => setShowHamburgerMenu(false)}>Edgar Cetino</Link>
                </nav>
                <i
                    className="icon bi-x"
                    role="img"
                    aria-label="close"
                    onClick={() => setShowHamburgerMenu(false)} />
            </div>
            <nav className="hamburger-nav-links flex-col flex-jc-se" >
                <Link to="about" onClick={() => setShowHamburgerMenu(false)}>About</Link>
                <Link to="projects" onClick={() => setShowHamburgerMenu(false)}>Projects</Link>
                <Link to="resume" onClick={() => setShowHamburgerMenu(false)}>Resume</Link>
                <Link to="contact" onClick={() => setShowHamburgerMenu(false)}>Contact</Link>
            </nav>
            <nav className="hamburger-media-links flex-jc-c">
                <a href="https://github.com/ecetino" target="_blank">
                    <i className="icon bi-github" role="img" aria-label="GitHub" />
                </a>
                <a href="mailto:1cetino.e@gmail.com">
                    <i className="icon bi-envelope" role="img" aria-label="Email" />
                </a>
                <a href="https://www.linkedin.com/in/ecetino/" target="_blank">
                    <i className="icon bi-linkedin" role="img" aria-label="LinkedIn" />
                </a>
            </nav>
        </div>
    );
};
