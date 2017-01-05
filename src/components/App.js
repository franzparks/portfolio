import React from 'react';
import { Link } from 'react-router';
import { Header } from './Header';
//import { version } from '../../package.json';

const App = ({ children }) => (
  <div>
    <header>
      <h1>Welcome To Franz Web Studio!</h1>
      <Link to="/about">About</Link>
    
    </header>

    <section>
      {children || 'Welcome to Franz Web'}
    </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
