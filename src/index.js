import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import { Header } from './components/Header';

//import About from './components/About';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={Header} />
   
    </Route>
  </Router>), document.getElementById('content')
);
