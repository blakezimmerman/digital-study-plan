import * as React from 'react';
import appStyles from './appStyles';
import Link from 'redux-first-router-link';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Welcome to Digital Study Plan
        <div><Link to='/login'>Login</Link></div>
        <div><Link to='/dashboard'>Dashboard</Link></div>
      </div>
    );
  }
}

export default App;
