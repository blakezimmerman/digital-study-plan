import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REFRESH_SESSION } from './login/login.reducer';
import { user, authenticated, configured } from './login/user.selectors';
import Header from './header/header';
import Login from './login/login';
import Register from './login/register';
import Configure from './configure/configure';
import Dashboard from './dashboard/dashboard';
import Manage from './manage/manage';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.user) {
      return this.props.refreshSession();
    }
  }

  render() {
    const { locationPath, user, authenticated, configured } = this.props;

    const getPage = () => {
      switch (locationPath) {
        case ('/login'): return <Login/>;
        case ('/register'): return <Register/>;
        case ('/configure'): return authenticated && <Configure/>;
        case ('/dashboard'): return configured && <Dashboard/>;
        case ('/studyplan'): return configured && <Manage/>;
      default: return authenticated ? <Dashboard/> : <Login/>;
      }
    };

    return (
      <div>
        <Header
          locationPath={locationPath}
          user={user}
          authenticated={authenticated}
          configured={configured}
        />
        {getPage()}
      </div>
    );
  }
}

const mapState = (state) => ({
  locationPath: state.location.pathname,
  user: user(state),
  authenticated: authenticated(state),
  configured: configured(state)
});

const mapDispatch = { refreshSession: REFRESH_SESSION };

export default connect(mapState, mapDispatch)(App);

App.propTypes = {
  locationPath: PropTypes.string.isRequired,
  user: PropTypes.object,
  authenticated: PropTypes.bool.isRequired,
  configured: PropTypes.bool.isRequired,
  refreshSession: PropTypes.func.isRequired
};
