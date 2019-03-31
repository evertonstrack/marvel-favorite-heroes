import React, { Fragment } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroesController } from './features/Heroes';

export const App = () => (
  <Fragment>
    <Header />
    <HeroesController />
    <Footer />
  </Fragment>
);