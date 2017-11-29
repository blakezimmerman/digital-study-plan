import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './dashboard.styles';
import { creditsCompleted, reqCredits, upcomingSemester } from '../login/user.selectors';
import { routeActions } from '../../router/router';
import ProgressBar from './progressBar';
import NextSemester from './nextSemester';

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
        <ProgressBar
          cur={this.props.creditsCompleted}
          curName='Credits Completed'
          total={this.props.reqCredits}
          totalName='Credits Required'
        />
        <NextSemester semester={this.props.upcomingSemester}/>
      </div>
    );
  }
}

const mapState = (state) => ({
  creditsCompleted: creditsCompleted(state),
  reqCredits: reqCredits(state),
  upcomingSemester: upcomingSemester(state)
});

const mapDispatch = {
  studyPlanRoute: routeActions.STUDY_PLAN
};

export default connect(mapState, mapDispatch)(Dashboard);

Dashboard.PropTypes = {
  creditsCompleted: PropTypes.number.isRequired,
  reqCredits: PropTypes.number.isRequired,
  upcomingSemester: PropTypes.array.isRequired,
  studyPlanRoute: PropTypes.func.isRequired
};
