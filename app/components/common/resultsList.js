'use strict'

import React from 'react';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import ActionAssignment from 'material-ui/lib/svg-icons/action/assignment';
import Colors from 'material-ui/lib/styles/colors';
import EditorInsertChart from 'material-ui/lib/svg-icons/editor/insert-chart';

import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/lib/icon-button';

class ResultsList extends React.Component {

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
					let pointsText = row.points > 0 ? '     for ' + row.points + ' points' : ''
		    		return (
					      <ListItem
					      	key={ row.position }
					        // leftAvatar={<Avatar icon={<FileFolder />} />}

  							rightIconButton={rightIconMenu}

					        // rightIcon={<ActionInfo />}
					        primaryText={	row.position + '  (' + 
					        				row.number + ')  ' + 
					        				row.driver + '  -  ' +
					        				row.constructor
					        			}
					        secondaryText={ row.status + ' - time: ' +
					    					row.time + ' from grid ' +
					    					row.grid + 
					    					pointsText}
					      />
		    			)
		    		})
		}

	render() {


		return (
			<div>
				 <List subheader={this.props.title} insetSubheader={true}>
					{ this.createResultsList() }
				 </List>
			</div>
		);
	}
}

export default ResultsList