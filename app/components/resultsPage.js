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

		createResultsList() {
			if (!this.props.data) return ''

			const iconButtonElement = (
			  <IconButton
			    touch={true}
			    tooltip="more"
			    tooltipPosition="bottom-left"
			  >
			    <MoreVertIcon color={Colors.grey400} />
			  </IconButton>
			);

			const rightIconMenu = (
			  <IconMenu iconButtonElement={iconButtonElement}>
			    <MenuItem>Driver Info</MenuItem>
			    <MenuItem>Constructor Info</MenuItem>
			  </IconMenu>
			);

			return this.props.data.map( row => {
		    		return (
					      <ListItem
					      	key={ row.position }
					        // leftAvatar={<Avatar icon={<FileFolder />} />}

  							rightIconButton={rightIconMenu}

					        // rightIcon={<ActionInfo />}
					        primaryText={	row.position + '  (' + 
					        				row.number + ')  ' + 
					        				row.driver + '  -  ' +
					        				row.constructor }
					        secondaryText={ row.status + ' - time: ' +
					    					row.time + ' from grid ' +
					    					row.grid }
					      />
		    			)
		    		})
		}

  render() {
    return (
      <div>
      	<ResultsList 	title={'Rnd ' + this.props.round + ' ' + this.props.raceName} 
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