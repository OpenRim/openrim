import React from 'react';
import { Button as BootstrapButton, type ButtonProps } from 'react-bootstrap';

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <BootstrapButton {...props}>
      {children}
    </BootstrapButton>
  );
};

export default Button;