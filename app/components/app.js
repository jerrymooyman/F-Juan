import jQuery from 'jquery';
import $ from 'jquery';

import React from 'react';
// import Navbar from './common/navbar';
import SideMenu from './common/sideMenu'

class App extends React.Component {
	
	render() {
		return (
			<div id='outer-container'>
				<SideMenu />
			    <div id="page-wrap">
        			{this.props.children}
			    </div>
			</div>
		);
	}
}

module.exports = App;