import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import configureStyles from './configure.styles';

const ProgramList = (props) => (
  <div className={configureStyles.listContainer}>
    <h2 className={configureStyles.listTitle}>{props.title}</h2>
    <div className={configureStyles.listBody}>
      {props.programs.length ?
        props.programs.map((program, i) =>
          <div key={i} className={configureStyles.listItem}>
            {program.name}
            <button
              className={configureStyles.actionButton}
              onClick={props.callback(program)}
            >
              <i className={`material-icons ${props.add ? configureStyles.add : configureStyles.remove}`}>
                {props.add ? 'add_circle' : 'remove_circle'}
              </i>
            </button>
          </div>
        )
        : <div className={configureStyles.noneText}>None Added Yet</div>
      }
    </div>
  </div>
);

export default ProgramList;

ProgramList.PropTypes = {};
