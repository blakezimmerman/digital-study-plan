import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './studyPlan.styles';

class StudyPlan extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Study Plan Page
      </div>
    );
  }
}

const mapState = (state) => ({
  user: user(state),
  majors: user(state).programs.majors,
  minors: user(state).programs.minors
});

const mapDispatch = {};

export default connect()(StudyPlan);

StudyPlan.PropTypes = {};
