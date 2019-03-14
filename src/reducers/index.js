import { combineReducers} from "redux";
import repositories from '../store/actions'

export default combineReducers({
	repositories: repositories
});