'use strict'

/* 
 * flux implementation via redux
 */
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/rootReducer'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

import {
	RESULTS	
} from '../actions/actions'

const initialState = {
	uiview: {
		sideNavVisible: false,
		currentPageInfo: 
		{
			key: 'results',
			title: 'Results',
			route: '/'
		},
		lastApiCall: RESULTS
	},
	results: {
	    circuitName: null,
	    round: null,
	    raceName:null,
	    date: null,
	    time: null,
	    location: null,
	  	results:null,
	},
	raceSchedule: {
		season: null,
		races: null
	},
}

const reduxlogger = createLogger()
const reduxRouter = routerMiddleware(browserHistory)

export default function configureStore(state = initialState) {
	const store = createStore(
		rootReducer,
		state,

		applyMiddleware(reduxThunk)
		// compose(
		// 	applyMiddleware(
		// 		reduxRouter, 
		// 		reduxThunk, 
		// 		reduxlogger
		// 	),
			// window.devToolsExtension ? window.devToolsExtension() : null //TODO: setup redux dev tools - DevTools.instrument()
		// )
	)
	return store
}
