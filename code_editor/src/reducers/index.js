import {combineReducers} from 'redux';
import ExecuteReducer from './executeReducer';

let Reducer = combineReducers({executeReducer:ExecuteReducer})

export default Reducer;