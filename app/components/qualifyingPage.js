'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'


import QualifyingList from './common/qualifyingList'

import {
    fetchData,

    QUALIFYING
} from '../actions/actions'

class QualifyingPage extends Component {

    componentDidMount() {
        this.props.onRefresh()
    }

    render() {
        let title = this.props.raceInfo ? 'Rnd ' + this.props.raceInfo.round + ' ' + this.props.raceInfo.raceName : ''
        return ( < div >
            < QualifyingList title = { title }
            data = { this.props.results }
            /> < /div>
        )
    }

}

const flattenResults = (results) => {
    if (!results) return null
    return results.map(result => {
        return {
            position: result.position,
            number: result.number,
            driver: result.Driver.givenName + ' ' + result.Driver.familyName,
            constructor: result.Constructor.name,
            time: (result.Time) ? result.Time.time : '',
            q1: result.Q1 ? result.Q1 : '',
            q2: result.Q2 ? result.Q2 : '',
            q3: result.Q3 ? result.Q3 : '',
        }
    })
}

const mapStateToProps = (state) => {
    return {
        raceInfo: state.qualifying.raceInfo,
        results: flattenResults(state.qualifying.results)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRefresh: () => {
            dispatch(fetchData(QUALIFYING))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QualifyingPage)
