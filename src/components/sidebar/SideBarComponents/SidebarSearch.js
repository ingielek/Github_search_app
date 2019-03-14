import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

	handleClick = () => {
		console.log('hi')
	};


	render(){

		const { classes } = this.props;

		return (
			<div>
				<form className={classes.container} noValidate autoComplete="off">
					<TextField
						id="outlined-search"
						label="Search field"
						type="search"
						className={classes.textField}
						margin="normal"
						variant="outlined"
					/>
					<Button color="primary" className={classes.button}>
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

export default withStyles(styles)(SidebarSearch);