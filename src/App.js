import React, { Component, Fragment } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Heroes } from './features/Heroes'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Heroes />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
