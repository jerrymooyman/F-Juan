'use strict'

import React from 'react'

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
            </div>
        )
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
