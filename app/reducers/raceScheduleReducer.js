'use strict'

import _ from 'lodash'

import {
	REQUEST_DATA,
	RECEIVE_DATA 
} from '../actions/actions'

export default function raceScheduleReducer (state = {}, action) {
	switch (action.type) {
		case REQUEST_DATA:
			return state
		case RECEIVE_DATA:
			return Object.assign({}, state, {
				season: action.data.season,
				races: action.data.races
			})
		default:
			return state
	}
}