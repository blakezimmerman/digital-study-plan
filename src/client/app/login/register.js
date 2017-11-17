import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import loginStyles from './login.styles';
import { REGISTER_REQUEST } from './login.reducer';

class Register extends React.Component {
  constructor(props) {
    super(props);
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
      <div className={loginStyles.container}>
        <h2>Create an Account</h2>
        {this.props.error && !this.props.result &&
          <h3 className={loginStyles.error}>{this.props.error}</h3>
        }
        {this.props.result && !this.props.error &&
          <h3 className={loginStyles.success}>
            {'Registration Success! '}
            <Link to='/login'>Click here to proceed to login.</Link>
          </h3>
        }
        <div className={loginStyles.inputs}>
          <label>
            {'Username '}
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
      </div>
    );
  }
}

const mapState = (state) => ({ ...state.login.registerRequest });

const mapDispatch = { requestRegistration: REGISTER_REQUEST.PENDING };

export default connect(mapState, mapDispatch)(Register);

Register.PropTypes = {
  pending: PropTypes.bool,
  result: PropTypes.object,
  error: PropTypes.string,
  requestRegistration: PropTypes.func.isRequired
};
