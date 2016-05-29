'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

//TIP: import your actions
//import {
//  myAction
//} from '../../actions/actions'

class LoadingIndicator extends Component {

  render() {
    return (
        <div style={style.container}>
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
)(LoadingIndicator)