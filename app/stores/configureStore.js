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

const initialState = {
	uiview: {
		sideNavVisible: false,
		currentPageInfo: 
		{
			key: 'schedule',
			title: 'Race Schedule',
			route: '/schedule'
		}
	},
	raceSchedule: {
		season: null,
		races: null
	}
}

const reduxlogger = createLogger()
const reduxRouter = routerMiddleware(browserHistory)

export default function configureStore(state = initialState) {
	const store = createStore(
		rootReducer,
		state,
		compose(
			applyMiddleware(
				reduxRouter, 
				reduxThunk, 
				reduxlogger
			),
			window.devToolsExtension ? window.devToolsExtension() : null //TODO: setup redux dev tools - DevTools.instrument()
		)
	)
	return store
}
