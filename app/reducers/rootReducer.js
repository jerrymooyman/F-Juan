'use strict'

import { combineReducers } from 'redux'
import uiviewReducer from './uiviewReducer'

export default combineReducers({
	uiview: uiviewReducer
})
