import {types} from '../store/actions'
import axios from 'axios'

export function requestReposList(searchQuery) {
	return {
		type: types.REQUEST_REPOSITORIES,
		searchQuery
	}
}

export function receiveReposList(data) {
	return {
		type: types.RECEIVE_REPOSITORIES,
		data: data
	}
}


export const fetchRepos = searchQuery => (dispatch) => {
	dispatch(requestReposList(searchQuery));
	return axios.get(`https://api.github.com/search/repositories?q=${searchQuery}`)
		.then((response, dispatch) => {
		dispatch(receiveReposList(response.data))
	})
		.catch(error => {
			throw(error);
		});
};