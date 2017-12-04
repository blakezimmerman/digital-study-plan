import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './manage.styles.scss';
import ReactModal from 'react-modal';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  },
  content: {
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    border: '0',
    borderRadius: '5px',
    bottom: 'auto',
    minHeight: '10rem',
    left: '50%',
    padding: '2rem',
    position: 'fixed',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    minWidth: '20rem',
    width: '80%',
    maxWidth: '60rem'
  }
};

ReactModal.setAppElement('#root');

const handleToDashboard = (props) => () => {
  props.close();
  props.toDashboard();
}

const HasSavedModal = (props) => (
  <ReactModal
    isOpen={props.isOpen}
    onRequestClose={props.close}
    contentLabel={'Save Successful Modal'}
    shouldReturnFocusAfterClose={false}
    style={{
      overlay: modalStyles.overlay,
      content: modalStyles.content
    }}
  >
    <div className={styles.successModal}>
      <h2>Success</h2>
      <p>Your study plan has been saved successfully</p>
      <div className={styles.modalButtons}>
        <button onClick={props.close}>
          Stay Here
        </button>
        <button onClick={handleToDashboard(props)}>
          Go To Dashboard
        </button>
      </div>
    </div>
  </ReactModal>
);

export default HasSavedModal;

HasSavedModal.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  toDashboard: PropTypes.func.isRequired
};
