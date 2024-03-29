import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import { connect} from "react-redux";
import { fetchRepos } from '../../services/repositories'

const columns = [{
	Header: 'ID',
	accessor: 'id'
}, {
	Header: 'Name',
	accessor: 'name',
}, {
	Header: 'Full Name',
	accessor: 'full_name'
}, {
	Header: 'Akcje',
	accessor: 'details',
	Cell: row => (
		<div>
			<button className="detailsBtn">
				Details
			</button>
		</div>
	)
}];

class RepositoriesTable extends Component {



	render() {
		const { repositories } = this.props;
		const repositoriesData = repositories.data.items;
		const isLoading = repositories.status === 'loading';

		return (
			 <ReactTable
					data={repositoriesData}
					loading={isLoading}
					columns={columns}
					minRows={1}
					className="repoTable"
				/>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		repositories: state.repositories
	}
};

export default connect(
	mapStateToProps,
	{ fetchRepos }
)(RepositoriesTable);