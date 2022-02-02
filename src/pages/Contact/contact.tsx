import React from 'react';

import ContactIcon from './components/ContactIcon/contactIcon';

import './styles.scss';

export const Contact = () => {
    return(
        <div className="contact">
            <h2>Contact</h2>
            <p>Thank you for taking the time to look over my portfolio. Please feel free to reach out to me by email, LinkedIn, or phone using my contact information listed below. Looking forward to connecting!</p>
            <div className="mt20">
                <p>1cetino.e@gmail.com</p>
                <p>(425) 457-9672</p>
            </div>
            <div className='flex mt20'>
                <ContactIcon iconName='github' pathlink='https://github.com/ecetino'/>
                <ContactIcon iconName='envelope' pathlink='mailto:1cetino.e@gmail.com'/>
                <ContactIcon iconName='linkedin' pathlink='https://www.linkedin.com/in/ecetino'/>
            </div>
        </div>
    );
};
