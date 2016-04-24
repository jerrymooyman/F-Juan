'use strict';

import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
	render() {

		return (
		      <nav className='navbar navbar-default navbar-fixed-top'>
		        <div className='container'>
				    <div className='navbar-header'>
				    	<Link className="navbar-brand" to='/'>Formula 1</Link>
				    	<Link className="navbar-brand" to='/'><span className="glyphicon glyphicon-home"></span></Link>
				    	<Link className="navbar-brand" to='/'><span className="glyphicon glyphicon-flag"></span></Link>
				    	<Link className="navbar-brand" to='/'><span className="glyphicon glyphicon-calendar"></span></Link>
				    </div>
		        </div>

		      </nav>
	      )
	}
}

module.exports = Navbar;
