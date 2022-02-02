import React from 'react';

import './styles.scss';

interface ContactIconProps {
  iconName: string,
  pathlink: string,
};

export const ContactIcon = ({
  iconName,
  pathlink
}: ContactIconProps) => {
  return (
    <div className="contact-icon-wrapper">
      <a href={pathlink} target="_blank" rel="noreferrer">
        <i className={`icon bi-${iconName} icon-darkblue`} role="img" aria-label={iconName} />
      </a>
    </div>
  );
};

export default ContactIcon;
