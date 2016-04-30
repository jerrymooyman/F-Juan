'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/lib/raised-button'
import Paper from 'material-ui/lib/paper'
import LoadingIndicator from './common/loadingIndicator'
import DataTable from './dataTable'
import CardList from './cardList'


import FloatingActionButton from 'material-ui/lib/floating-action-button';
import RefreshIcon from 'material-ui/lib/svg-icons/navigation/refresh'

import {
  fetchData,

  CURRENT_SCHEDULE
} from '../actions/actions'


//TIP: import your actions
//import {
//  myAction
//} from '../../actions/actions'

class raceSchedule extends Component {

  componentDidMount() {
    this.props.onRefresh()
  }

  render() {
            // <DataTable dataTable={this.props.races} />
        // <Paper style={style.paper} zDepth={3} >
    return (
      <div>
          <CardList data={this.props.races} />
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
)(raceSchedule)