import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../manage.styles';
import { OPEN_ADD_MODAL, CLOSE_ADD_MODAL } from '../manage.reducer';
import { DropZone, DragItem } from 'client/shared/dragDropUtils';
import Column from '../column';
import Course from '../course';
import AddCourseModal from './addCourseModal';

class Additional extends React.Component {
  constructor(props) {
    super(props);
  }

  handleModalOpen = () => this.props.openModal();

  render() {
    const { courses, add, isModalOpen, closeModal } = this.props;

    const addButton = (
      <button className={styles.columnButton} onClick={this.handleModalOpen}>
        <i className={`material-icons`}>add_circle</i>
      </button>
    );

    return (
      <div>
        <Column title='Additional Courses' headerContent={addButton}>
          <DropZone id='additional' disabled={true}>
            {courses.map((course) =>
              <DragItem id={course.id} key={course.id}>
                <Course course={course} grabbable={true}/>
              </DragItem>
            )}
          </DropZone>
        </Column>
        <AddCourseModal
          isOpen={isModalOpen}
          close={closeModal}
          addCourse={add}
        />
      </div>
    );
  }
};

const mapState = (state) => ({
  isModalOpen: state.manage.modals.addModalOpen
});

const mapDispatch = {
  openModal: OPEN_ADD_MODAL,
  closeModal: CLOSE_ADD_MODAL
};

export default connect(mapState, mapDispatch)(Additional);

Additional.PropTypes = {
  courses: PropTypes.array.isRequired,
  add: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

