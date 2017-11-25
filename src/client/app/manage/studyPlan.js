import * as React from 'react';
import PropTypes from 'prop-types';
import { DropZone, DragItem } from 'client/shared/dragDropUtils';
import Column from './column';
import Course from './course';

const StudyPlan = ({ semesters, add }) => (
  <Column title={'Study Plan'} main={true} add={add}>
    {semesters.map((semester, sIndex) =>
      <DropZone id={'studyPlan-' + sIndex} key={sIndex}>
        <Column title={'Semester ' + (sIndex + 1)} sub={true} key={sIndex}>
          {semester.map((course) =>
            <DragItem id={course.id} key={course.id}>
              <Course course={course}/>
            </DragItem>
          )}
        </Column>
      </DropZone>
    )}
  </Column>
);

export default StudyPlan;

StudyPlan.PropTypes = {
  semesters: PropTypes.array.isRequired,
  add: PropTypes.func.isRequired
};

