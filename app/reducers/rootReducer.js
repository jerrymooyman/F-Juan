'use strict'

import { combineReducers } from 'redux'
import uiviewReducer from './uiviewReducer'
import raceScheduleReducer from './raceScheduleReducer'

export default combineReducers({
	uiview: uiviewReducer,
	raceSchedule: raceScheduleReducer
})
