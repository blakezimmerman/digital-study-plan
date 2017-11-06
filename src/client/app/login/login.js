import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import { LOGIN_REQUEST } from './login.reducer';

class Login extends React.Component {
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

  loginButton = (requestedUser) => (event) =>
    this.props.requestLogin(requestedUser);

  render() {
    return (
      <div>
        <h2>Sign in</h2>
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
          onClick={this.loginButton({
            userName: this.state.userNameInput,
            password: this.state.passwordInput
          })}
        >
          Log In
        </button>
        <div>
          {'Not Registered? '}
          <Link to='/register'>Click here to make an account!</Link>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({ ...state.loginRequest });

const mapDispatch = { requestLogin: LOGIN_REQUEST.PENDING };

export default connect(mapState, mapDispatch)(Login);

Login.PropTypes = {
  pending: PropTypes.bool,
  result: PropTypes.object,
  error: PropTypes.string
};
