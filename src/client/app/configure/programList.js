import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import configureStyles from './configure.styles';

const ProgramList = (props) => (
  <div className={configureStyles.listContainer}>
    <h2 className={configureStyles.listTitle}>{props.title}</h2>
    <div className={configureStyles.listBody}>
      {props.programs.map((program, i) =>
        <div key={i} className={configureStyles.listItem}>
          {program.name}
          <button className={configureStyles.actionButton}>
            <i className='material-icons'>add_circle</i>
          </button>
        </div>
       )
      }
    </div>
  </div>
);

export default ProgramList;

ProgramList.PropTypes = {};
