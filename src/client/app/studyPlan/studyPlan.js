import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './studyPlan.styles';
import { user } from 'client/app/login/user.selectors';
import { INIT_STUDY_PLAN, RESET_PLAN, SAVE_PLAN, ADD_SEMESTER } from './studyPlan.reducer';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Column from './column';
import Course from './course';

class StudyPlan extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initPlan(this.props.user.studyPlan);
  }

  handleReset = () => this.props.resetPlan(this.props.user.studyPlan);

  handleSave = () => this.props.savePlan();

  newSemester = () => this.props.addSemester();

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className={styles.container}>
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.button} ${styles.reset}`}
              onClick={this.handleReset}
            >
              Reset Study Plan
            </button>
            <button
              className={`${styles.button} ${styles.save}`}
              onClick={this.handleSave}
            >
              Save Study Plan
            </button>
          </div>
          <div className={styles.columnGroup}>
            <div className={styles.half}>
              {this.props.majors.map((major, mIndex) =>
                <Column title={major.name} key={mIndex}>
                  {major.semesters.map((semester, sIndex) =>
                    <Column title={'Semester ' + (sIndex + 1)} sub={true} key={sIndex}>
                      {semester.map((course, cIndex) =>
                        <Course course={course} key={cIndex}/>
                      )}
                    </Column>
                  )}
                </Column>
              )}
              {this.props.minors.map((minor, mIndex) =>
                <Column title={minor.name} key={mIndex}>
                  {minor.courses.map((course, cIndex) =>
                    <Course course={course} key={cIndex}/>
                  )}
                </Column>
              )}
              <Column title='Additional Courses'>
                Additional Courses
              </Column>
            </div>
            <div className={styles.half}>
              <Column
                title='Study Plan'
                main={true}
                add={this.newSemester}
              >
                {this.props.semesters.map((semester, sIndex) =>
                  <Column title={'Semester ' + (sIndex + 1)} sub={true} key={sIndex}>
                    {semester.map((course, cIndex) =>
                      <Course course={course} key={cIndex}/>
                    )}
                  </Column>
                )}
              </Column>
            </div>
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapState = (state) => ({
  user: user(state),
  majors: state.manage.studyPlan.programs.majors,
  minors: state.manage.studyPlan.programs.minors,
  semesters: state.manage.studyPlan.semesters
});

const mapDispatch = {
  initPlan: INIT_STUDY_PLAN,
  resetPlan: RESET_PLAN,
  savePlan: SAVE_PLAN,
  addSemester: ADD_SEMESTER
};

export default connect(mapState, mapDispatch)(StudyPlan);

StudyPlan.PropTypes = {};
