import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './header.styles';
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

  toDashboard = () => this.props.dashboardRoute();

  toAccount = () => this.props.configureRoute();

  logout = () => location.href = 'api/auth/logout';

  render() {
    return (
      <div className={styles.accountMenu} onBlur={this.closeMenu}>
        <button className={styles.menuButton} onClick={this.toggleMenu}>
          <i className={`material-icons ${styles.accountIcon}`}>account_circle</i>
          <p className={styles.userName}>{this.props.user.userName}</p>
          {this.state.menuCollapsed
            ? <i className='material-icons'>expand_more</i>
            : <i className='material-icons'>expand_less</i>
          }
        </button>
        <div className={`${styles.dropdown} ${!this.state.menuCollapsed && styles.show}`}>
          {this.props.locationPath !== '/dashboard' &&
            <button onMouseDown={this.toDashboard}>Dashboard</button>
          }
          {this.props.locationPath !== '/configure' &&
            <button onMouseDown={this.toAccount}>Account</button>
          }
          <button onMouseDown={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

const mapDispatch = {
  dashboardRoute: routeActions.DASHBOARD,
  configureRoute: routeActions.CONFIGURE
};

export default connect(null, mapDispatch)(AccountMenu);

AccountMenu.PropTypes = {
  locationPath: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  toConfigure: PropTypes.func.isRequired
};
