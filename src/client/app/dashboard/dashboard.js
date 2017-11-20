import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './dashboard.styles';
import { user } from '../login/user.selectors';
import { routeActions } from '../../router/router';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  toStudyPlan = () => this.props.studyPlanRoute();

  render() {
    return (
      <div className={styles.container}>
        <button
          className={styles.manageButton}
          onClick={this.toStudyPlan}
        >
          Manage Study Plan
        </button>
      </div>
    );
  }
}

const mapState = (state) => ({
  user: user(state)
});

const mapDispatch = {
  studyPlanRoute: routeActions.STUDY_PLAN
};

export default connect(mapState, mapDispatch)(Dashboard);

Dashboard.PropTypes = {
  user: PropTypes.object.isRequired,
  studyPlanRoute: PropTypes.func.isRequired
};
