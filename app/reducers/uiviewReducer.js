'use strict'

import _ from 'lodash'

import {
	SET_SIDE_NAV_VISIBLE,
	NAVIGATE_ROUTE,
	REQUEST_DATA
} from '../actions/actions'


export default function uiviewReducer (state = {}, action) {
	switch (action.type) {
		case SET_SIDE_NAV_VISIBLE:
			return Object.assign({}, state, {
				sideNavVisible: action.args.isVisible
			})
		case NAVIGATE_ROUTE:
			return Object.assign({}, state, {
				currentPageInfo: action.args.pageInfo
			})
		case REQUEST_DATA:
			return Object.assign({}, state, {
				lastApiCall: action.key
			})
		default:
			return state
	}
}