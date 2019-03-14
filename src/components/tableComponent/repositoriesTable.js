import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import { connect} from "react-redux";
import { fetchRepos } from '../../services/repositories'

const columns = [{
	Header: 'Autor',
	accessor: 'author'
}, {
	Header: 'Name',
	accessor: 'name',
}, {
	Header: 'URL',
	accessor: 'url'
}, {
	Header: 'Description',
	accessor: 'description'
}, {
	Header: 'Language',
	accessor: 'language'
}, {
	Header: 'Stars',
	accessor: 'stars'
}];

class RepositoriesTable extends Component {

	render() {

		const { repositories } = this.props;
		const repositoriesData = repositories.data.data;

		return <ReactTable
			data={repositoriesData}
			columns={columns}
			minRows={1}
			className="repoTable"
		/>
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