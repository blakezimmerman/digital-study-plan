import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Dashboard Page
      </div>
    );
  }
}

export default Dashboard;

Dashboard.PropTypes = {};
