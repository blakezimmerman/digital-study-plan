import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './manage.styles'
import { match, is } from 'client/shared/miscUtils';

const Column = (props) => (
  <div className={
    match(props.type)
      .on(is('sub'), () => styles.subColumn)
      .on(is('main'), () => styles.mainColumn)
      .on(is('unbound'), () => styles.unboundColumn)
      .otherwise(() => styles.column)
  }>
    <h2 className={styles.columnHeader}>
      {props.title}
      {props.headerContent}
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
  headerContent: PropTypes.element,
  type: PropTypes.string,
  children: PropTypes.element
};
