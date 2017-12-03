import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './additional.styles.scss';
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

class AddCourseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseCodeInput: '',
      courseNameInput: '',
      creditsInput: 0
    };
  }

  addDisabled = () => !(this.state.courseCodeInput && this.state.courseNameInput);

  updateInput = (key) => (event) =>
    this.setState({
      [key]: event.currentTarget.value
    });

  clearState = () => {
    this.setState({
      courseCodeInput: '',
      courseNameInput: '',
      creditsInput: 0
    });
  }

  handleClose = () => this.props.close();

  handleAdd = () => this.props.addCourse(
    this.state.courseCodeInput,
    this.state.courseNameInput,
    this.state.creditsInput
  );

  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        onAfterOpen={this.clearState}
        onRequestClose={this.props.close}
        contentLabel={'Add Course Modal'}
        shouldReturnFocusAfterClose={false}
        style={{
          overlay: modalStyles.overlay,
          content: modalStyles.content
        }}
      >
        <div className={styles.container}>
          <h2>Add Additional Course</h2>
          <div className={styles.inputs}>
            <label>
              {'Course Code:'}
              <input
                type='text'
                value={this.state.courseCodeInput}
                onChange={this.updateInput('courseCodeInput')}
              />
            </label>
            <label>
              {'Course Name:'}
              <input
                type='text'
                value={this.state.courseNameInput}
                onChange={this.updateInput('courseNameInput')}
              />
            </label>
            <label>
              {'Credits:'}
              <input
                type='number'
                value={this.state.creditsInput}
                onChange={this.updateInput('creditsInput')}
              />
            </label>
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.cancel}
              onClick={this.handleClose}
            >
              Cancel
            </button>
            <button
              className={styles.add}
              onClick={this.handleAdd}
              disabled={this.addDisabled()}
            >
              Add Course
            </button>
          </div>
        </div>
      </ReactModal>
      );
  }
}

export default AddCourseModal;

AddCourseModal.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  addCourse: PropTypes.func.isRequired
};
