import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './dashboard.styles';
import Column from '../manage/column';
import Course from '../manage/course';

const NextSemester = ({ semester }) => (
  <div className={styles.semesterContainer}>
    <Column
      title={`Upcoming Semester — ${semester.term}, ${semester.year}`}
      type={'unbound'}
    >
      {semester.courses.map((course) =>
        <Course course={course} key={course.id}/>
      )}
    </Column>
  </div>
);

export default NextSemester;

NextSemester.PropTypes = {
  semester: PropTypes.object.isRequired
};
