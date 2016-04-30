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

class ResultsList extends React.Component {
	render() {
		return (
			<div>
				 <List subheader={this.props.title} insetSubheader={true}>

			    	{ (this.props.data) ? 
			    		this.props.data.map( row => {
				    		return (
							      <ListItem
							        // leftAvatar={<Avatar icon={<FileFolder />} />}
							        rightIcon={<ActionInfo />}
							        primaryText={	row.position + '  (' + 
							        				row.number + ')  ' + 
							        				row.driver + '  -  ' +
							        				row.constructor }
							        secondaryText="Jan 9, 2014"
							      />
				    			)
				    		})
				    		:
				    		''
			    	}
				 </List>
			</div>
		);
	}
}

export default ResultsList
