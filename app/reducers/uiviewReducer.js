'use strict'

import {
    SET_PAGE,
    NAVIGATE_ROUTE,
    REQUEST_DATA
} from '../actions/actions'


export default function uiviewReducer(state = {}, action) {
    switch (action.type) {
        case SET_PAGE:
            return Object.assign({}, state, {
                currentPage: action.args.pageName
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
