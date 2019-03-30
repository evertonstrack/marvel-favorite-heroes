import React from 'react';
import Marvel from '../../assets/images/marvel.svg';
import './header.scss';

export const Header = () => (
  <header className="header">
    <h1>
      <img src={Marvel} alt="Marvel Studios" />
    </h1>
  </header>
);
