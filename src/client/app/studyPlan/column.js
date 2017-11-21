import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './studyPlan.styles';

const Column = (props) => (
  <div className={
    props.sub ? styles.subColumn :
    props.main ? styles.mainColumn : styles.column
  }>
    <h2 className={styles.columnHeader}>
      {props.title}
      {props.add &&
        <button className={styles.columnButton} onClick={props.add}>
          <i className={`material-icons`}>add_circle</i>
        </button>
      }
    </h2>
    <div className={styles.columnBody}>
      {props.children}
    </div>
  </div>
);

export default Column;

Column.PropTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.bool,
  add: PropTypes.func,
  children: PropTypes.element
};
