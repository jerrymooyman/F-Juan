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
    return (
      <div>
      	<ResultsList 	title={'Rnd ' + this.props.round + ' ' + this.props.raceName} 
      					data={this.props.results} />
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
    	time: (result.Time) ? result.Time.time : ''
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