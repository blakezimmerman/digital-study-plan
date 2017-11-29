import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './manage.styles';
import { DropZone, DragItem } from 'client/shared/dragDropUtils';
import { range } from 'client/shared/miscUtils';
import Column from './column';
import Course from './course';

const curYear = () => (new Date()).getFullYear();

const StudyPlan = ({ semesters, add, handleSelect }) => {
  const addButton = (
    <button className={styles.columnButton} onClick={add}>
      <i className={`material-icons`}>add_circle</i>
    </button>
  );

  const termSelects = (semester, index) => (
    <div>
      <select value={semester.term} onChange={handleSelect('term', index)}>
        <option value="Fall">Fall</option>
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
      </select>
      <select value={semester.year} onChange={handleSelect('year', index)}>
        {range(curYear() - 6, curYear() + 7).map(year => (
          <option value={year} key={year}>{year}</option>
        ))}
      </select>
    </div>
  );

  return (
    <Column title={'Study Plan'} type={'main'} headerContent={addButton}>
      {semesters.map((semester, sIndex) =>
        <Column
          title={`Semester ${sIndex + 1}`}
          headerContent={termSelects(semester, sIndex)}
          type={'sub'}
          key={sIndex}
        >
          <DropZone id={'studyPlan-' + sIndex} key={sIndex}>
            {semester.courses.map((course) =>
              <DragItem id={course.id} key={course.id}>
                <Course course={course} grabbable={true}/>
              </DragItem>
            )}
          </DropZone>
        </Column>
      )}
    </Column>
  );
}

export default StudyPlan;

StudyPlan.PropTypes = {
  semesters: PropTypes.array.isRequired,
  add: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

