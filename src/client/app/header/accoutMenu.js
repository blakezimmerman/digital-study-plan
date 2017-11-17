import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import headerStyles from './header.styles';
import { user } from '../login/user.selectors';
import { routeActions } from 'client/router/router';

class AccountMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCollapsed: true
    }
  }

  toggleMenu = () => {
    this.setState((prevState, props) => ({
      menuCollapsed: !prevState.menuCollapsed
    }))
  };

  closeMenu = () => {
    this.setState((prevState, props) => ({
      menuCollapsed: true
    }))
  };

  toAccount = () => this.props.toConfigure();

  logout = () => location.href = 'api/auth/logout';

  render() {
    return (
      <div className={headerStyles.accountMenu} onBlur={this.closeMenu}>
        <button className={headerStyles.menuButton} onClick={this.toggleMenu}>
          <i className={`material-icons ${headerStyles.accountIcon}`}>account_circle</i>
          <p className={headerStyles.userName}>{this.props.user.userName}</p>
          {this.state.menuCollapsed
            ? <i className='material-icons'>expand_more</i>
            : <i className='material-icons'>expand_less</i>
          }
        </button>
        <div className={`${headerStyles.dropdown} ${!this.state.menuCollapsed && headerStyles.show}`}>
          {this.props.locationPath !== '/configure' &&
            <button onMouseDown={this.toAccount}>Account</button>
          }
          <button onMouseDown={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

const mapDispatch = ({
  toConfigure: routeActions.CONFIGURE
})

export default connect(null, mapDispatch)(AccountMenu);

AccountMenu.PropTypes = {
  locationPath: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  toConfigure: PropTypes.func.isRequired
};
