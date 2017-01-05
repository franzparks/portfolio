import React from 'react';
import Header  from './Header';
// import { version } from '../../package.json';

const App = ({ children }) => (
  <div>
    <Header />
    <section>
      { children || 'Welcome to Franz Web Studio...More to come!' }
    </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
