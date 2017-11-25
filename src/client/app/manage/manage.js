import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './manage.styles';
import { user } from 'client/app/login/user.selectors';
import { INIT_STUDY_PLAN, RESET_PLAN, SAVE_PLAN, ADD_SEMESTER, ADD_TO_PLAN, REORDER } from './manage.reducer';
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

  onDragStart = (initial) => {
    document.body.classList.add('dragging');
  }

  onDragEnd = (result) => {
    document.body.classList.remove('dragging');
    if (!result.destination) {
      return;
    }
    if (result.destination.droppableId !== result.source.droppableId) {
      this.props.addToPlan({
        srcId: result.source.droppableId,
        srcIndex: result.source.index,
        destId: result.destination.droppableId,
        destIndex: result.destination.index
      });
    } else {
      this.props.reorder({
        semIndex: result.source.droppableId.split('-')[1],
        srcIndex: result.source.index,
        destIndex: result.destination.index
      });
    }
  }

  render() {
    return (
      <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
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
                <Major major={major} index={index} key={index}/>
              )}
              {this.props.minors.map((minor, index) =>
                <Minor minor={minor} index={index} key={index}/>
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
  addSemester: ADD_SEMESTER,
  addToPlan: ADD_TO_PLAN,
  reorder: REORDER
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
  addSemester: PropTypes.func.isRequired,
  addToPlan: PropTypes.func.isRequired,
  reorder: PropTypes.func.isRequired
};