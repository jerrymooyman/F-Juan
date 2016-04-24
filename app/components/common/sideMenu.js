'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import { slide as Menu } from 'react-burger-menu'
import SideMenuItem from './sideMenuItem'

class SideMenu extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isOpen: false
		}
	}

  	showSettings(event) {
		this.setMenuVisibleState(false)
	}

	toggleMenuVisible(event) {
		this.setMenuVisibleState(!this.state.isOpen)
	}

	setMenuVisibleState(isVisible) {
    	this.setState({
    		isOpen: isVisible
    	})
	}

	isMenuOpen(state) {
		console.log(state.isOpen)
		this.setMenuVisibleState(state.isOpen)
		// return state.isOpen
	}

	render() {
		let style = {
			a: {
				"display": "block",
				"outline": "none"
			}
		}

		return (
		    <Menu id='slide' pageWrapId="page-wrap" outerContainerId='outer-container' isOpen={this.state.isOpen} onStateChange={ this.isMenuOpen.bind(this) }>
		    	<ul>
		    		<li>
						<Link style={style.a} to="/" onClick={ this.showSettings.bind(this) } >
				        	<span><h2>Formula One</h2></span>
						</Link>
		    		</li>
		    		<li>
		    			<SideMenuItem  	name='Schedule'
		    							path='/schedule'
		    							style={ style.a }
		    							classNameString='fa fa-calendar-o'
		    							onClick={ this.showSettings.bind(this) } />
		    		</li>
		    			<SideMenuItem  	name='Drivers'
		    							path='/drivers'
		    							style={ style.a }
		    							classNameString='fa fa-user'
		    							onClick={ this.showSettings.bind(this) } />
		    		<li>
		    			<SideMenuItem  	name='Constructors'
		    							path='/constructors'
		    							style={ style.a }
		    							classNameString='fa fa-car'
		    							onClick={ this.showSettings.bind(this) } />
		    		</li>
		    		<li>
		    			<SideMenuItem  	name='Schedule'
		    							path='/schedule'
		    							style={ style.a }
		    							classNameString='fa fa-calendar-o'
		    							onClick={ this.showSettings.bind(this) } />
		    		</li>
		    	</ul>
		    </Menu>	
		)
	}
}

module.exports = SideMenu
