import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './dashboard.styles';
import { creditsCompleted, reqCredits, upcomingCourses } from '../login/user.selectors';
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
  creditsCompleted: creditsCompleted(state),
  reqCredits: reqCredits(state),
  upcomingCourses: upcomingCourses(state)
});

const mapDispatch = {
  studyPlanRoute: routeActions.STUDY_PLAN
};

export default connect(mapState, mapDispatch)(Dashboard);

Dashboard.PropTypes = {
  creditsCompleted: PropTypes.number.isRequired,
  reqCredits: PropTypes.number.isRequired,
  upcomingCourses: PropTypes.array.isRequired,
  studyPlanRoute: PropTypes.func.isRequired
};
