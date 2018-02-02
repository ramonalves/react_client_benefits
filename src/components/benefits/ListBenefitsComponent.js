import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { findAll, deleteById } from './BenefitsAPI'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

class ListBenefitsComponent extends Component {
	constructor(props) {
		super(props)

		this.state = { benefits: [] }

		this.handleDelete = this.handleDelete.bind(this)

		const styles = {
			root: {
			  width: '100%',
			  marginTop: 3,
			  overflowX: 'auto',
			},
			table: {
			  minWidth: 700,
			},
		  };
	}

	componentDidMount() {
		return findAll().then(data => this.setState({ benefits: data }))
	}

	handleDelete(benefit) {
		deleteById(benefit.id).then(() => {
			return findAll().then(data => this.setState({ benefits: data }))
		})
	}

	render() {
		let { benefits } = this.state
		return(
			<Paper >
			<Table>
			  <TableHead>
				<TableRow>		
					<TableCell>ID</TableCell>
					<TableCell>title</TableCell>
					<TableCell>description</TableCell>
					<TableCell>begindate</TableCell>
					<TableCell>enddate</TableCell>
					<TableCell>regulation</TableCell>
					<TableCell>likescount</TableCell>
					<TableCell>purchaseurl</TableCell>
					<TableCell>publicdescription</TableCell>
					<TableCell>Action</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{ benefits.map((benefit, index) => (
					<TableRow>
						<TableCell>{benefit.id}</TableCell>
						<TableCell>{benefit.title}</TableCell>
						<TableCell>{benefit.description}</TableCell>
						<TableCell>{benefit.begindate}</TableCell>
						<TableCell>{benefit.enddate}</TableCell>
						<TableCell>{benefit.regulation}</TableCell>
						<TableCell>{benefit.likescount}</TableCell>
						<TableCell>{benefit.purchaseurl}</TableCell>
						<TableCell>{benefit.publicdescription}</TableCell>
						<TableCell>
							<Button raised color="primary" type="submit" onClick={() => 
								{if(window.confirm('Delete the item?')) {this.deleteItem};
								this.handleDelete(benefit) 
							}}>Excluir</Button>
						</TableCell>
					</TableRow>
				)) }
			</TableBody>
      	</Table>
    </Paper>
		)
	}
}

export default ListBenefitsComponent