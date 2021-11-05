import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

interface Props {
};

export const Header = ({ }: Props) => {
    return (
        <header>
            <nav className="header-home-nav">
                <Link to="/">Edgar Cetino</Link>
            </nav>
            <nav className="header-nav-links">
                <Link to="about">About</Link>
                <Link to="projects">Projects</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </header>
    );
};
