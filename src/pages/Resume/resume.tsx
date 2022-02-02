import React from 'react';

import './styles.scss';

export const Resume = () => {
    return(
        <div className="resume">
            <h2>Resume</h2>
            <div className='flex-col'>
                <a className="mb20" href='/Edgar_Cetino_Resume.pdf' download>Click to Download PDF</a>
                <img src={require('../../assets/images/Edgar_Cetino_Resume.png').default} alt='resume' />
            </div>
        </div>
    );
};
