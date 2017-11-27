import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './manage.styles';
import { DropZone, DragItem } from 'client/shared/dragDropUtils';
import Column from './column';
import Course from './course';

const newCourse = () => {};

const Additional = ({ courses, add }) => {
  const addButton = (
    <button className={styles.columnButton} onClick={add}>
      <i className={`material-icons`}>add_circle</i>
    </button>
  );

  return (
    <Column title='Additional Courses' headerContent={addButton}>
      <DropZone id='additional' disabled={true}>
        {courses.map((course) =>
          <DragItem id={course.id} key={course.id}>
            <Course course={course}/>
          </DragItem>
        )}
      </DropZone>
    </Column>
  );
};

export default Additional;

Additional.PropTypes = {
  courses: PropTypes.array.isRequired,
  add: PropTypes.func.isRequired
};

