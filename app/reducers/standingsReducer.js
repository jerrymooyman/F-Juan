'use strict'

import _ from 'lodash'

import {
	REQUEST_DATA,
	RECEIVE_DATA,
	DRIVER_STANDINGS,
	CONSTRUCTOR_STANDINGS
} from '../actions/actions'

export default function standingsReducer (state = {}, action) {
	switch (action.type) {
		case RECEIVE_DATA:
			if(action.key !== QUALIFYING) return state
			if(action.data.MRData.RaceTable.Races.length === 0) return state

			let race = action.data.MRData.RaceTable.Races[0]
			return Object.assign({}, state, {
				raceInfo: {
					season: race.season,
				    round: race.round,
				    raceName: race.raceName,
				    circuitName: race.Circuit.circuitName,
				    date: race.date,
				    time: race.time,
				    location: race.Circuit.Location.locality + ', ' + race.Circuit.Location.country,
				},
			  	results: race.QualifyingResults
			})
		default:
			return state
	}
}