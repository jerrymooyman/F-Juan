'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux'
import AppBar from 'material-ui/lib/app-bar';

import IconButton from 'material-ui/lib/icon-button';
import RefreshIcon from 'material-ui/lib/svg-icons/navigation/refresh'

import {
  setSideNavVisible,
  refreshPage
} from '../../actions/actions'

class NavBar extends Component {

	refresh() {
		this.props.onRefresh(this.props.lastApiCall)
	}

	render() {
		const refreshButton = <IconButton onTouchTap={ this.refresh.bind(this)}><RefreshIcon /></IconButton>

		return (
			<AppBar
			    title={ this.props.pageInfo.title }
			    iconClassNameRight="muidocs-icon-navigation-expand-more"
			    // style={ styles.appbar }
			    onLeftIconButtonTouchTap={this.props.onSetSideNavVisible.bind(this, !this.props.sideNavVisible)}
    			iconElementRight={ refreshButton }
			/>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    sideNavVisible: state.uiview.sideNavVisible,
    pageInfo: state.uiview.currentPageInfo,
    lastApiCall: state.uiview.lastApiCall
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetSideNavVisible: (isVisible) => {
      dispatch(setSideNavVisible(isVisible))
    },
    onRefresh: (apiUrlKey) => {
    	dispatch(refreshPage(apiUrlKey))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)