import React, { Fragment } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Heroes } from './features/Heroes'

export const App = () => (
  <Fragment>
    <Header />
    <Heroes />
    <Footer />
  </Fragment>
);