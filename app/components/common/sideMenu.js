'use strict';

import React, { Component } from 'react';
import {slide as Menu} from 'react-burger-menu'

class SideMenu extends Component {

  	showSettings(event) {
    	event.preventDefault();
	}

	render() {
		let style = {
			a: {
				"display": "block",
				"outline": "none"
			}
		}

		return (
		    <Menu id='slide' pageWrapId="page-wrap" outerContainerId='outer-container' >
		        <a id="home" href="/" style={style.a} >
		        	<span><h2>Formula One</h2></span>
		        </a>
		        <a id="home" href="/" style={style.a} >
		        	<i className="fa fa-calendar-o"></i>
		        	<span>Schedule</span>
		        </a>
		        <a id="home" href="/" style={style.a} >
		        	<i className="fa fa-user" aria-hidden="true"></i>
		        	<span>Drivers</span>
		        </a>
		        <a id="home" href="/" style={style.a} >
		        	<i className="fa fa-car" aria-hidden="true"></i>
		        	<span>Constructors</span>
		        </a>
		    </Menu>	
		)
	}
}

module.exports = SideMenu
