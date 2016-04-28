'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux'
import AppBar from 'material-ui/lib/app-bar';

import {
  setSideNavVisible
} from '../../actions/actions'

class NavBar extends Component {

	render() {
		return (
			<AppBar
			    title={"Formula 1 - " + this.props.pageInfo.title}
			    iconClassNameRight="muidocs-icon-navigation-expand-more"
			    // style={ styles.appbar }
			    onLeftIconButtonTouchTap={this.props.onSetSideNavVisible.bind(this, !this.props.sideNavVisible)}
			/>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    sideNavVisible: state.uiview.sideNavVisible,
    pageInfo: state.uiview.currentPageInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetSideNavVisible: (isVisible) => {
      dispatch(setSideNavVisible(isVisible))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)