'use strict'

import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import {
  refreshPage,
  setPage
} from '../../actions/actions'

class NavBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            menuVisible: false
        }
    }

	// refresh() {
	// 	this.props.onRefresh(this.props.lastApiCall)
	// }

    render() {
        let menuContainerClass = classnames({
            'open': this.state.menuVisible
        })

        const menuTouchHandler = function(e) {
            e.preventDefault()
            this.setState({
                menuVisible: !this.state.menuVisible
            })
        }

        const menuItemTouchHandler = (pageName, e) => {
            e.preventDefault()
            this.props.onSetPage(pageName)
            this.setState({
                menuVisible: !this.state.menuVisible
            })
        }

        return (
            <nav className="flex-nav">
                <a id="menu" href="#" className="toggleNav" onTouchTap={ menuTouchHandler.bind(this) }>☰ Menu</a>
                <ul className={ menuContainerClass } >
                    <li><a href="#" onTouchTap={ menuItemTouchHandler.bind(this, 'Schedule') }>Schedule</a></li>
                    <li><a href="#" onTouchTap={ menuItemTouchHandler.bind(this, 'Results') }>Results</a></li>
                    <li><a href="#" onTouchTap={ menuItemTouchHandler.bind(this, 'Standings') }>Standings</a></li>
                    <li><a href="#" onTouchTap={ menuItemTouchHandler.bind(this, 'Qualifying') }>Qualifying</a></li>
                    <li><a href="#" onTouchTap={ menuItemTouchHandler.bind(this, 'Drivers') }>Drivers</a></li>
                    <li><a href="#" onTouchTap={ menuItemTouchHandler.bind(this, 'Constructors') }>Constructors</a></li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRefresh: (apiUrlKey) => {
            dispatch(refreshPage(apiUrlKey))
        },
        onSetPage: (pageName) => {
            dispatch(setPage(pageName))
        }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)