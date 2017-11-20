import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './configure.styles';

const ProgramList = (props) => (
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
            >
              <i className={`material-icons ${props.add ? styles.add : styles.remove}`}>
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

export default ProgramList;

ProgramList.PropTypes = {};
