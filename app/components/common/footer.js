'use strict'

import React from 'react'
import { connect } from 'react-redux'

//TIP: import your actions
//import {
//  myAction
//} from '../../actions/actions'

class Footer extends React.Component {

    render() {
        return (
            <footer className = "footer" >
                <a href = "#" >Footer</a>
            </footer>
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
        //  dispatch(myAction(actionArgs))
        //}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)
