'use strict'

import jQuery from 'jquery'
import $ from 'jquery'
import React from 'react'
import { render } from 'react-dom'
// import bootStrap from 'bootstrap-webpack'

// Router objects
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

// App state objects (Redux)
// import { Provider } from 'react-redux'
// import configureStore from './stores/configureStore'

// Components to feed into the router
import App from './components/app'
import Home from './components/home'


render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}/>
    	</Route>
  	</Router>
	,
	document.getElementById('app')
)