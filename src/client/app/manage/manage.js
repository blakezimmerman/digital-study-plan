import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './manage.styles';
import { user } from 'client/app/login/user.selectors';
import {
  curMajors, curMinors, curAdditional,
  curSemesters, canUndoPlan, canRedoPlan
} from './manage.selectors';
import {
  INIT_STUDY_PLAN, RESET_PLAN, SAVE_PLAN, ADD_SEMESTER,
  ADD_TO_PLAN, CHANGE_TERM, REORDER, UNDO_PLAN, REDO_PLAN
} from './manage.reducer';
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

  handleUndo = () => this.props.undo();

  handleRedo = () => this.props.redo();

  handleReset = () => this.props.resetPlan(this.props.user.studyPlan.programs);

  handleSave = () => this.props.savePlan();

  newSemester = () => this.props.addSemester();

  handleSelect = (type, index) => (event) => {
    const value = type === 'term'
      ? event.target.value
      : parseInt(event.target.value);
    return this.props.changeTerm({ index, type, value});
  };

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
            <div className={styles.undoRedo}>
              <button
                className={styles.undo}
                onClick={this.handleUndo}
                disabled={!this.props.canUndo}
              >
                Undo
              </button>
              <button
                className={styles.redo}
                onClick={this.handleRedo}
                disabled={!this.props.canRedo}
              >
                Redo
              </button>
            </div>
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
              <StudyPlan
                semesters={this.props.semesters}
                add={this.newSemester}
                handleSelect={this.handleSelect}
              />
            </div>
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapState = (state) => ({
  user: user(state),
  majors: curMajors(state),
  minors: curMinors(state),
  additional: curAdditional(state),
  semesters: curSemesters(state),
  canUndo: canUndoPlan(state),
  canRedo: canRedoPlan(state)
});

const mapDispatch = {
  initPlan: INIT_STUDY_PLAN,
  resetPlan: RESET_PLAN,
  savePlan: SAVE_PLAN.PENDING,
  addSemester: ADD_SEMESTER,
  changeTerm: CHANGE_TERM,
  addToPlan: ADD_TO_PLAN,
  reorder: REORDER,
  undo: UNDO_PLAN,
  redo: REDO_PLAN
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
  changeTerm: PropTypes.func.isRequired,
  addToPlan: PropTypes.func.isRequired,
  reorder: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
  redo: PropTypes.func.isRequired,
};
