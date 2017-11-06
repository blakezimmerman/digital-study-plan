import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REGISTER_REQUEST } from './login.reducer';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      userNameInput: '',
      passwordInput: ''
    }
  }

  updateUserName = (event) =>
  this.setState({
    userNameInput: event.currentTarget.value
  });

  updatePassword = (event) =>
    this.setState({
      passwordInput: event.currentTarget.value
    });

  registerButton = (requestedUser) => (event) =>
    this.props.requestRegistration(requestedUser);

  render() {
    return (
      <div>
        <h2>Create an Account</h2>
        <label>
          {'User Name '}
          <input
            type='text'
            value={this.state.userNameInput}
            onChange={this.updateUserName}
          />
        </label>
        <label>
          {'Password '}
          <input
            type='password'
            value={this.state.passwordInput}
            onChange={this.updatePassword}
          />
        </label>
        <button
          onClick={this.registerButton({
            userName: this.state.userNameInput,
            password: this.state.passwordInput
          })}
        >
          Create Account
        </button>
      </div>
    );
  }
}

const mapState = (state) => ({ ...state.registerRequest });

const mapDispatch = { requestRegistration: REGISTER_REQUEST.PENDING };

export default connect(mapState, mapDispatch)(Register);

Register.PropTypes = {
  pending: PropTypes.bool,
  result: PropTypes.object,
  error: PropTypes.string
};
