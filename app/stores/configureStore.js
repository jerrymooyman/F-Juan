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
        currentPage: 'home',
        currentPageInfo: {
            key: 'results',
            title: 'Results',
            route: '/'
        },
        lastApiCall: RESULTS
    },
    results: {
        circuitName: null,
        round: null,
        raceName: null,
        date: null,
        time: null,
        location: null,
        results: null
    },
    qualifying: {
        season: null,
        round: null,
        raceName: null,
        circuitName: null,
        location: null,
        date: null,
        results: null
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
                reduxThunk,
                reduxRouter,
                reduxlogger
            ),
            window.devToolsExtension ? window.devToolsExtension() : (next) => {
                return next
            } //TODO: account for when dev tools are not installed - DevTools.instrument()
        )
    )
    return store
}
