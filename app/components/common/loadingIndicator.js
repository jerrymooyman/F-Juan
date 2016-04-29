'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import RefreshIndicator from 'material-ui/lib/refresh-indicator';

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
          <RefreshIndicator
            size={50}
            left={70}
            top={0}
            loadingColor={"#FF9800"}
            status="hide"
            style={style.refresh}
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
)(LoadingIndicator)