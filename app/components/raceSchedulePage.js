'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    fetchData,

    CURRENT_SCHEDULE
} from '../actions/actions'


//TIP: import your actions
//import {
//  myAction
//} from '../../actions/actions'

class RaceCard extends Component {

    render() {
        return (
            <div className='card'>
                <div className='title'>
                    { this.props.raceDetails.raceName }
                </div>
                <div className='date-time'>
                    { this.props.raceDetails.date}
                </div>
                <div className='location'>
                    { this.props.raceDetails.location}
                </div>
                <div className='winner'>
                    winner's name
                </div>
            </div>
        )
    }
}

class RaceSchedule extends Component {

    componentDidMount() {
        this.props.onRefresh()
    }

    render() {
        // <DataTable dataTable={this.props.races} />
        // <Paper style={style.paper} zDepth={3} >
        return (
            <div className='list'>
            {
                (this.props.races) ?
                    this.props.races.map(row => {
                        return <RaceCard key={ row.raceName} raceDetails={ row } />
                    })
                :
                    ''
            }
            </div>
        )
    }

}

const flattenRaces = (races) => {
    if (!races) return null
    return races.map(race => {
        return {
            round: race.round,
            raceName: race.raceName,
            date: race.date,
            time: race.time,
            circuitName: race.Circuit.circuitName,
            location: race.Circuit.Location.locality + ', ' + race.Circuit.Location.country
        }
    })
}

const mapStateToProps = (state) => {
    return {
        season: state.raceSchedule.season,
        races: flattenRaces(state.raceSchedule.races)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRefresh: () => {
            dispatch(fetchData(CURRENT_SCHEDULE))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RaceSchedule)
