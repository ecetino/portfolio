import React from 'react';

import './styles.scss';

export interface ButtonProps {
  onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
  label: string;
  className?: string;
}

export const Button = ({
  onClick,
  label,
  className
}: ButtonProps) => {
  let buttonClassName = className ? `button ${className}` : 'button';

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button;