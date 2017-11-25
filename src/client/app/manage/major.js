import * as React from 'react';
import PropTypes from 'prop-types';
import { DropZone, DragItem } from 'client/shared/dragDropUtils';
import Column from './column';
import Course from './course';

const Major = ({ major, index }) => (
  <Column title={major.name}>
    {major.semesters.map((semester, sIndex) =>
      <Column title={'Semester ' + (sIndex + 1)} sub={true} key={sIndex}>
        <DropZone id={`${major.name}-${index}-${sIndex}`} disabled={true} key={sIndex}>
          {semester.map((course) =>
            <DragItem id={course.id} key={course.id}>
              <Course course={course}/>
            </DragItem>
          )}
        </DropZone>
      </Column>
    )}
  </Column>
);

export default Major;

Major.PropTypes = {
  major: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};
