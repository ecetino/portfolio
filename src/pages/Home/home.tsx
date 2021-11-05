import React from 'react';
import './styles.scss';

interface Props {
};

export const Home = ({  }: Props) => {
    return(
        <div className="home-container flex-col-center">
            <h1>Edgar Cetino</h1>
            <h3>Software Engineer</h3>
        </div>
    );
};

