'use strict'

import moment from 'moment'
import React, { Component } from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

import Colors from 'material-ui/lib/styles/colors';

class DataTable extends Component {

	render() {
		const style = {
			header: {
				displaySelectAll: false,
				enableSelectAll: false
			}
		}
		return (
			  <Table>
			    <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
			      <TableRow>
			        <TableHeaderColumn>Round</TableHeaderColumn>
			        <TableHeaderColumn>Race Name</TableHeaderColumn>
			        <TableHeaderColumn>Date</TableHeaderColumn>
			        <TableHeaderColumn>Circuit</TableHeaderColumn>
			        <TableHeaderColumn>Location</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody displayRowCheckbox={false}>
			    	{ (this.props.dataTable) ? 
			    		this.props.dataTable.map( row => {
				    		return (
							      <TableRow key={row.date} style={(moment(row.date) < moment()) ? {backgroundColor:'#F7FFC5', color: 'grey',} : null}>
							        <TableRowColumn>{row.round}</TableRowColumn>
							        <TableRowColumn>{row.raceName}</TableRowColumn>
							        <TableRowColumn>{row.date}</TableRowColumn>
							        <TableRowColumn>{row.circuitName}</TableRowColumn>
							        <TableRowColumn>{row.location}</TableRowColumn>
							      </TableRow>
				    			)
				    		})
				    		:
				    		''
			    	}
			    </TableBody>
			  </Table>
		);
	}
}

export default DataTable
