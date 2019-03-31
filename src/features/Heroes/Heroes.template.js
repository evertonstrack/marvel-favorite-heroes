import React from 'react';
import { Hero } from '../../components/Hero';
import './heroes.scss';

const Loading = () => (
  <div className="heroes-loading">
    <h3>Searching for Heroes.. </h3>
    <span className="heroes-loading__loader"></span>
  </div>
);

export const HeroesTemplate = ({
  heroes, 
  isLoading, 
  onClick
}) => (
  <section className="content">
    <header className="heroes-title">
      <h2 className="animated fadeInDown fast">
        <span className="small ">Hi! My name is Everton and these are </span>
        <span>My top 3 Super Heroes</span>
      </h2>
      <span className="arrow-down" onClick={onClick}></span>
    </header>

    <div className="heroes">
      { isLoading 
        ? <Loading />
        : Object.values(heroes).map(hero => <Hero key={hero.id} {...hero} /> )
      }
    </div>
  </section>
);