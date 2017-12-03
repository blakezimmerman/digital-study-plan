import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import styles from './login.styles';
import { LOGIN_REQUEST } from './login.reducer';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameInput: '',
      passwordInput: ''
    };
  }

  isDisabled = () => !(this.state.userNameInput && this.state.passwordInput);

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
      <div className={styles.container}>
        <h2>Sign in</h2>
        {this.props.error && <h3 className={styles.error}>{this.props.error}</h3>}
        <div className={styles.inputs}>
          <label>
            {'Username:'}
            <input
              type='text'
              value={this.state.userNameInput}
              onChange={this.updateUserName}
            />
          </label>
          <label>
            {'Password:'}
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
            disabled={this.isDisabled()}
          >
            Log In
          </button>
        </div>
        <div>
          {'Not Registered? '}
          <Link to='/register'>Click here to make an account!</Link>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({ ...state.login.loginRequest });

const mapDispatch = { requestLogin: LOGIN_REQUEST.PENDING };

export default connect(mapState, mapDispatch)(Login);

Login.PropTypes = {
  pending: PropTypes.bool,
  result: PropTypes.object,
  error: PropTypes.string,
  requestLogin: PropTypes.func.isRequired
};
