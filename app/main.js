'use strict'

import 'babel-polyfill'

import jQuery from 'jquery'
import $ from 'jquery'
import React from 'react'
import { render } from 'react-dom'
require('./main.scss')

// Router objects
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// App state objects (Redux)
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'

// Components to feed into the router
import App from './components/app'
import Home from './components/home'
import DriversPage from './components/driversPage'
import RaceSchedulePage from './components/raceSchedulePage'
import StandingsPage from './components/standingsPage'
import ResultsPage from './components/resultsPage.js'
// import CustomerList from './components/CustomerList.js'
// import About from './components/About.js'
// import NoMatch from './components/errors/404.js'

const store = configureStore()
//TODO: synchronisation between redux state and react-router state not working. Need to spend more time understanding how it works
// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store, {
//   selectLocationState: (state) => state.routing
// })

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={ResultsPage}/>
                <Route path='schedule' component={RaceSchedulePage}/>
                <Route path='standings' component={DriversPage}/>
                <Route path='drivers' component={DriversPage}/>
                <Route path='constructors' component={DriversPage}/>
	    	</Route>
	  	</Router>
	</Provider>,
	document.getElementById('app')
)