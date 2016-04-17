import jQuery from 'jquery';
import $ from 'jquery';

import React from 'react';
import Navbar from './common/navbar';

class App extends React.Component {
	
	render() {
		return (
    		<div className='container'>
        		<Navbar/>
        		{this.props.children}
    		</div>
		);
	}
}

module.exports = App;