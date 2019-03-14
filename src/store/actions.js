const initialState = {
	status: 'default',
	searchQuery: 'javascript',
	perPage: null,
	totalPages: null,
	page: null,
	data: []
};

export const types = {
	GET_SEARCH_QUERY: 'GET_SEARCH_QUERY',
	REQUEST_REPOSITORIES: 'REQUEST_REPOSITORIES',
	RECEIVE_REPOSITORIES: 'RECEIVE_REPOSITORIES',
	GET_PER_PAGE_RESULT_INFO: 'GET_PER_PAGE_RESULT_INFO',
	GET_TOTAL_PAGES_COUNT_INFO: 'GET_TOTAL_PAGES_COUNT_INFO',
	GET_PAGE_INFO: 'GET_PAGE_INFO'
};

export default function repositories (state = initialState, action) {
	switch (action.type) {
		case types.GET_SEARCH_QUERY:
			return {
				...state,
				searchQuery: action.payload.searchQuery
			};
		case types.GET_PER_PAGE_RESULT_INFO:
			return {
				...state,
				perPage: action.payload.perPage
			};
		case types.GET_TOTAL_PAGES_COUNT_INFO:
			return {
				...state,
				pagesCount: action.payload.pagesCount
			};
		case types.GET_PAGE_INFO:
			return {
				...state,
				pageInfo: action.payload.pageInfo
			};
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
		default:
			return state;
	}
}