import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import appStyles from './app.styles';
import { routeActions } from '../router/router';
import { PASSIVE_LOGIN } from './login/login.reducer';
import { user, configured } from './login/user.selectors';
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
    const getPage = () => {
      const authenticated = !!this.props.user
      const configured = !!(this.props.user && this.props.configured);

      switch (this.props.locationPath) {
        case ('/login'): return <Login/>;
        case ('/register'): return <Register/>;
        case ('/configure'): return authenticated && <Configure/>;
        case ('/dashboard'): return configured && <Dashboard/>;
        case ('/studyplan'): return configured && <StudyPlan/>;
        default: return <Dashboard/>;
      }
    };

    return (
      <div>
        <Header
          locationPath={this.props.locationPath}
          user={this.props.user}
          configured={this.props.configured}
        />
        {getPage()}
      </div>
    );
  }
}

const mapState = (state) => ({
  locationPath: state.location.pathname,
  login: state.login,
  user: user(state),
  configured: configured(state)
});

const mapDispatch = ({
  passiveLogin: PASSIVE_LOGIN
});

export default connect(mapState, mapDispatch)(App);

App.propTypes = {
  locationPath: PropTypes.string.isRequired,
  login: PropTypes.object.isRequired,
  user: PropTypes.object,
  configured: PropTypes.bool.isRequired,
  passiveLogin: PropTypes.func.isRequired
};
