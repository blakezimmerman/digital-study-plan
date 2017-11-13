import * as React from 'react';
import headerStyles from './header.styles';
import logo from 'client/assets/StevensLogo.png';
import AccountMenu from './accoutMenu';

const Header = (props) => (
  <div className={headerStyles.container}>
    <img src={logo} className={headerStyles.logo} alt='Stevens Logo'/>
    <h1 className={headerStyles.h1}>Digital Study Plan</h1>
    <AccountMenu/>
  </div>
);

export default Header;
