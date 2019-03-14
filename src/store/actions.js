const initialState = {
	status: 'default',
	searchQuery: '',
	repoId: null,
	data: []
};

export const types = {
	REQUEST_REPOSITORIES: 'REQUEST_REPOSITORIES',
	RECEIVE_REPOSITORIES: 'RECEIVE_REPOSITORIES',
	GET_REPO_ID: 'GET_REPO_ID'
};

export default function repositories (state = initialState, action) {
	switch (action.type) {
		case types.REQUEST_REPOSITORIES:
			return {
				...state,
				status: 'loading',
				searchQuery: action.payload.searchQuery
			};
		case types.RECEIVE_REPOSITORIES:
			return {
				...state,
				status: 'succeed',
				data: action.payload
			};
		case types.GET_REPO_ID:
			return {
				...state,
				repoId: action.payload.repoId
			};

		default:
			return state;
	}
}