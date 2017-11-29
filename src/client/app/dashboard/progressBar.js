import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './dashboard.styles';
import { Motion, spring } from 'react-motion';

const percent = (x, y) => x/y > 1 ? 100 : x/y * 100;

const ProgressBar = ({ cur, curName, total, totalName }) => (
  <div className={styles.progressContainer}>
    <p>{`${curName} / ${totalName}`}</p>
    <div className={styles.progressBar}>
      <Motion
        defaultStyle={{width: 0}}
        style={{width: spring(percent(cur, total), {stiffness: 120, damping: 23})}}
      >
        {varStyles =>
          <div style={{
            backgroundColor: '#00cc66',
            height: '100%',
            width: `${varStyles.width}%`
          }}></div>
        }
      </Motion>
    </div>
    <p className={styles.credRatio}>{`${cur} / ${total}`}</p>
  </div>
);

export default ProgressBar;

ProgressBar.PropTypes = {
  cur: PropTypes.number.isRequired,
  curName: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  totalName: PropTypes.string.isRequired,
};
