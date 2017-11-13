import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import appStyles from './app.styles';
import { PASSIVE_LOGIN } from './login/login.reducer';
import { routeActions } from '../router/router';
import Header from './header/header';
import Login from './login/login';
import Register from './login/register';
import Configure from './configure/configure';
import Dashboard from './dashboard/dashboard';
import StudyPlan from './studyPlan/studyPlan';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    return this.props.passiveLogin();
  }

  render() {
    const getPage = () => {
      switch (this.props.locationPath) {
        case ('/login'): return <Login/>;
        case ('/register'): return <Register/>;
        case ('/configure'): return <Configure/>;
        case ('/dashboard'): return <Dashboard/>;
        case ('/studyplan'): return <StudyPlan/>;
        default: return <Dashboard/>;
      }
    };

    return (
      <div>
        <Header/>
        {getPage()}
      </div>
    );
  }
}

const mapState = (state) => ({
  locationPath: state.location.pathname,
  login: state.login
});

const mapDispatch = ({
  passiveLogin: PASSIVE_LOGIN
});

export default connect(mapState, mapDispatch)(App);

App.propTypes = {
  locationPath: PropTypes.string.isRequired,
  login: PropTypes.object.isRequired,
  passiveLogin: PropTypes.func.isRequired
};
