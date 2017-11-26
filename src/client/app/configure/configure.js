import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './configure.styles';
import { user, configured } from '../login/user.selectors';
import { majors, minors } from 'client/shared/studyPlans';
import { CONFIG_INIT_PLAN, CONFIG_SUBMIT_PLAN, ADD_PROGRAM, REMOVE_PROGRAM } from './configure.reducer';
import ProgramList from './programList';

class Configure extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.configured) {
      this.props.initPlan(this.props.user.studyPlan);
    }
  }

  hasProgram = (type) => (program) => (
    this.props.programs[type].filter(x => x.name === program.name).length
  );

  addProgram = (program) => () => {
    this.props.addProgram(program);
  };

  removeProgram = (program) => () => {
    this.props.removeProgram(program);
  };

  updateAccount = () => {
    this.props.submitPlan();
  };

  render() {
    return (
      <div className={styles.container}>
        {this.props.submitReq.error &&
          <h3 className={styles.error}>{this.props.submitReq.error}</h3>
        }
        <button
          className={styles.saveButton}
          disabled={!this.props.programs.majors.length}
          onClick={this.updateAccount}
        >
          Update Account & Go To Dashboard
        </button>
        <div className={styles.allLists}>
          <div className={styles.allProgs}>
            <ProgramList
              programs={majors}
              title='Available Majors'
              add={true}
              disabled={this.hasProgram('majors')}
              callback={this.addProgram}
            />
            <ProgramList
              programs={minors}
              title='Available Minors'
              add={true}
              disabled={this.hasProgram('minors')}
              callback={this.addProgram}
            />
          </div>
          <div className={styles.yourProgs}>
            <ProgramList
              programs={this.props.programs.majors}
              title='Your Majors'
              add={false}
              callback={this.removeProgram}
            />
            <ProgramList
              programs={this.props.programs.minors}
              title='Your Minors'
              add={false}
              callback={this.removeProgram}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  user: user(state),
  configured: configured(state),
  programs: state.configure.studyPlan.programs,
  submitReq: state.configure.configSubmitReq
});

const mapDispatch = {
  initPlan: CONFIG_INIT_PLAN,
  submitPlan: CONFIG_SUBMIT_PLAN.PENDING,
  addProgram: ADD_PROGRAM,
  removeProgram: REMOVE_PROGRAM
};

export default connect(mapState, mapDispatch)(Configure);

Configure.PropTypes = {
  user: PropTypes.object.isRequired
};
