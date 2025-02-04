import React from 'react';
import './Card.css';

interface CardProps {
  name: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ name, url }) => {
  return (
    <div className="card">
      <span className="card-name">{name}</span>
      <span className="card-url">{url}</span>
    </div>
  );
};

export default Card;
