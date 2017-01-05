import React from 'react';
import Nav  from './Nav';
import Header  from './Header';
import About  from './About';
// import { version } from '../../package.json';

const App = ({ children }) => (
  <div>
    <Nav />
    <Header />
    <About />
    <section>
      { children || 'Welcome to Franz Web Studio...More to come!' }
    </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
