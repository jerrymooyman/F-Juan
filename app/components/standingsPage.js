'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

//TIP: import your actions
//import {
//  myAction
//} from '../../actions/actions'

class StandingsPage extends Component {

  render() {
    return (
      <div>
      	Standings Page
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