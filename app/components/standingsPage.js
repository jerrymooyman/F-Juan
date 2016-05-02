'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import ResultsList from './common/standingsList'


import {
  fetchData,

  RESULTS
} from '../actions/actions'

class StandingsPage extends Component {

  render() {
    let title =  this.props.raceInfo ? 'Rnd ' + this.props.raceInfo.round + ' ' + this.props.raceInfo.raceName : ''
    return (
        <div>
          <QualifyingList title={ title }
                  data={this.props.results} 
                  />
        </div>
      )
  }

}

const mapStateToProps = (state) => {
  return {
  	//TIP: place your state mapping here
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
)(StandingsPage)