'use strict'

import fetch from 'isomorphic-fetch'
import { push } from 'react-router-redux'

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

export const SET_SIDE_NAV_VISIBLE = 'SET_SIDE_NAV_VISIBLE'
export function setSideNavVisible(isVisible) {
	return {
		type: SET_SIDE_NAV_VISIBLE,
		args: {
			isVisible: isVisible
		}
	}
}

export const NAVIGATE_ROUTE = 'NAVIGATE_ROUTE'
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


export const REQUEST_DATA= 'REQUEST_DATA'
function requestData(subreddit) {
  return {
    type: REQUEST_DATA,
    subreddit
  }
}

export const RECEIVE_DATA = 'RECEIVE_DATA'
function receiveData(subreddit, json) {
  return {
    type: RECEIVE_DATA,
    subreddit,
    data: {
    	season: json.MRData.RaceTable.season,
    	races: json.MRData.RaceTable.Races
    },
    // posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchData(subreddit) {

  // Thunk middleware knows how to handle functions.
  // It passes the dkispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestData(subreddit))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`http://ergast.com/api/f1/current.json`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveData(subreddit, json))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}