'use strict'

import { combineReducers } from 'redux'
import uiviewReducer from './uiviewReducer'
import raceScheduleReducer from './raceScheduleReducer'
import resultsReducer from './resultsReducer'
import qualifyingReducer from './qualifyingReducer'

export default combineReducers({
	uiview: uiviewReducer,
	results: resultsReducer,
	raceSchedule: raceScheduleReducer,
	qualifying: qualifyingReducer
})
