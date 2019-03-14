import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { fetchRepos } from '../../../services/repositories'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { compose } from 'redux'
import { connect} from "react-redux";


const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	dense: {
		marginTop: 16,
	},
	menu: {
		width: 200,
	},
	button: {
		margin: theme.spacing.unit,
	},
	input: {
		display: 'none',
	},
});

class SidebarSearch extends Component {
	constructor(props){
		super(props)
		this.state = {
			searchQuery: ''
		}
	}

	handleChange = event => {
		const searchQuery = event.target.value;
		this.setState({
			searchQuery
		});
	}

	handleClick = () => {
		const {searchQuery}= this.state;
		this.props.fetchRepos(searchQuery);
	};


	render(){

		const { classes } = this.props;

		return (
			<div>
				<form className={classes.container} noValidate autoComplete="off">
					<TextField
						label="Search field"
						type="search"
						className={classes.textField}
						margin="normal"
						variant="outlined"
						value={this.state.searchQuery}
						onChange={this.handleChange}

					/>
					<Button color="primary" className={classes.button} onClick={this.handleClick}>
						Search
					</Button>
				</form>
			</div>
		)
	}
}

SidebarSearch.propTypes = {
	classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ repositories }) => {
	return {
		searchQuery: repositories.searchQuery
	}
};

export default compose(
	withStyles(styles),
	connect(
		mapStateToProps,
		{fetchRepos}
	))(SidebarSearch);