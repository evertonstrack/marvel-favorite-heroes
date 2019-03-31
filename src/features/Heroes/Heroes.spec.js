import React from 'react';
import ReactDOM from 'react-dom';
import { HeroesController } from './Heroes.controller';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroesController />, div);
  ReactDOM.unmountComponentAtNode(div);
});
