import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
};

export const Header = ({ }: Props) => {
    return (
        <header>
            <nav className="header-home-nav">
                <Link to="home">Home</Link>
            </nav>
            <nav className="header-nav-links">
                <Link to="about">About</Link>
                <Link to="projects">Projects</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </header>
    );
};
