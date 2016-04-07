'use strict';

import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
	render() {
		return (
	      <nav className='navbar navbar-inverse navbar-fix-top'>
	        <div className='container'>
			    <div className='navbar-header'>
				    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				    </button>
			    	<Link className="navbar-brand" to='/'>PaySmart - Client Transfer Utility</Link>
			    </div>
			    <ul className="nav navbar-nav navbar-right">
			        <li><Link to='/about'>About</Link></li>
			    </ul>
	        </div>

	      </nav>
		);
	}
}

module.exports = Navbar;
