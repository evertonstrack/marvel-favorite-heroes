import React from 'react';
import Marvel from '../../assets/images/marvel.svg';
import './header.scss';

export const Header = () => (
  <header className="header" role="banner">
    <h1>
      <img src={Marvel} alt="Marvel Favorite Heroes" />
    </h1>
  </header>
);
