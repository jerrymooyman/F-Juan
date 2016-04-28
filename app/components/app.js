import jQuery from 'jquery';
import $ from 'jquery';

import React from 'react';

import LeftNavDock from './common/leftNav'
import NavBar from './common/appBar'

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
  appbar: {
    position: 'fixed',
    top: 0
  }
};

const muiTheme = getMuiTheme({
  // palette: {
  //   accent1Color: deepOrange500,
  // },
});


class App extends React.Component {
	
	render() {

		return (
      		<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<NavBar/>
					<LeftNavDock />
					{this.props.children}
				</div>
      		</MuiThemeProvider>
		);
	}
}

module.exports = App;
