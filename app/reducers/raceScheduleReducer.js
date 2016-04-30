'use strict'

import _ from 'lodash'

import {
	REQUEST_DATA,
	RECEIVE_DATA,
	CURRENT_SCHEDULE
} from '../actions/actions'

export default function raceScheduleReducer (state = {}, action) {
	switch (action.type) {
		case REQUEST_DATA:
			return state
		case RECEIVE_DATA:
			if(action.key !== CURRENT_SCHEDULE) return state

			return Object.assign({}, state, {
				season: action.data.MRData.RaceTable.season,
				races: action.data.MRData.RaceTable.Races
			})
		default:
			return state
	}
}