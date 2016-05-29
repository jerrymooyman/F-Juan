'use strict'

import React from 'react'
import { connect } from 'react-redux'

import Header from './common/header'
import Footer from './common/footer'
import NavBar from './common/navBar'

import Home from './home'
import SchedulePage from './raceSchedulePage'

import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

class App extends React.Component {

    render() {

        return (
            <div className = 'wrapper' >
              <Header />
              <NavBar />
              { this.props.displayPage }
              <Footer />
            </div>
        )
    }
}

const getDisplayPage = function(pageName) {
    switch (pageName) {
        case 'Schedule':
            return <SchedulePage />
        default:
            return <Home />
    }
}

const mapStateToProps = (state) => {
    return {
        displayPage: getDisplayPage(state.uiview.currentPage)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
