import {types} from '../store/actions'
import axios from 'axios'

export function requestReposList(searchQuery) {
	return {
		type: types.REQUEST_REPOSITORIES,
		payload: {searchQuery}
	}
}

export function receiveReposList(data) {
	return {
		type: types.RECEIVE_REPOSITORIES,
		payload: data.data
	}
}

export function getRepoId(repoId) {
	return {
		type: types.GET_REPO_ID,
		payload: {repoId}
	}
}


export const fetchRepos = searchQuery => async dispatch => {
	dispatch(requestReposList(searchQuery));
	return await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}`)
		.then(response => dispatch(receiveReposList(response)))
		.catch(error => {
			throw(error);
		});
};