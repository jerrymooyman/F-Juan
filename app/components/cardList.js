'use strict'

import React, { Component } from 'react'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Paper from 'material-ui/lib/paper'

class CardList extends Component {
	
	render() {
	    const style = {
	      paper: {
	        // height: 100,
	        // width: 80%,
	        margin: 5,
	        textAlign: 'center',
	        // display: 'inline-block',
	      },
	      floatingButton: {
	        marginRight: 20,
	      },
	      cardTitle: {
	      	padding: 2,
	      },
	      cardText: {
	      	padding: 2
	      },
	      cardActions: {
	      	padding: 0
	      },
	      flatButton: {
	      	padding: 0
	      }
	    };
		return (
			<div>
		    	{ (this.props.data) ? 
		    		this.props.data.map( row => {
			    		return (

        					<Paper key={ row.date} style={style.paper} zDepth={2} >
							  <Card>
							    <CardTitle title={ row.raceName } subtitle={ row.circuitName + ', ' + row.location} style={ style.cardTitle } />
							    <CardText style={ style.cardText }>
							    	Round { row.round }   Date { row.date}
							    </CardText>

							    <CardActions sytle={ style.cardActions } >
							      <FlatButton label="Result" style={ style.flatButton } />
							      <FlatButton label="News" />
							    </CardActions>
							  </Card>
							</Paper>
			    			)
			    		})
			    		:
			    		''
		    	}

			</div>
		);
	}
}

export default CardList
