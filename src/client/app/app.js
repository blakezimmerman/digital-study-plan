import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import appStyles from './app.styles';
import { routeActions } from '../router/router';
import { PASSIVE_LOGIN } from './login/login.reducer';
import { user, authenticated, configured } from './login/user.selectors';
import Header from './header/header';
import Login from './login/login';
import Register from './login/register';
import Configure from './configure/configure';
import Dashboard from './dashboard/dashboard';
import StudyPlan from './studyPlan/studyPlan';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.passiveLogin();
  }

  render() {
    const { locationPath, user, authenticated, configured } = this.props;

    const getPage = () => {
      switch (locationPath) {
        case ('/login'): return <Login/>;
        case ('/register'): return <Register/>;
        case ('/configure'): return authenticated && <Configure/>;
        case ('/dashboard'): return configured && <Dashboard/>;
        case ('/studyplan'): return configured && <StudyPlan/>;
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

const mapDispatch = ({
  passiveLogin: PASSIVE_LOGIN
});

export default connect(mapState, mapDispatch)(App);

App.propTypes = {
  locationPath: PropTypes.string.isRequired,
  user: PropTypes.object,
  authenticated: PropTypes.bool.isRequired,
  configured: PropTypes.bool.isRequired,
  passiveLogin: PropTypes.func.isRequired
};
