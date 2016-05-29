'use strict'

import React from 'react'
import { connect } from 'react-redux'

//TIP: import your actions
//import {
//  myAction
//} from '../../actions/actions'

class Header extends React.Component {

    render() {
        return (
            <header className = "header" >
                <a href = "#" > Formula One </a>
            </header>
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
)(Header)
