'use strict'

import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

import { connect } from 'react-redux'

import {
  setSideNavVisible,
  navigateFromSideNav
} from '../../actions/actions'

class LeftNavDock extends React.Component {

  // handleToggle(){
  //   // this.setState({open: !this.state.open});
  //   this.props.onSetSideNavVisible.bind(this, !this.props.sideNavVisible)
  // }

  handleClose() {
    this.props.onSetSideNavVisible(false)
  }

  dosomething(args) {
    this.props.onSetSideNavVisible(args.open)
  }

  render() {

    return (
      <div>
        <LeftNav
          docked={false}
          width={200}
          open={this.props.sideNavVisible}
          // onRequestChange={open => this.dosomething({open})}
          >
          <MenuItem onTouchTap={this.props.onNavigateRoute.bind(this, 'results')}>Home</MenuItem>
          <MenuItem onTouchTap={this.props.onNavigateRoute.bind(this, 'schedule')}>Race Schedule</MenuItem>
          <MenuItem onTouchTap={this.props.onNavigateRoute.bind(this, 'qualifying')}>Qualifying</MenuItem>
          <MenuItem onTouchTap={this.props.onNavigateRoute.bind(this, 'standings')}>Standings</MenuItem>
          <MenuItem onTouchTap={this.props.onNavigateRoute.bind(this, 'drivers')}>Drivers</MenuItem>
        </LeftNav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sideNavVisible: state.uiview.sideNavVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetSideNavVisible: (isVisible) => {
      dispatch(setSideNavVisible(isVisible))
    },
    onNavigateRoute: (route) => {
      dispatch(navigateFromSideNav(route))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNavDock)