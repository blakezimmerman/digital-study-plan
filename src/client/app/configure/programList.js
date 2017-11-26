import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './configure.styles';

const ProgramList = (props) => {
  const disabled = (program) => props.disabled && props.disabled(program)
  return (
    <div className={styles.listContainer}>
      <h2 className={styles.listTitle}>{props.title}</h2>
      <div className={styles.listBody}>
        {props.programs.length ?
          props.programs.map((program, i) =>
            <div key={i} className={styles.listItem}>
              {program.name}
              <button
                className={styles.actionButton}
                onClick={props.callback(program)}
                disabled={disabled(program)}
              >
                <i className={`material-icons ${
                  disabled(program) ? styles.disabled :
                  props.add ? styles.add : styles.remove
                }`}>
                  {props.add ? 'add_circle' : 'remove_circle'}
                </i>
              </button>
            </div>
          )
          : <div className={styles.noneText}>None Added Yet</div>
        }
      </div>
    </div>
  );
};

export default ProgramList;

ProgramList.PropTypes = {
  programs: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  add: PropTypes.bool.isRequired,
  disabled: PropTypes.func,
  callback: PropTypes.func.isRequired
};
