'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/lib/raised-button'
import Paper from 'material-ui/lib/paper'
import LoadingIndicator from './common/loadingIndicator'
import DataTable from './dataTable'


import FloatingActionButton from 'material-ui/lib/floating-action-button';
import RefreshIcon from 'material-ui/lib/svg-icons/navigation/refresh'

//TIP: import your actions
//import {
//  myAction
//} from '../../actions/actions'

class raceSchedule extends Component {

  render() {
    const style = {
      paper: {
        // height: 100,
        // width: 80%,
        // margin: 5,
        textAlign: 'center',
        // display: 'inline-block',
      },
      floatingButton: {
        marginRight: 20,
      }
    };
    return (
      <div>
        <Paper style={style.paper} zDepth={3} >
            <h2>Season {(this.props.season) ? this.props.season : '...'} </h2>
            <DataTable dataTable={this.props.races} />
        </Paper>
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
  	//TIP: place your action mapping here
    //onSomeEvent: (actionArgs) => {
    //  dispatch(myAction(actionArgs))
    //}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(raceSchedule)