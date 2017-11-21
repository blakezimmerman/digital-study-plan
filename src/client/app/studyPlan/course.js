import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './studyPlan.styles';

const Course = ({ course }) => (
  <div className={styles.course}>
    <div>
      {course.code && course.code + ' — '}
      {course.name}
    </div>
    <div>
      {course.credits + (course.credits == 1 ? ' credit' : ' credits')}
    </div>
  </div>
);

export default Course;

Course.PropTypes = {
  course: PropTypes.object.isRequired,
};
