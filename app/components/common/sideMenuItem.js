'use strict'

import React, { Component } from 'react';
import { Link } from 'react-router';

class SideMenuItem extends Component {
	render() {
		return (
			<Link style={ this.props.style } to={ this.props.path } onClick={ this.props.onClick }>
	        	<i className={ this.props.classNameString }></i>
	        	<span>{ this.props.name }</span>
			</Link>
		);
	}
}

module.exports = SideMenuItem
