import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import configureStyles from './configure.styles';
import { user, configured } from '../login/user.selectors';
import { emptyPlan, majors, minors } from 'client/shared/studyPlans';
import ProgramList from './programList';

class Configure extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={configureStyles.container}>
        <button
          className={configureStyles.saveButton}
          disabled={!this.props.configured}
        >
          Update Account & Go To Dashboard
        </button>
        <div className={configureStyles.allLists}>
          <div className={configureStyles.allProgs}>
            <ProgramList
              programs={majors}
              title='Available Majors'
            />
            <ProgramList
              programs={minors}
              title='Available Minors'
            />
          </div>
          <div className={configureStyles.yourProgs}>
            <ProgramList
              programs={
                this.props.configured
                  ? this.props.user.studyPlan.programs.majors
                  : []
              }
              title='Your Majors'
            />
            <ProgramList
              programs={
                this.props.configured
                  ? this.props.user.studyPlan.programs.minors
                  : []
              }
              title='Your Minors'
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  user: user(state),
  configured: configured(state)
});

const mapDispatch = ({

});

export default connect(mapState, mapDispatch)(Configure);

Configure.PropTypes = {
  user: PropTypes.object.isRequired
};
