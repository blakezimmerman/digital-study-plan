import * as React from 'react';
import PropTypes from 'prop-types';
import { DropZone, DragItem } from 'client/shared/dragDropUtils';
import Column from './column';
import Course from './course';

const Minor = ({ minor, index }) => (
  <Column title={minor.name}>
    <DropZone id={minor.name + '-' + index } disabled={true}>
      {minor.courses.map((course) =>
        <DragItem id={course.id} key={course.id}>
          <Course course={course}/>
        </DragItem>
      )}
    </DropZone>
  </Column>
);

export default Minor;

Minor.PropTypes = {
  minor: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};
