import * as React from 'react';
import PropTypes from 'prop-types';
import headerStyles from './header.styles';
import logo from 'client/assets/StevensLogo.png';
import AccountMenu from './accoutMenu';

const getTitle = (props) => {
  const authenticated = !!props.user;
  const configured = !!(props.user && props.configured);

  switch (props.locationPath) {
    case ('/login' || '/register'): return 'Digital Study Plan';
    case ('/configure'): return authenticated && 'Configure Account';
    case ('/dashboard'): return configured && 'Dashboard';
    case ('/studyplan'): return configured && 'Manage Study Plan';
    default: return 'Digital Study Plan';
  }
};

const Header = (props) => (
  <div className={headerStyles.container}>
    <img src={logo} className={headerStyles.logo} alt='Stevens Logo'/>
    <h1 className={headerStyles.h1}>{getTitle(props)}</h1>
    {props.user ? <AccountMenu {...props}/>: <div></div>}
  </div>
);

export default Header;

Header.PropTypes = {
  locationPath: PropTypes.string.isRequired,
  user: PropTypes.object,
  configured: PropTypes.bool.isRequired
};
