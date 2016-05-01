'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResultsList from './common/resultsList'

//TIP: import your actions
//import {
//  myAction
//} from '../../actions/actions'

import {
  fetchData,

  RESULTS
} from '../actions/actions'

class ResultsPage extends Component {

  componentDidMount() {
    this.props.onRefresh()
  }

  render() {
    let title =  this.props.round ? 'Rnd ' + this.props.round + ' ' + this.props.raceName : ''
    return (
      <div>
      	<ResultsList 	title={ title }
      					data={this.props.results} 
      					/>
      </div>
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
    	points: result.points,
    	grid: result.grid,
    	laps: result.laps,
    	status: result.status
    }
   })
}

const mapStateToProps = (state) => {
  return {
    circuitName: state.results.circuitName,
    round: state.results.round,
    raceName: state.results.raceName,
    date: state.results.date,
    time: state.results.time,
    location: state.results.location,
  	results: flattenResults(state.results.results)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRefresh: () => {
      dispatch(fetchData(RESULTS))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsPage)