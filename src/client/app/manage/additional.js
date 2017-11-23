import * as React from 'react';
import PropTypes from 'prop-types';
import { DropZone, DragItem } from 'client/shared/dragDropUtils';
import Column from './column';
import Course from './course';

const newCourse = () => {};

const Additional = ({ courses, add }) => (
  <Column title='Additional Courses' add={add}>
    <DropZone id='additional'>
      {courses.map((course) =>
        <DragItem id={course.id} key={course.id}>
          <Course course={course}/>
        </DragItem>
      )}
    </DropZone>
  </Column>
);

export default Additional;

Additional.PropTypes = {
  courses: PropTypes.array.isRequired,
  add: PropTypes.func.isRequired
};

