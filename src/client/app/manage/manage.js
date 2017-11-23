import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './manage.styles';
import { user } from 'client/app/login/user.selectors';
import { INIT_STUDY_PLAN, RESET_PLAN, SAVE_PLAN, ADD_SEMESTER } from './manage.reducer';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Column from './column';
import Course from './course';
import Major from './major';
import Minor from './minor';
import Additional from './additional';
import StudyPlan from './studyPlan';

class Manage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initPlan(this.props.user.studyPlan.plan);
  }

  handleReset = () => this.props.resetPlan(this.props.user.studyPlan.programs);

  handleSave = () => this.props.savePlan();

  newSemester = () => this.props.addSemester();

  newCourse = () => {};

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    return;
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className={styles.container}>
          <div className={styles.buttonGroup}>
            <button className={styles.reset} onClick={this.handleReset}>
              Reset Study Plan
            </button>
            <button className={styles.save} onClick={this.handleSave}>
              Save Study Plan
            </button>
          </div>
          <div className={styles.columnGroup}>
            <div className={styles.half}>
              {this.props.majors.map((major, index) =>
                <Major major={major} key={index}/>
              )}
              {this.props.minors.map((minor, index) =>
                <Minor minor={minor} key={index}/>
              )}
              <Additional courses={this.props.additional} add={this.newCourse}/>
            </div>
            <div className={styles.half}>
              <StudyPlan semesters={this.props.semesters} add={this.newSemester}/>
            </div>
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapState = (state) => ({
  user: user(state),
  majors: state.manage.studyPlan.majors,
  minors: state.manage.studyPlan.minors,
  additional: state.manage.studyPlan.additional,
  semesters: state.manage.studyPlan.semesters
});

const mapDispatch = {
  initPlan: INIT_STUDY_PLAN,
  resetPlan: RESET_PLAN,
  savePlan: SAVE_PLAN.PENDING,
  addSemester: ADD_SEMESTER
};

export default connect(mapState, mapDispatch)(Manage);

Manage.PropTypes = {
  user: PropTypes.object.isRequired,
  majors: PropTypes.object.isRequired,
  minors: PropTypes.object.isRequired,
  additional: PropTypes.object.isRequired,
  semesters: PropTypes.object.isRequired,
  initPlan: PropTypes.func.isRequired,
  resetPlan: PropTypes.func.isRequired,
  savePlan: PropTypes.func.isRequired,
  addSemester: PropTypes.func.isRequired
};
