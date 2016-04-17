import jQuery from 'jquery';
import $ from 'jquery';

import React from 'react';

class App extends React.Component {
	
	render() {
		return (
    		<div>
        		{this.props.children}
    		</div>
		);
	}
}

module.exports = App;