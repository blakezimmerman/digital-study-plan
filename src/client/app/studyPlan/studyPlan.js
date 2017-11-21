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

              {/* MAJOR */}
              {this.props.majors.map((major, mIndex) =>
                <Column title={major.name} key={mIndex}>
                  {major.semesters.map((semester, sIndex) =>
                    <Droppable droppableId={major.name + sIndex + 'drop'} key={sIndex}>
                      {(provided, snapshot) => (
                        <div ref={provided.innerRef}>
                          <Column title={'Semester ' + (sIndex + 1)} sub={true} key={sIndex}>
                            {semester.map((course, cIndex) =>
                              <Draggable draggableId={course.name + mIndex + sIndex + cIndex} key={cIndex}>
                                {(provided, snapshot) => (
                                  <div>
                                    <div ref={provided.innerRef} {...provided.dragHandleProps} style={provided.draggableStyle}>
                                      <Course course={course} key={cIndex}/>
                                    </div>
                                    {provided.placeholder}
                                  </div>
                                )}
                              </Draggable>
                            )}
                          </Column>
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  )}
                </Column>
              )}

              {/* MINOR */}
              {this.props.minors.map((minor, mIndex) =>
                <Column title={minor.name} key={mIndex}>
                  {minor.courses.map((course, cIndex) =>
                    <Course course={course} key={cIndex}/>
                  )}
                </Column>
              )}

              {/* ADDITIONAL */}
              <Column title='Additional Courses' add={this.newCourse}>
                Additional Courses
              </Column>

            </div>
            <div className={styles.half}>

              {/* STUDY PLAN */}
              <Column
                title='Study Plan'
                main={true}
                add={this.newSemester}
              >
                {this.props.semesters.map((semester, sIndex) =>
                  <Droppable droppableId={sIndex + 'drop'} key={sIndex}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef}>
                        <Column title={'Semester ' + (sIndex + 1)} sub={true} key={sIndex}>
                          {semester.map((course, cIndex) =>
                            <Course course={course} key={cIndex}/>
                          )}
                        </Column>
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
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

export default connect(mapState, mapDispatch)(StudyPlan);

StudyPlan.PropTypes = {
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
