'use strict'

import { push } from 'react-router-redux'

import {
	SET_SIDE_NAV_VISIBLE,
	NAVIGATE_ROUTE
} from './actionTypes'

const pageInfoMap = [
	{
		key: 'schedule',
		title: 'Race Schedule',
		route: '/schedule'
	},
	{
		key: 'standings',
		title: 'Standings',
		route: '/standings'
	},
	{
		key: 'drivers',
		title: 'Drivers',
		route: '/drivers'
	}
]

export function setSideNavVisible(isVisible) {
	return {
		type: SET_SIDE_NAV_VISIBLE,
		args: {
			isVisible: isVisible
		}
	}
}

export function navigateFromSideNav(route) {
	return dispatch => {
		// close side nav
		dispatch(setSideNavVisible(false))	

		// navigate route to new page
		let index = _.findIndex(pageInfoMap, { key: route})
		let pageInfo = pageInfoMap[index]
		dispatch(push(pageInfo.route))

		// update current page info
		dispatch({
			type: NAVIGATE_ROUTE,
			args: {
				pageInfo: pageInfo
			}
		})
	}
}