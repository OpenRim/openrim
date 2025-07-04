import React from 'react';
import { Card as BootstrapCard, type CardProps } from 'react-bootstrap';

interface CustomCardProps extends CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CustomCardProps> = ({ children, ...props }) => {
  return (
    <BootstrapCard {...props}>
      {children}
    </BootstrapCard>
  );
};

export default Card;